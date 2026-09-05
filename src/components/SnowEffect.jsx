import React, { useEffect, useRef, useState } from 'react';

export default function SnowEffect() {
  const canvasRef = useRef(null);
  const [useStaticFallback, setUseStaticFallback] = useState(false);

  useEffect(() => {
    // 1. Detect slow network or reduced motion preferences
    const isSlowConnection = 
      navigator.connection && 
      (navigator.connection.effectiveType === '2g' || 
       navigator.connection.effectiveType === 'slow-2g' || 
       navigator.connection.saveData === true);

    const prefersReducedMotion = 
      window.matchMedia && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isLowPowerDevice = 
      navigator.hardwareConcurrency && 
      navigator.hardwareConcurrency <= 2;

    if (isSlowConnection || prefersReducedMotion || isLowPowerDevice) {
      setUseStaticFallback(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking with smooth momentum interpolation
    let mouseX = width / 2;
    let targetWindX = 0;
    let currentWindX = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      const normX = (mouseX - width / 2) / (width / 2);
      targetWindX = normX * 1.5;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

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

    // ── LIGHTWEIGHT OPTIMIZED SNOW PARTICLES (Max 75 for ultra lightness) ──
    const particleCount = Math.min(Math.floor(width / 14), 75);
    const particles = Array.from({ length: particleCount }, () => {
      const depthRand = Math.random();
      let depth, radius, speedY, baseOpacity;

      if (depthRand < 0.5) {
        depth = 0.4;
        radius = Math.random() * 1.0 + 1.0;
        speedY = Math.random() * 0.4 + 0.4;
        baseOpacity = Math.random() * 0.3 + 0.3;
      } else if (depthRand < 0.85) {
        depth = 0.8;
        radius = Math.random() * 1.5 + 2.0;
        speedY = Math.random() * 0.7 + 0.7;
        baseOpacity = Math.random() * 0.3 + 0.5;
      } else {
        depth = 1.2;
        radius = Math.random() * 2.0 + 3.8;
        speedY = Math.random() * 1.0 + 1.2;
        baseOpacity = Math.random() * 0.2 + 0.75;
      }

      const stampData = getStampForSize(radius);

      return {
        x: Math.random() * (width + 200) - 100,
        y: Math.random() * height,
        r: radius,
        depth,
        stampData,
        speedY,
        swayAmp: Math.random() * 1.2 + 0.4,
        swayFreq: Math.random() * 0.015 + 0.005,
        step: Math.random() * Math.PI * 2,
        baseOpacity,
      };
    });

    let globalTime = 0;

    const render = () => {
      // Skip rendering if page tab is hidden to save battery & CPU
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      globalTime += 0.01;
      ctx.clearRect(0, 0, width, height);

      currentWindX += (targetWindX - currentWindX) * 0.03;
      const breeze = Math.sin(globalTime * 0.5) * 0.3;

      particles.forEach((p) => {
        p.step += p.swayFreq;
        const totalWindX = (currentWindX + breeze) * p.depth;
        const swayX = Math.sin(p.step) * p.swayAmp * p.depth;

        p.x += swayX + totalWindX;
        p.y += p.speedY * p.depth;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * (width + 200) - 100;
        }
        if (p.x > width + 30) {
          p.x = -30;
        } else if (p.x < -30) {
          p.x = width + 30;
        }

        ctx.globalAlpha = p.baseOpacity;
        const { stamp, radius, pad } = p.stampData;
        ctx.drawImage(stamp, p.x - radius - pad, p.y - radius - pad);
      });

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
    // Lightweight static overlay image for slow networks / low power devices
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
