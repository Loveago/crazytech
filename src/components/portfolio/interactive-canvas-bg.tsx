"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  originX: number;
  originY: number;
  z: number; // 1 = far, 2 = mid, 3 = near
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  hasSpikes: boolean;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  maxLife: number;
  life: number;
}

interface NebulaCloud {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  phase: number;
}

export function InteractiveCanvasBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates with smooth lerping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let nebulas: NebulaCloud[] = [];

    // Initialize Nebulae (ultra-soft slow moving cosmic glows)
    const initNebulas = (w: number, h: number) => {
      nebulas = [
        {
          x: w * 0.3,
          y: h * 0.25,
          radius: Math.max(w, h) * 0.35,
          color: "rgba(30, 58, 138, 0.08)", // Midnight Cobalt
          vx: 0.15,
          vy: 0.08,
          phase: 0,
        },
        {
          x: w * 0.75,
          y: h * 0.45,
          radius: Math.max(w, h) * 0.4,
          color: "rgba(49, 46, 129, 0.07)", // Deep Stellar Indigo
          vx: -0.12,
          vy: 0.1,
          phase: Math.PI / 2,
        },
        {
          x: w * 0.5,
          y: h * 0.8,
          radius: Math.max(w, h) * 0.38,
          color: "rgba(15, 23, 42, 0.12)", // Obsidian Slate
          vx: 0.1,
          vy: -0.09,
          phase: Math.PI,
        },
      ];
    };

    // Initialize Starfield
    const initStars = (w: number, h: number) => {
      const starCount = Math.floor((w * h) / 7500); // responsive star density (~160 on 1080p)
      stars = [];

      for (let i = 0; i < starCount; i++) {
        const z = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
        const radius = z === 1 ? Math.random() * 0.7 + 0.3 : z === 2 ? Math.random() * 0.8 + 0.8 : Math.random() * 1.0 + 1.2;
        const x = Math.random() * w;
        const y = Math.random() * h;

        stars.push({
          x,
          y,
          originX: x,
          originY: y,
          z,
          radius,
          baseAlpha: Math.random() * 0.5 + 0.35,
          twinkleSpeed: Math.random() * 0.025 + 0.008,
          phase: Math.random() * Math.PI * 2,
          hasSpikes: z === 3 && Math.random() > 0.45, // Diffraction spikes on prominent stars
          vx: 0,
          vy: 0,
        });
      }
    };

    // Spawn a shooting star / meteor
    const spawnShootingStar = (w: number) => {
      const angle = (Math.PI / 180) * (35 + Math.random() * 15); // gentle 35-50 degree descent
      const speed = Math.random() * 8 + 12;
      const length = Math.random() * 70 + 80;

      shootingStars.push({
        x: Math.random() * (w * 1.2) - w * 0.1,
        y: Math.random() * (height * 0.4),
        length,
        speed,
        angle,
        opacity: 0,
        active: true,
        maxLife: Math.floor(Math.random() * 25 + 35),
        life: 0,
      });
    };

    let nextMeteorTime = Date.now() + 2000;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      initNebulas(width, height);
      initStars(width, height);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    // Main 60fps render loop
    const render = () => {
      // Pause drawing if user switches tabs to conserve CPU/battery
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.016;

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Deep Space Nebulae Clouds
      ctx.save();
      for (let i = 0; i < nebulas.length; i++) {
        const neb = nebulas[i];
        neb.x += neb.vx;
        neb.y += neb.vy;

        // Soft bounce within boundaries
        if (neb.x < -width * 0.2 || neb.x > width * 1.2) neb.vx *= -1;
        if (neb.y < -height * 0.2 || neb.y > height * 1.2) neb.vy *= -1;

        const pulse = Math.sin(time * 0.4 + neb.phase) * 0.05 + 1;
        const currentRadius = neb.radius * pulse;

        const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, currentRadius);
        grad.addColorStop(0, neb.color);
        grad.addColorStop(0.65, neb.color.replace(/[\d\.]+\)$/, "0.02)"));
        grad.addColorStop(1, "transparent");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 2. Draw Twinkling Stars with Gravitational Parallax
      const mouseRadius = 130;
      const mouseRadiusSq = mouseRadius * mouseRadius;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Cosmic drift: stars slowly float upwards
        star.originY -= star.z * 0.08;
        if (star.originY < -10) {
          star.originY = height + 10;
          star.originX = Math.random() * width;
          star.x = star.originX;
          star.y = star.originY;
        }

        // Mouse gravitational interaction
        if (mouse.active) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouseRadius) * (star.z * 1.8);
            star.vx += (dx / dist) * force;
            star.vy += (dy / dist) * force;
          }
        }

        // Return to origin with gentle spring elasticity
        star.vx += (star.originX - star.x) * 0.03;
        star.vy += (star.originY - star.y) * 0.03;
        star.vx *= 0.88; // Damping
        star.vy *= 0.88;

        star.x += star.vx;
        star.y += star.vy;

        // Twinkle luminance calculation
        const twinkle = Math.sin(time * (star.twinkleSpeed * 60) + star.phase);
        const alpha = Math.max(0.1, Math.min(1, star.baseAlpha + twinkle * 0.28));

        // Draw star core
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Prominent stars: Subtle diffraction spikes (James Webb / astronomical look)
        if (star.hasSpikes && alpha > 0.55) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.4})`;
          ctx.lineWidth = 0.5;
          const spikeLen = star.radius * 3.2;

          ctx.beginPath();
          ctx.moveTo(star.x - spikeLen, star.y);
          ctx.lineTo(star.x + spikeLen, star.y);
          ctx.moveTo(star.x, star.y - spikeLen);
          ctx.lineTo(star.x, star.y + spikeLen);
          ctx.stroke();
        }
      }

      // 3. Shooting Stars / Meteors Logic
      if (Date.now() > nextMeteorTime) {
        spawnShootingStar(width);
        nextMeteorTime = Date.now() + Math.random() * 4000 + 3500; // Next meteor in 3.5s to 7.5s
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const m = shootingStars[i];
        m.life++;

        // Fade in first 20%, then fade out
        const progress = m.life / m.maxLife;
        if (progress < 0.2) {
          m.opacity = progress / 0.2;
        } else {
          m.opacity = 1 - (progress - 0.2) / 0.8;
        }

        const vx = Math.cos(m.angle) * m.speed;
        const vy = Math.sin(m.angle) * m.speed;

        m.x += vx;
        m.y += vy;

        // Calculate tail end point
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        // Draw meteor gradient trail
        const trailGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        trailGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
        trailGrad.addColorStop(0.7, `rgba(224, 231, 255, ${m.opacity * 0.3})`);
        trailGrad.addColorStop(1, `rgba(255, 255, 255, ${m.opacity * 0.95})`);

        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Meteor Head Spark
        ctx.fillStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.3, 0, Math.PI * 2);
        ctx.fill();

        if (m.life >= m.maxLife || m.x > width + 100 || m.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#07080c]"
      style={
        {
          "--mouse-x": "50vw",
          "--mouse-y": "30vh",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* Dynamic 60fps Deep Space Canvas (Stars, Nebulae, Meteors) */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Subtle Studio Dot Grid Architectural Overlay */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.45) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 35%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 35%, black 20%, transparent 85%)",
        }}
      />

      {/* Top Ambient Starlight Crown */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 65% 45% at 50% 35%, rgba(99, 102, 241, 0.12), rgba(8, 9, 13, 0))",
          filter: "blur(60px)",
        }}
      />

      {/* Cursor Stellar Aura (Softly reveals celestial field around user cursor) */}
      <div
        className="absolute h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 transition-transform duration-300 ease-out pointer-events-none"
        style={{
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          background: "radial-gradient(circle, rgba(147, 197, 253, 0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}
