import React, { useEffect, useRef, useState } from 'react';

export default function SnowEffect() {
  const canvasRef = useRef(null);
  const [useStaticFallback, setUseStaticFallback] = useState(false);

  useEffect(() => {
    // Detect slow network or reduced motion preferences
    const isSlowConnection = 
      navigator.connection && 
      (navigator.connection.effectiveType === '2g' || 
       navigator.connection.effectiveType === 'slow-2g' || 
       navigator.connection.saveData === true);

    const prefersReducedMotion = 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isSlowConnection || prefersReducedMotion) {
      setUseStaticFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle wind sway
    let mouseX = width / 2;
    let targetWindX = 0;
    let currentWindX = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      const normX = (mouseX - width / 2) / (width / 2);
      targetWindX = normX * 1.6;
    };

    // ── PRE-RENDER MULTI-LAYER STAMPS (Glow, Core, Blur) ──
    const layersConfig = [
      { id: 'bg', radius: 1.2, alpha: 0.4 },
      { id: 'md', radius: 2.5, alpha: 0.75 },
      { id: 'fg', radius: 4.5, alpha: 0.9 }
    ];

    const stamps = layersConfig.map((config) => {
      const stamp = document.createElement('canvas');
      const pad = 8;
      const diameter = Math.ceil((config.radius + pad) * 2);
      stamp.width = diameter;
      stamp.height = diameter;
      const sCtx = stamp.getContext('2d');
      const cx = diameter / 2;
      const cy = diameter / 2;

      // Outer halo
      const outerGrad = sCtx.createRadialGradient(cx, cy, 0, cx, cy, config.radius + pad);
      outerGrad.addColorStop(0, `rgba(255, 255, 255, ${config.alpha})`);
      outerGrad.addColorStop(0.4, 'rgba(215, 238, 255, 0.4)');
      outerGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

      sCtx.beginPath();
      sCtx.arc(cx, cy, config.radius + pad, 0, Math.PI * 2);
      sCtx.fillStyle = outerGrad;
      sCtx.fill();

      // Solid core
      sCtx.beginPath();
      sCtx.arc(cx, cy, Math.max(0.6, config.radius * 0.5), 0, Math.PI * 2);
      sCtx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      sCtx.fill();

      return { stamp, radius: config.radius, pad };
    });

    const getStampForSize = (r) => {
      let closest = stamps[0];
      let minDiff = Math.abs(r - closest.radius);
      for (let i = 1; i < stamps.length; i++) {
        const diff = Math.abs(r - stamps[i].radius);
        if (diff < minDiff) {
          minDiff = diff;
          closest = stamps[i];
        }
      }
      return closest;
    };

    // ── FALLING SNOW PARTICLES ──
    const particleCount = Math.min(Math.floor(width / 10), 110);
    const particles = Array.from({ length: particleCount }, () => {
      const depthRand = Math.random();
      let depth, radius, speedY, baseOpacity;

      if (depthRand < 0.4) {
        depth = 0.4;
        radius = Math.random() * 1.0 + 1.0;
        speedY = Math.random() * 0.6 + 0.6;
        baseOpacity = Math.random() * 0.3 + 0.3;
      } else if (depthRand < 0.8) {
        depth = 0.8;
        radius = Math.random() * 1.5 + 2.0;
        speedY = Math.random() * 0.9 + 0.9;
        baseOpacity = Math.random() * 0.3 + 0.5;
      } else {
        depth = 1.2;
        radius = Math.random() * 2.2 + 3.5;
        speedY = Math.random() * 1.2 + 1.4;
        baseOpacity = Math.random() * 0.2 + 0.8;
      }

      const stampData = getStampForSize(radius);

      return {
        x: Math.random() * (width + 200) - 100,
        y: Math.random() * height,
        r: radius,
        depth,
        stampData,
        speedY,
        swayAmp: Math.random() * 1.4 + 0.5,
        swayFreq: Math.random() * 0.018 + 0.006,
        step: Math.random() * Math.PI * 2,
        baseOpacity,
      };
    });

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    let globalTime = 0;
    let currentSnowOpacity = 1.0;

    const render = () => {
      if (document.hidden || document.documentElement.getAttribute('data-matrix-mode') === 'active') {
        ctx.clearRect(0, 0, width, height);
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const tempMode = document.body.getAttribute('data-temp-mode');
      const isWarm = tempMode === 'warm';
      const targetSnowOpacity = isWarm ? 0.0 : 1.0;

      // Smoothly transition snow opacity over 1 second
      currentSnowOpacity += (targetSnowOpacity - currentSnowOpacity) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // If temperature is higher and snow has completely faded out, pause particle drawing
      if (currentSnowOpacity <= 0.005) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      globalTime += 0.01;

      currentWindX += (targetWindX - currentWindX) * 0.03;
      const breeze = Math.sin(globalTime * 0.5) * 0.35;

      // UPDATE & DRAW FALLING PARTICLES
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.step += p.swayFreq;
        const totalWindX = (currentWindX + breeze) * p.depth;
        const swayX = Math.sin(p.step) * p.swayAmp * p.depth;

        p.x += swayX + totalWindX;
        p.y += p.speedY * p.depth;

        // Screen wrap-around for top/bottom/sides
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * (width + 200) - 100;
        }

        if (p.x > width + 40) {
          p.x = -40;
        } else if (p.x < -40) {
          p.x = width + 40;
        }

        // Draw falling particle with temperature opacity multiplier
        ctx.globalAlpha = Math.max(0, p.baseOpacity * currentSnowOpacity);
        const { stamp, radius, pad } = p.stampData;
        ctx.drawImage(stamp, p.x - radius - pad, p.y - radius - pad);
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (useStaticFallback) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 10,
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 1px, transparent 1px),
                            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.06) 1.5px, transparent 1.5px),
                            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: '120px 120px, 180px 180px, 150px 150px',
          opacity: 0.6
        }}
      />
    );
  }

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
