import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';



// ── Counter-Up Hook ──────────────────────────────────────────────────
const useCountUp = (target, duration = 1800, start = false) => {
    const [count, setCount] = useState(0);
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, ''));
    const suffix = String(target).replace(/[0-9.]/g, '');
    const isDecimal = String(target).includes('.');

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }
        let startTime = null;
        const startVal = 0;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
            const current = startVal + eased * (numericTarget - startVal);
            setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [start, numericTarget, duration, isDecimal]);

    return `${count}${suffix}`;
};

// ── Stat Card with Counter ───────────────────────────────────────────
const StatCard = ({ stat, idx, started }) => {
    const displayValue = useCountUp(stat.value, 1600 + idx * 100, started);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7 + idx * 0.15, type: 'spring', bounce: 0.35 }}
            className="group relative flex flex-col items-center justify-center text-center rounded-3xl overflow-hidden cursor-default"
            style={{
                padding: '18px 20px',
                background: 'var(--bg-base)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid transparent',
                backgroundClip: 'padding-box',
                boxShadow: '0 8px 32px var(--card-bg), 0 0 15px rgba(var(--accent-1-rgb), 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            onMouseOver={e => {
                e.currentTarget.style.boxShadow = '0 0 45px rgba(var(--accent-1-rgb), 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.background = 'rgba(var(--accent-1-rgb), 0.1)';
            }}
            onMouseOut={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px var(--card-bg), 0 0 15px rgba(var(--accent-1-rgb), 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'var(--bg-base)';
            }}
        >
            {/* Thicker Glowing Border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 50%, var(--accent-1) 100%)',
                    mask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    WebkitMaskComposite: 'xor',
                    padding: '2.5px',
                }}
            />

            {/* Glow blob behind icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{ background: 'var(--accent-1)' }} />

            <stat.icon size={28} className="mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-1" style={{ color: 'var(--accent-1)' }} />

            <h3 className="text-3xl md:text-4xl font-black mb-1 tracking-tighter tabular-nums transition-all duration-300 group-hover:scale-110"
                style={{ color: 'var(--text-primary)', fontVariantNumeric: 'tabular-nums' }}>
                {displayValue}
            </h3>

            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-70"
                style={{ color: 'var(--text-muted)' }}>
                {stat.label}
            </p>
        </motion.div>
    );
};

// ── Main Hero ────────────────────────────────────────────────────────
const Hero = () => {
    const { hero, personal } = portfolioData;
    const [textIndex, setTextIndex] = useState(0);
    const [counterStarted, setCounterStarted] = useState(false);
    const statsRef = useRef(null);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    const longestText = hero.rotatingText.reduce((a, b) => (a.length > b.length ? a : b), '');

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % hero.rotatingText.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hero.rotatingText.length]);

    // Trigger counter when stats section enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { setCounterStarted(entry.isIntersecting); },
            { threshold: 0.3 }
        );
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    const stats = [
        { label: 'CGPA', value: personal.stats.cgpa, icon: GraduationCap },
        { label: 'Projects', value: personal.stats.projects, icon: Briefcase },
        { label: 'Certifications', value: personal.stats.certifications, icon: Award },
    ];

    return (
        <section id="home" className="relative min-h-[110vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden">



            {/* Ambient Blob Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[15%] w-[32rem] h-[32rem] bg-primary/8 rounded-full blur-[140px] animate-blob" />
                <div className="absolute bottom-[15%] right-[15%] w-[36rem] h-[36rem] bg-secondary/8 rounded-full blur-[140px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center z-10">
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center w-full max-w-5xl"
                >
                    {/* Highly prominent Name */}
                    <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black mb-10 leading-none tracking-tighter font-heading relative z-20"
                        style={{ 
                            color: '#ffffff',
                            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.1)',
                            textShadow: `
                                0 1px 0 #00d8ff,
                                0 2px 0 #00b8d9,
                                0 3px 0 #0098b3,
                                0 4px 0 #00788c,
                                0 5px 0 #005866,
                                0 6px 2px var(--card-bg),
                                0 10px 20px rgba(var(--accent-1-rgb), 0.3)
                            `,
                            filter: 'drop-shadow(0 15px 15px var(--card-bg))'
                        }}>
                        {personal.name}
                    </h1>

                    {/* Rotating Subtitle — Perfect Center Alignment & Dimmed 'I am a' */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-x-4 mb-12 w-full text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        <span style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>I am a</span>
                        <div className="relative inline-block" style={{ height: '1.2em' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ duration: 0.45, ease: 'easeOut' }}
                                    className="absolute left-0 top-0 w-full h-full text-gradient font-extrabold drop-shadow-[0_0_30px_rgba(var(--accent-1-rgb),0.4)]"
                                    style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                                >
                                    {hero.rotatingText[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                            {/* Hidden placeholder keeps the width stable and centered */}
                            <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
                                {longestText}
                            </span>
                        </div>
                    </div>

                    {/* Minimalist Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-6 mb-20">
                        <a href="#projects" className="btn-primary group flex items-center gap-2 text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-[0_0_20px_var(--accent-glow)] transition-all">
                            View Projects
                            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 text-lg px-8 py-4 rounded-2xl backdrop-blur-md transition-all">
                            <Download size={22} />
                            Resume
                        </a>
                    </div>

                    {/* Premium Glassmorphism Stat Cards with Counter-Up */}
                    <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-2xl mx-auto">
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} stat={stat} idx={idx} started={counterStarted} />
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
