import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code2, ExternalLink, Star, Hexagon, Zap } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const TechnicalProficiency = () => {
    const { leetcode, hackerrank } = portfolioData.problemSolving;

    return (
        <Section
            id="technical-proficiency"
            title="Coding Benchmarks"
            subtitle="Coding Skills and Achievements"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto mt-24 px-4 pb-40">
                {/* LeetCode Card */}
                <PremiumCard
                    data={leetcode}
                    type="leetcode"
                    accentColor="#FFA116"
                    label="LeetCode Engine"
                />

                {/* HackerRank Card */}
                <PremiumCard
                    data={hackerrank}
                    type="hackerrank"
                    accentColor="#2EC866"
                    label="HackerRank Core"
                />
            </div>
        </Section>
    );
};

const PremiumCard = ({ data, type, accentColor, status, label }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);
    const hoverTimeoutRef = useRef(null);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-300, 300], [10, -10]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(x, [-300, 300], [-10, 10]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(event.clientX - centerX);
        y.set(event.clientY - centerY);
    };

    const handleMouseEnter = () => {
        // Clear any existing timeout
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

        // Start 600ms intentional delay timer
        hoverTimeoutRef.current = setTimeout(() => {
            setIsFlipped(true);
        }, 600);
    };

    const handleMouseLeave = () => {
        // Clear timeout and unflip immediately
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        x.set(0);
        y.set(0);
        setIsFlipped(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className="group/card perspective-2000 h-[480px] w-full cursor-pointer relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{ rotateX, rotateY }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.div
                className="relative w-full h-full transition-all duration-1000 preserve-3d pointer-events-none"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, cubicBezier: [0.4, 0, 0.2, 1] }}
            >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-[#020617] border border-white/10 p-8 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] pointer-events-auto">

                    {/* 1. Dynamic Mesh Background & Blobs */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent" />
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 20, 0],
                                y: [0, -20, 0]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-[80px] opacity-20"
                            style={{ backgroundColor: accentColor }}
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, -30, 0],
                                y: [0, 30, 0]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full blur-[90px] opacity-20"
                            style={{ backgroundColor: accentColor }}
                        />
                    </div>

                    {/* 2. Animated Running Border (BOLDER & INTENSE) */}
                    <div className="absolute inset-0 transition-opacity duration-700 pointer-events-none z-10">
                        <div
                            className="absolute inset-[-50%] animate-border-rotate opacity-50 group-hover/card:opacity-100 transition-opacity blur-3xl"
                            style={{ background: `conic-gradient(from 0deg, transparent 0%, ${accentColor} 50%, transparent 100%)` }}
                        />
                        <div
                            className="absolute inset-[-100%] animate-border-rotate opacity-40 group-hover/card:opacity-80 transition-opacity"
                            style={{ background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${accentColor} 70%, #fff 100%)` }}
                        />
                        <div className="absolute inset-[3px] bg-[#020617] rounded-[2.3rem]" />
                    </div>

                    {/* 3. Technical HUD Overlays */}
                    <div className="absolute inset-6 border border-white/5 rounded-[1.8rem] pointer-events-none z-10" />
                    <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-white/20 rounded-tl-xl z-20 group-hover/card:border-white/40 transition-all duration-500" />
                    <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-white/20 rounded-br-xl z-20 group-hover/card:border-white/40 transition-all duration-500" />

                    {/* 4. Status Indicator (High Visibility) */}
                    <div className="absolute top-8 right-10 z-40 flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_10px_var(--accent-color)] animate-pulse" style={{ backgroundColor: accentColor, '--accent-color': accentColor }} />
                        <span className="text-[9px] font-black text-white/70 tracking-[0.2em] uppercase">
                            {status}
                        </span>
                    </div>

                    {/* Content (Z-indexed) */}
                    <div className="relative z-30 flex flex-col items-center w-full">
                        {type === 'leetcode' ? (
                            <LeetCodeVisual data={data} accentColor={accentColor} />
                        ) : (
                            <HackerRankVisual data={data} accentColor={accentColor} />
                        )}

                        <motion.h3
                            className="text-4xl font-black text-white tracking-tight mb-3 uppercase italic drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                        >
                            {type === 'leetcode' ? 'LeetCode' : 'HackerRank'}
                        </motion.h3>

                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-[1px] w-6 bg-white/20" />
                            <p className="text-white/50 text-[10px] font-black uppercase tracking-[0.4em] whitespace-nowrap">
                                {label}
                            </p>
                            <div className="h-[1px] w-6 bg-white/20" />
                        </div>

                        <motion.a
                            href={data.url}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn flex items-center gap-4 px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all font-black text-[10px] uppercase tracking-[0.3em] text-white relative overflow-hidden backdrop-blur-xl"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                            View Profile
                            <ExternalLink size={14} style={{ color: accentColor }} className="drop-shadow-[0_0_6px_var(--accent-color)]" />
                        </motion.a>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden rounded-[2.5rem] bg-[#020617] border border-white/10 p-10 flex flex-col items-center justify-center rotate-y-180 shadow-2xl overflow-hidden pointer-events-auto">

                    {/* 1. Animated Running Border (Back Side Glow) */}
                    <div className="absolute inset-0 transition-opacity duration-700 pointer-events-none z-10">
                        <div
                            className="absolute inset-[-50%] animate-border-rotate opacity-40 group-hover/card:opacity-80 transition-opacity blur-3xl"
                            style={{ background: `conic-gradient(from 0deg, transparent 0%, ${accentColor} 50%, transparent 100%)` }}
                        />
                        <div className="absolute inset-[3px] bg-[#020617] rounded-[2.3rem]" />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 z-0" />

                    {/* Background Decorative Brackets */}
                    <div className="absolute inset-10 border-2 border-dashed border-white/5 rounded-[2rem] pointer-events-none" />

                    <div className="relative z-20 w-full max-w-sm">
                        <div className="flex flex-col items-center gap-4 mb-12">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                <Hexagon size={24} style={{ color: accentColor }} className="animate-pulse" />
                            </div>
                            <h4 className="text-white font-black uppercase tracking-[0.5em] text-xs text-center">
                                {type === 'leetcode' ? 'Performance Metrics' : 'Synthesis Report'}
                            </h4>
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </div>

                        <div className="space-y-8">
                            {type === 'leetcode' ? (
                                <>
                                    <StatRow label="Discovery (Easy)" count={data.easy} color="#00B8A3" total={50} />
                                    <StatRow label="Advanced (Medium)" count={data.medium} color="#FFC01E" total={100} />
                                    <StatRow label="Mastery (Hard)" count={data.hard} color="#FF375F" total={20} />
                                </>
                            ) : (
                                data.languages.map((lang, idx) => (
                                    <LanguageStarRow key={idx} lang={lang} />
                                ))
                            )}
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const LeetCodeVisual = ({ data, accentColor }) => (
    <div className="relative w-48 h-48 flex items-center justify-center mb-8 transform-gpu">
        <svg className="w-full h-full transform -rotate-90 filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <circle cx="96" cy="96" r="82" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
            <motion.circle
                cx="96" cy="96" r="82"
                stroke={accentColor} strokeWidth="12" fill="transparent"
                strokeDasharray={515}
                initial={{ strokeDashoffset: 515 }}
                whileInView={{ strokeDashoffset: 515 - (515 * 0.75) }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "circOut" }}
                strokeLinecap="round"
                style={{ filter: `drop-shadow(0_0_15px_${accentColor})` }}
            />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
                {data.solved}
            </motion.span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mt-1">Problems</span>
        </div>
    </div>
);

const HackerRankVisual = ({ data, accentColor }) => (
    <div className="relative w-48 h-48 flex items-center justify-center mb-8 transform-gpu perspective-1000">
        <motion.div
            animate={{
                rotateY: [0, 30, -30, 0],
                y: [0, -15, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
        >
            <div className="absolute inset-0 blur-[50px] opacity-30 rounded-full" style={{ backgroundColor: accentColor }} />
            <Star size={130} fill="#FFD700" stroke="#FFD700" strokeWidth={0.2} className="drop-shadow-[0_0_30px_#FFD700]" style={{ filter: 'url(#gold-gradient-extreme-small)' }} />
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-center">
                <span className="text-black font-black text-4xl mt-2 drop-shadow-lg">{data.stars}</span>
            </div>

            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gold-gradient-extreme-small" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                        <stop offset="20%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: '#FFF8E1', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>

        <div className="absolute -bottom-4 flex gap-2.5 justify-center">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                >
                    <Star size={20} fill={i < data.stars ? "#FFD700" : "transparent"} stroke="#FFD700" strokeWidth={1} className={i < data.stars ? "drop-shadow-[0_0_8px_#FFD700]" : "opacity-10"} />
                </motion.div>
            ))}
        </div>
    </div>
);

const StatRow = ({ label, count, color, total }) => (
    <div className="space-y-4">
        <div className="flex justify-between items-end px-2">
            <span className="text-white/80 font-black text-[11px] uppercase tracking-[0.4em]">{label}</span>
            <span className="text-white font-black text-3xl tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">{count}</span>
        </div>
        <div className="h-3.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative shadow-inner">
            <motion.div
                className="h-full rounded-full relative z-10"
                style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(parseInt(count) / total) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 2.2, ease: "circOut", delay: 1 }}
            />
            <motion.div
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
    </div>
);

const LanguageStarRow = ({ lang }) => (
    <div className="flex items-center justify-between group/lang p-5 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-white/20 transition-all shadow-xl">
        <span className="text-white font-black text-sm uppercase tracking-[0.4em] drop-shadow-md">{lang.name}</span>
        <div className="flex gap-2.5">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={i < lang.stars ? {
                        scale: [1, 1.25, 1],
                        opacity: [0.8, 1, 0.8],
                        rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                >
                    <Star
                        size={18}
                        fill={i < lang.stars ? "#FFD700" : "transparent"}
                        stroke={i < lang.stars ? "#FFD700" : "rgba(255,255,255,0.1)"}
                        className={i < lang.stars ? "drop-shadow-[0_0_8px_#FFD700]" : ""}
                        strokeWidth={1.5}
                    />
                </motion.div>
            ))}
        </div>
    </div>
);

export default TechnicalProficiency;
