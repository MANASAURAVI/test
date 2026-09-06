import React, { useEffect, useRef } from 'react';

export default function MatrixRainOverlay({ isActive, onClose }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isActive) {
      root.setAttribute('data-matrix-mode', 'active');
    } else {
      root.removeAttribute('data-matrix-mode');
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (Katakana + Numbers + Cyber chars)
    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF<>[]{}*+=#/\\';
    const charArray = chars.split('');

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      // Translucent pure black background for smooth trailing matrix rain effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF41'; // Matrix neon green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <>
      {/* BACKGROUND MATRIX CANVAS RUNNING BEHIND ALL WEBSITE CONTENT */}
      <div className="matrix-bg-wrapper">
        <canvas ref={canvasRef} className="matrix-bg-canvas" />
      </div>

      {/* COMPACT FLOATING HUD BAR AT BOTTOM CENTER */}
      <div className="matrix-controls-bar">
        <span className="matrix-status-text">⚡ MATRIX MODE ACTIVE</span>
        <button className="matrix-stop-btn" onClick={onClose} title="Exit Matrix Mode (Shift + E)">
          <kbd className="matrix-kbd">SHIFT</kbd>+<kbd className="matrix-kbd">E</kbd> EXIT ✕
        </button>
      </div>
    </>
  );
}
