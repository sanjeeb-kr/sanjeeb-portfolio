import React, { useEffect, useRef } from 'react';

const ConstellationBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animFrameRef = useRef(null);
    const accentColorRgb = '0, 243, 255';

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Adjusted density for full-screen coverage
        // Higher divisor = fewer points. 14000 was for Hero (approx 100vh).
        // Let's use 16000 for a slightly cleaner feel over full page.
        const NUM_POINTS = Math.floor((width * height) / 16000);
        const MAX_DIST = 150;
        const MOUSE_INTERACT_RADIUS = 180;

        const points = Array.from({ length: NUM_POINTS }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            r: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
        }));

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize, { passive: true });

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Update positions with mouse repulsion
            points.forEach(p => {
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_INTERACT_RADIUS) {
                    const force = (MOUSE_INTERACT_RADIUS - dist) / MOUSE_INTERACT_RADIUS;
                    p.x += (dx / dist) * force * 2.5;
                    p.y += (dy / dist) * force * 2.5;
                }

                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
            });

            // Draw connections between close points
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) {
                        const alpha = (1 - dist / MAX_DIST) * 0.3;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${accentColorRgb}, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse connections
            points.forEach(p => {
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_INTERACT_RADIUS + 20) {
                    const alpha = (1 - dist / (MOUSE_INTERACT_RADIUS + 20)) * 0.4;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(100, 200, 255, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                }
            });

            // Draw glowing dots
            points.forEach(p => {
                ctx.beginPath();
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5);
                gradient.addColorStop(0, `rgba(${accentColorRgb}, ${p.opacity})`);
                gradient.addColorStop(1, `rgba(${accentColorRgb}, 0)`);
                ctx.fillStyle = gradient;
                ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.fillStyle = `rgba(200, 243, 255, ${p.opacity * 0.8})`;
                ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
                ctx.fill();
            });

            animFrameRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40 mix-blend-screen"
        />
    );
};

export default ConstellationBackground;
