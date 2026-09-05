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

    // ── 1. HEAVY BACKGROUND FALLING RAIN STREAKS ──
    const bgDropCount = Math.min(Math.floor(width / 3.2), 360);
    const bgDrops = Array.from({ length: bgDropCount }, () => ({
      x: Math.random() * (width + 400) - 200,
      y: Math.random() * height,
      length: Math.random() * 45 + 30, // Longer heavy rain streaks
      speed: Math.random() * 22 + 18,  // Faster heavy downpour speed
      wind: -(Math.random() * 4 + 2.5), // Stronger wind angle
      opacity: Math.random() * 0.45 + 0.25,
      thickness: Math.random() * 1.6 + 0.8,
    }));

    // ── 2. HEAVY GLASS DROPLETS (SLIDING ON SCREEN) ──
    const maxGlassDrops = Math.min(Math.floor(width / 11), 110);
    const glassDrops = [];
    const trailDroplets = [];

    const createGlassDrop = (overrideY = null) => {
      const radius = Math.random() * 4.2 + 2.8;
      return {
        x: Math.random() * (width - 40) + 20,
        y: overrideY !== null ? overrideY : Math.random() * height,
        r: radius,
        speedY: Math.random() * 0.8 + 0.3,
        maxSpeed: Math.random() * 4.5 + 2.5, // Faster sliding under heavy gravity
        accel: Math.random() * 0.035 + 0.015,
        alpha: Math.random() * 0.35 + 0.6,
        stuckCounter: Math.floor(Math.random() * 25), // Shorter pauses due to heavy flow
        lastTrailY: 0,
      };
    };

    // Populate heavy glass droplets
    for (let i = 0; i < maxGlassDrops; i++) {
      glassDrops.push(createGlassDrop());
    }

    // Draw single 3D glass droplet with light refraction & shadow
    const drawGlassDrop = (x, y, r, alpha) => {
      ctx.save();
      ctx.translate(x, y);

      // A. Soft Drop Shadow
      ctx.beginPath();
      ctx.arc(1.5, 2.2, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 5, 15, ${alpha * 0.4})`;
      ctx.fill();

      // B. Refractive Glass Drop Body
      const bodyGrad = ctx.createRadialGradient(
        -r * 0.3, -r * 0.3, r * 0.05,
        0, 0, r
      );
      bodyGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.5})`);
      bodyGrad.addColorStop(0.45, `rgba(180, 225, 255, ${alpha * 0.25})`);
      bodyGrad.addColorStop(0.88, `rgba(10, 20, 35, ${alpha * 0.6})`);
      bodyGrad.addColorStop(1, `rgba(255, 255, 255, ${alpha * 0.35})`);

      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();

      // C. Top-Left Primary Light Reflection
      ctx.beginPath();
      ctx.arc(-r * 0.35, -r * 0.35, r * 0.34, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
      ctx.fill();

      // D. Bottom Rim Refraction Rim
      ctx.beginPath();
      ctx.arc(r * 0.28, r * 0.28, r * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 245, 255, ${alpha * 0.55})`;
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // ── RENDER 1: HEAVY BACKGROUND RAIN STREAKS ──
      ctx.lineCap = 'round';
      bgDrops.forEach((drop) => {
        drop.x += drop.wind;
        drop.y += drop.speed;

        if (drop.y > height) {
          drop.y = -drop.length - Math.random() * 60;
          drop.x = Math.random() * (width + 400) - 200;
        }

        const endX = drop.x + drop.wind * (drop.length / drop.speed);
        const endY = drop.y - drop.length;

        const gradient = ctx.createLinearGradient(drop.x, drop.y, endX, endY);
        gradient.addColorStop(0, `rgba(225, 245, 255, ${drop.opacity})`);
        gradient.addColorStop(0.7, `rgba(150, 210, 255, ${drop.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = drop.thickness;
        ctx.stroke();
      });

      // ── RENDER 2: TRAIL DROPLETS (MICRO WATER TRAILS) ──
      for (let i = trailDroplets.length - 1; i >= 0; i--) {
        const t = trailDroplets[i];
        t.alpha -= 0.0012; // gradual fade
        if (t.alpha <= 0) {
          trailDroplets.splice(i, 1);
          continue;
        }
        drawGlassDrop(t.x, t.y, t.r, t.alpha);
      }

      // ── RENDER 3: SLIDING GLASS DROPS ──
      glassDrops.forEach((drop, idx) => {
        if (drop.stuckCounter > 0) {
          drop.stuckCounter--;
        } else {
          drop.speedY += drop.accel;
          if (drop.speedY > drop.maxSpeed) drop.speedY = drop.maxSpeed;
          drop.y += drop.speedY;

          // Spawn micro trail droplets as water slides down
          if (Math.abs(drop.y - drop.lastTrailY) > drop.r * 2.8) {
            drop.lastTrailY = drop.y;
            if (trailDroplets.length < 320 && Math.random() < 0.85) {
              trailDroplets.push({
                x: drop.x + (Math.random() * 2 - 1),
                y: drop.y - drop.r * 1.4,
                r: Math.max(1.1, drop.r * (Math.random() * 0.35 + 0.25)),
                alpha: Math.random() * 0.4 + 0.4,
              });
            }
          }

          // Brief surface tension pauses
          if (Math.random() < 0.012) {
            drop.stuckCounter = Math.floor(Math.random() * 20 + 8);
            drop.speedY = Math.random() * 0.4 + 0.2;
          }
        }

        drawGlassDrop(drop.x, drop.y, drop.r, drop.alpha);

        // Reset drop when sliding past screen bottom
        if (drop.y > height + 25) {
          glassDrops[idx] = createGlassDrop(-20);
        }
      });

      // Maintain heavy rain density
      if (glassDrops.length < maxGlassDrops && Math.random() < 0.15) {
        glassDrops.push(createGlassDrop(-20));
      }

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
      }}
    />
  );
}
