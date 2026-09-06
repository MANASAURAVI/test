import React, { useRef } from 'react';
import { animate } from 'animejs';

export default function Anime3DButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  tag: Tag = 'button',
  ...props
}) {
  const btnRef = useRef(null);
  const animRef = useRef(null);

  const handleMouseEnter = () => {
    if (!btnRef.current) return;
    if (animRef.current) animRef.current.pause();
    animRef.current = animate(btnRef.current, {
      scale: 1.04,
      translateY: -3,
      duration: 300,
      ease: 'outQuad'
    });
  };

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 10;
    const rotateY = (x / (rect.width / 2)) * 10;

    if (animRef.current) animRef.current.pause();
    animRef.current = animate(btnRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      translateZ: 12,
      duration: 150,
      ease: 'outQuad'
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    if (animRef.current) animRef.current.pause();
    animRef.current = animate(btnRef.current, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      translateY: 0,
      translateZ: 0,
      duration: 500,
      ease: 'outElastic(1, 0.6)'
    });
  };

  const handleMouseDown = () => {
    if (!btnRef.current) return;
    if (animRef.current) animRef.current.pause();
    animRef.current = animate(btnRef.current, {
      scale: 0.96,
      translateY: 3,
      rotateX: 0,
      rotateY: 0,
      translateZ: 0,
      duration: 120,
      ease: 'outQuad'
    });
  };

  const handleMouseUp = () => {
    if (!btnRef.current) return;
    if (animRef.current) animRef.current.pause();
    animRef.current = animate(btnRef.current, {
      scale: 1.04,
      translateY: -3,
      duration: 350,
      ease: 'outBack'
    });
  };

  const Component = href ? 'a' : Tag;

  return (
    <Component
      ref={btnRef}
      className={`anime-3d-button ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      {children}
    </Component>
  );
}
