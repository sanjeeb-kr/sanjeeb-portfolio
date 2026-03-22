import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', bounce: 0.3 } }
};

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <Section id="skills" title="ARSENAL" subtitle="My digital toolkit.">
            {/* Smart 2-column Grid Layout to use space effectively */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                {Object.entries(skills).map(([categoryName, skillList], idx) => {
                    const isSoftSkill = categoryName === 'Soft Skills';

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`theme-card group/card relative p-8 md:p-10 flex flex-col items-center h-full overflow-hidden border border-white/5 hover:border-transparent transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--accent-1-rgb),0.2)] ${isSoftSkill ? 'lg:col-span-2' : ''}`}
                        >
                            {/* Running Light Border (Ultra-Premium & Thick) */}
                            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                                {/* Wide Glow Layer */}
                                <div className="absolute inset-[-50%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,var(--accent-1)_50%,transparent_100%)] blur-3xl opacity-30" />
                                {/* Primary High-Intensity Beam */}
                                <div className="absolute inset-[-150%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,var(--accent-1)_70%,#fff_100%)]" />
                                {/* Thick Content Mask (4px Border) */}
                                <div className="absolute inset-[4px] bg-var-bg-surface rounded-2xl" style={{ background: 'var(--bg-surface)' }} />
                            </div>

                            {/* Decorative Corner Brackets */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-500/10 rounded-tl z-20 group-hover/card:border-cyan-400/40 transition-all duration-500 pointer-events-none" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500/10 rounded-br z-20 group-hover/card:border-blue-400/40 transition-all duration-500 pointer-events-none" />

                            {/* System Indicator */}
                            <div className="absolute top-4 right-6 z-30 flex items-center gap-2">
                                <span className="text-[7px] font-black text-indigo-700 dark:text-cyan-500/40 tracking-[0.3em] uppercase group-hover/card:text-indigo-700 dark:text-cyan-400 transition-colors">System: Optimized</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4] animate-pulse" />
                            </div>

                            {/* Background Ornament - Rotating Hexagon/Shape */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full opacity-0 group-hover/card:opacity-10 transition-opacity duration-1000 animate-spin-slow pointer-events-none" 
                                style={{ background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)' }}></div>

                            {/* Category Header — Parallax */}
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="z-10 relative mb-10"
                            >
                                <h3 className="text-xl md:text-3xl font-black text-gradient font-heading uppercase tracking-tighter text-center py-2 px-6 border-b border-cyan-500/20 group-hover/card:border-cyan-500/50 transition-colors">
                                    {categoryName}
                                </h3>
                            </motion.div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="flex flex-wrap items-start justify-center gap-y-12 gap-x-6 md:gap-x-8 w-full z-10 relative"
                            >
                                {skillList.map((skill, sIdx) => {
                                    if (isSoftSkill) {
                                        // Ultra-Premium Holographic Capsule styling for Soft Skills
                                        return (
                                            <motion.div
                                                key={sIdx}
                                                variants={item}
                                                whileHover={{ y: -5, scale: 1.05 }}
                                                className="relative group flex items-center justify-between gap-4 px-6 py-4 rounded-xl cursor-pointer transition-all duration-500 overflow-hidden min-w-[180px]"
                                                style={{
                                                    background: 'rgba(139, 92, 246, 0.03)',
                                                    border: '1px solid rgba(139, 92, 246, 0.2)',
                                                    backdropFilter: 'blur(12px)',
                                                }}
                                            >
                                                {/* Side Neon Accent Bar */}
                                                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-violet-500 to-fuchsia-500 opacity-40 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>

                                                {/* Dynamic Glint Sweep */}
                                                <div className="absolute inset-x-[-150%] inset-y-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-45deg] animate-holographic-sweep opacity-0 group-hover:opacity-100 group-hover:animate-holographic-sweep"></div>

                                                <div className="flex items-center justify-center relative z-10 w-full text-center">
                                                    <span className="font-black text-[14px] md:text-[15px] uppercase tracking-[0.25em] text-slate-900 dark:text-white transition-colors drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]">
                                                        {skill.name}
                                                    </span>
                                                </div>

                                                {/* Background Internal Glow */}
                                                <div className="absolute bottom-[-20%] right-[-10%] w-20 h-20 bg-violet-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                            </motion.div>
                                        );
                                    }

                                    // Ultra-Premium Holographic Technical Orbs
                                    return (
                                        <motion.div
                                            key={sIdx}
                                            variants={item}
                                            className="flex flex-col items-center gap-4 w-[calc(50%-1rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] min-w-[90px] group cursor-pointer"
                                        >
                                            <div className="relative group/sphere flex justify-center w-full">
                                                {/* Professional Border Ring (Subtle & High-Precision) */}
                                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover/sphere:opacity-100 transition-opacity duration-300 z-0 border border-white/20 scale-105 pointer-events-none"></div>
                                                
                                                {/* The Professional Orb / Ball */}
                                                <motion.div
                                                    whileHover={{ 
                                                        scale: 1.05, 
                                                        y: -5,
                                                        backgroundColor: 'rgba(255, 255, 255, 0.08)'
                                                    }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center p-5 z-10 backdrop-blur-md border border-white/10 overflow-hidden shadow-2xl transition-all duration-300"
                                                    style={{
                                                        background: 'rgba(255, 255, 255, 0.03)',
                                                    }}
                                                >
                                                    {/* Internal Reflection / Gloss Static (Sharper for HD) */}
                                                    <div className="absolute top-[5%] left-[10%] w-[50%] h-[35%] rounded-[100%] bg-gradient-to-b from-white/40 to-transparent blur-[1px] rotate-[-20deg] pointer-events-none opacity-80"></div>

                                                    {/* Holographic Light Sweep Animation */}
                                                    <div className="absolute inset-x-[-100%] inset-y-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45 animate-holographic-sweep pointer-events-none"></div>

                                                    {/* Parallax Content Container (HD Optimized) */}
                                                    <motion.div 
                                                        initial={false}
                                                        className="relative z-20 w-full h-full flex items-center justify-center p-1"
                                                        whileHover={{ x: 5, y: 5, scale: 1.1 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                    >
                                                        {skill.image ? (
                                                            <div className="relative w-full h-full flex items-center justify-center group/logo">
                                                                <motion.img
                                                                    src={skill.image}
                                                                    alt={skill.name}
                                                                    className="w-full h-full object-contain transition-all duration-500 group-hover/sphere:scale-110"
                                                                    style={{
                                                                        filter: 'contrast(1.3) brightness(1.2) drop-shadow(0 0 15px rgba(255,255,255,0.6))',
                                                                        imageRendering: 'high-quality',
                                                                    }}
                                                                />
                                                                {/* HD Holographic Glint Overlay */}
                                                                <div className="absolute inset-0 opacity-0 group-hover/sphere:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden rounded-full">
                                                                    <div className="absolute inset-x-[-150%] inset-y-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-45 animate-holographic-sweep" style={{ animationDuration: '2s' }}></div>
                                                                </div>
                                                                
                                                                {/* Chrome Shine Static Light */}
                                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay opacity-50"></div>
                                                            </div>
                                                        ) : (
                                                            <div className="text-indigo-700 dark:text-cyan-400 font-black text-[10px] tracking-tighter uppercase">ARSN</div>
                                                        )}
                                                    </motion.div>

                                                    {/* Static Outer Ring (Refined) */}
                                                    <div className="absolute inset-0 rounded-full border border-white/5 group-hover/sphere:border-cyan-500/20 transition-colors duration-500"></div>
                                                </motion.div>

                                                {/* Subtle Radial Gradient Light Indicator */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-full opacity-50 pointer-events-none group-hover/sphere:opacity-100"></div>
                                            </div>

                                            {/* Clean Professional Label */}
                                            <div className="flex flex-col items-center gap-1.5 transition-transform duration-300">
                                                <span className="font-bold text-[12px] md:text-sm text-center uppercase tracking-[0.2em] transition-all duration-300 group-hover:text-[var(--accent-1)] text-white">
                                                    {skill.name}
                                                </span>
                                                <div className="h-[1px] w-4 bg-white/10 group-hover:w-8 group-hover:bg-[var(--accent-1)] transition-all duration-300"></div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Soft animation classes */}
            <style>{`
                @keyframes border-rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-border-rotate {
                    animation: border-rotate 4s linear infinite;
                }
                @keyframes holographic-sweep {
                    0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
                    20% { opacity: 0.5; }
                    50% { transform: translateX(100%) skewX(-45deg); opacity: 0.8; }
                    80% { opacity: 0.5; }
                    100% { transform: translateX(200%) skewX(-45deg); opacity: 0; }
                }
                .animate-holographic-sweep {
                    animation: holographic-sweep 3s ease-in-out infinite;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </Section>
    );
};

export default Skills;
