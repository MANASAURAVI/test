import React, { useEffect, useRef } from 'react';

export default function RainEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // ── GPU HARDWARE-ACCELERATED DROPLET PRE-RENDERING ──
    // Create pre-rendered droplet canvas stamps to avoid per-frame gradient allocation
    const stampSizes = [2.0, 3.0, 4.0, 5.0];
    const dropStamps = stampSizes.map((radius) => {
      const stamp = document.createElement('canvas');
      const pad = 6;
      const diameter = Math.ceil((radius + pad) * 2);
      stamp.width = diameter;
      stamp.height = diameter;
      const sCtx = stamp.getContext('2d');
      const cx = diameter / 2;
      const cy = diameter / 2;

      // Shadow
      sCtx.beginPath();
      sCtx.arc(cx + 1.2, cy + 1.8, radius, 0, Math.PI * 2);
      sCtx.fillStyle = 'rgba(0, 5, 12, 0.35)';
      sCtx.fill();

      // Refractive Body
      const bodyGrad = sCtx.createRadialGradient(
        cx - radius * 0.3, cy - radius * 0.3, radius * 0.05,
        cx, cy, radius
      );
      bodyGrad.addColorStop(0, 'rgba(255, 255, 255, 0.45)');
      bodyGrad.addColorStop(0.45, 'rgba(180, 220, 255, 0.22)');
      bodyGrad.addColorStop(0.88, 'rgba(10, 20, 35, 0.55)');
      bodyGrad.addColorStop(1, 'rgba(255, 255, 255, 0.3)');

      sCtx.beginPath();
      sCtx.arc(cx, cy, radius, 0, Math.PI * 2);
      sCtx.fillStyle = bodyGrad;
      sCtx.fill();

      // Top Highlight
      sCtx.beginPath();
      sCtx.arc(cx - radius * 0.35, cy - radius * 0.35, radius * 0.32, 0, Math.PI * 2);
      sCtx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      sCtx.fill();

      // Bottom Rim
      sCtx.beginPath();
      sCtx.arc(cx + radius * 0.28, cy + radius * 0.28, radius * 0.38, 0, Math.PI * 2);
      sCtx.fillStyle = 'rgba(220, 245, 255, 0.5)';
      sCtx.fill();

      return { stamp, radius, pad };
    });

    const getNearestStamp = (r) => {
      let closest = dropStamps[0];
      let minDiff = Math.abs(r - closest.radius);
      for (let i = 1; i < dropStamps.length; i++) {
        const diff = Math.abs(r - dropStamps[i].radius);
        if (diff < minDiff) {
          minDiff = diff;
          closest = dropStamps[i];
        }
      }
      return closest;
    };

    // ── 1. BACKGROUND FALLING RAIN (OPTIMIZED STREAKS) ──
    const bgDropCount = Math.min(Math.floor(width / 5), 180);
    const bgDrops = Array.from({ length: bgDropCount }, () => ({
      x: Math.random() * (width + 300) - 150,
      y: Math.random() * height,
      length: Math.random() * 35 + 20,
      speed: Math.random() * 18 + 14,
      wind: -(Math.random() * 3 + 1.8),
      opacity: Math.random() * 0.3 + 0.15,
      thickness: Math.random() * 1.2 + 0.7,
    }));

    // ── 2. GLASS DROPLETS (HARDWARE ACCELERATED SLIDING) ──
    const maxGlassDrops = Math.min(Math.floor(width / 16), 65);
    const glassDrops = [];
    const trailDroplets = [];

    const createGlassDrop = (overrideY = null) => {
      const targetRadius = Math.random() * 3.2 + 2.0;
      const stampData = getNearestStamp(targetRadius);
      return {
        x: Math.random() * (width - 40) + 20,
        y: overrideY !== null ? overrideY : Math.random() * height,
        r: stampData.radius,
        stampData,
        speedY: Math.random() * 0.6 + 0.2,
        maxSpeed: Math.random() * 3.2 + 1.8,
        accel: Math.random() * 0.025 + 0.01,
        alpha: Math.random() * 0.35 + 0.65,
        stuckCounter: Math.floor(Math.random() * 30),
        lastTrailY: 0,
      };
    };

    for (let i = 0; i < maxGlassDrops; i++) {
      glassDrops.push(createGlassDrop());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // ── RENDER 1: FAST BACKGROUND RAIN (BATCH STROKES) ──
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(215, 238, 255, 0.32)';
      ctx.lineWidth = 1.1;
      ctx.beginPath();

      bgDrops.forEach((drop) => {
        drop.x += drop.wind;
        drop.y += drop.speed;

        if (drop.y > height) {
          drop.y = -drop.length - Math.random() * 40;
          drop.x = Math.random() * (width + 300) - 150;
        }

        const endX = drop.x + drop.wind * (drop.length / drop.speed);
        const endY = drop.y - drop.length;

        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(endX, endY);
      });
      ctx.stroke();

      // ── RENDER 2: TRAIL DROPLETS (GPU STAMP DRAWING) ──
      for (let i = trailDroplets.length - 1; i >= 0; i--) {
        const t = trailDroplets[i];
        t.alpha -= 0.0015;
        if (t.alpha <= 0) {
          trailDroplets.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = t.alpha;
        const { stamp, radius, pad } = t.stampData;
        ctx.drawImage(stamp, t.x - radius - pad, t.y - radius - pad);
      }

      // ── RENDER 3: SLIDING GLASS DROPS (GPU STAMP DRAWING) ──
      glassDrops.forEach((drop, idx) => {
        if (drop.stuckCounter > 0) {
          drop.stuckCounter--;
        } else {
          drop.speedY += drop.accel;
          if (drop.speedY > drop.maxSpeed) drop.speedY = drop.maxSpeed;
          drop.y += drop.speedY;

          if (Math.abs(drop.y - drop.lastTrailY) > drop.r * 3.2) {
            drop.lastTrailY = drop.y;
            if (trailDroplets.length < 160 && Math.random() < 0.75) {
              const trailStamp = getNearestStamp(drop.r * 0.6);
              trailDroplets.push({
                x: drop.x + (Math.random() * 1.5 - 0.75),
                y: drop.y - drop.r * 1.5,
                r: trailStamp.radius,
                stampData: trailStamp,
                alpha: Math.random() * 0.35 + 0.45,
              });
            }
          }

          if (Math.random() < 0.01) {
            drop.stuckCounter = Math.floor(Math.random() * 25 + 10);
            drop.speedY = Math.random() * 0.3 + 0.15;
          }
        }

        ctx.globalAlpha = drop.alpha;
        const { stamp, radius, pad } = drop.stampData;
        ctx.drawImage(stamp, drop.x - radius - pad, drop.y - radius - pad);

        if (drop.y > height + 20) {
          glassDrops[idx] = createGlassDrop(-15);
        }
      });

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 10,
        willChange: 'transform',
      }}
    />
  );
}
