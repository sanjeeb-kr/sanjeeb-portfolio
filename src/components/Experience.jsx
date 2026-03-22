import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, BookOpen, Users, Megaphone, Database, Cloud, Code, Code2, ShieldCheck, ArrowRight, X, GraduationCap, School, Trophy, Award, Shield, Zap, CheckCircle, Terminal, Cpu } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import certImg from '../assets/images/certificate.png';

// ── 1. Education Timeline ──────────────────────────────────────────
const EducationPath = ({ education }) => {
    const icons = [<GraduationCap size={32} />, <BookOpen size={32} />, <School size={32} />];

    return (
        <Section title="ACADEMIA" subtitle="My learning foundation.">
            <div className="max-w-6xl mx-auto mt-8 relative px-4">
                {/* Timeline Line (Desktop) */}
                <div className="hidden lg:block absolute top-[10px] left-[10%] right-[10%] h-[2px] z-0">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-transparent via-[var(--accent-1)] to-transparent opacity-100"
                        style={{
                            boxShadow: '0 0 20px var(--accent-1)'
                        }}
                    />
                </div>

                {/* Timeline Line (Mobile) */}
                <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] z-0">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full bg-gradient-to-b from-[var(--accent-1)] to-[var(--accent-2)] opacity-60"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                    {education.map((edu, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative flex flex-col items-center group h-full"
                            >
                                {/* Horizontal Node (Desktop) */}
                                <div className="hidden lg:flex absolute -top-[12px] left-1/2 -translate-x-1/2 flex-col items-center">
                                    <motion.div
                                        animate={idx === 0 ? {
                                            scale: [1, 1.2, 1],
                                            boxShadow: ["0 0 0px var(--accent-1)", "0 0 20px var(--accent-1)", "0 0 0px var(--accent-1)"]
                                        } : {}}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className={`w-6 h-6 rounded-full border-4 z-20 ${idx === 0 ? 'bg-[var(--accent-1)]' : 'bg-[var(--bg-base)]'}`}
                                        style={{ borderColor: 'var(--accent-1)', boxShadow: idx === 0 ? '0 0 20px var(--accent-glow)' : '0 0 10px var(--accent-glow)' }}
                                    />
                                </div>

                                {/* Vertical Node (Mobile) */}
                                <div className="lg:hidden absolute left-4 top-10 -translate-x-1/2">
                                    <div className="w-4 h-4 rounded-full border-2 bg-[var(--bg-base)] z-20"
                                        style={{ borderColor: 'var(--accent-1)', boxShadow: idx === 0 ? '0 0 15px var(--accent-glow)' : '0 0 5px var(--accent-glow)' }}
                                    />
                                </div>

                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`w-full mt-6 lg:mt-10 p-8 rounded-[2rem] relative overflow-hidden transition-all duration-500 group/card flex flex-col items-center h-full min-h-[420px] border border-white/5 hover:border-transparent ${idx === 0 ? 'hover:shadow-[0_0_120px_rgba(34,211,238,0.8),inset_0_0_80px_rgba(34,211,238,0.4)] shadow-[0_0_80px_rgba(34,211,238,0.4),inset_0_0_60px_rgba(34,211,238,0.3)]' : 'hover:shadow-[0_0_60px_rgba(34,211,238,0.3),inset_0_0_40px_rgba(34,211,238,0.2)] shadow-[0_0_30px_rgba(34,211,238,0.1),inset_0_0_20px_rgba(34,211,238,0.1)]'}`}
                                    style={{
                                        background: idx === 0
                                            ? 'radial-gradient(circle at center, rgba(34, 211, 238, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)'
                                            : 'radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)',
                                        backdropFilter: 'blur(20px)'
                                    }}
                                >
                                    {/* Graduation-Specific Atmosphere (Persistent & High-Intensity Pulse) */}
                                    {idx === 0 && (
                                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.25),transparent_70%)] animate-pulse-slow" />
                                            <div className="absolute -top-24 -left-24 w-80 h-80 bg-cyan-400/20 blur-[100px] rounded-full" />
                                            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-400/20 blur-[100px] rounded-full" />
                                            {/* Extra inner aura for maximum glow */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-1-rgb),0.15),transparent_50%)] animate-pulse" style={{ animationDuration: '3s' }} />
                                        </div>
                                    )}

                                    {/* Running Light Border (Ultra-Premium & Thick) */}
                                    <div className={`absolute inset-0 transition-opacity duration-700 pointer-events-none z-0 ${idx === 0 ? 'opacity-100' : 'opacity-40 group-hover/card:opacity-100'}`}>
                                        <div className={`absolute inset-[-50%] ${idx === 0 ? 'animate-border-rotate' : ''} bg-[conic-gradient(from_0deg,transparent_0%,var(--accent-1)_50%,transparent_100%)] blur-3xl`}
                                            style={{ opacity: idx === 0 ? 0.9 : 0.6 }}
                                        />
                                        <div className={`absolute inset-[-150%] ${idx === 0 ? 'animate-border-rotate' : ''} bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,var(--accent-1)_70%,#fff_100%)]`} 
                                            style={{ opacity: idx === 0 ? 1 : 0.5 }}
                                        />
                                        <div className="absolute inset-[4px] bg-var-bg-surface rounded-[1.8rem]" style={{ background: 'var(--bg-surface)' }} />
                                    </div>

                                    {/* Decorative Corner Brackets */}
                                    <div className="absolute top-4 left-4 w-6 h-6 border-t font-black border-l border-cyan-500/10 rounded-tl z-20 group-hover/card:border-cyan-400/40 transition-all duration-500 pointer-events-none" />
                                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b font-black border-r border-cyan-500/10 rounded-br z-20 group-hover/card:border-cyan-400/40 transition-all duration-500 pointer-events-none" />

                                    {/* Status Indicator */}
                                    <div className="absolute top-4 right-6 z-30 flex items-center gap-2">
                                        <span className="text-[7px] font-black text-indigo-700 dark:text-cyan-400 tracking-[0.2em] uppercase drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-colors">
                                            {idx === 0 ? 'Status: UnderGraduate' : 'Status: Completed'}
                                        </span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#10b981] animate-pulse" />
                                    </div>

                                    {/* Satellite Orbit (Graduation Only) */}
                                    {idx === 0 && (
                                        <div className="absolute inset-0 pointer-events-none rounded-[2rem] z-40">
                                            <motion.div
                                                className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_var(--accent-1),0_0_30px_var(--accent-1)]"
                                                animate={{
                                                    top: ["0%", "0%", "100%", "100%", "0%"],
                                                    left: ["0%", "100%", "100%", "0%", "0%"],
                                                }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                                style={{
                                                    translateX: "-50%",
                                                    translateY: "-50%",
                                                }}
                                            />
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="mb-8 p-6 rounded-2xl w-fit mx-auto transition-all duration-500 relative z-10"
                                        style={{
                                            background: 'rgba(var(--accent-1-rgb), 0.1)',
                                            border: '1px solid rgba(var(--accent-1-rgb), 0.2)',
                                            color: 'var(--accent-1)',
                                            boxShadow: idx === 0 ? '0 0 35px rgba(var(--accent-1-rgb), 0.3)' : '0 0 15px rgba(var(--accent-1-rgb), 0.1)'
                                        }}>
                                        {icons[idx] || <BookOpen size={32} />}
                                        <div className="absolute inset-0 rounded-2xl blur-xl bg-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                                    </motion.div>

                                    {/* Institution */}
                                    <motion.h3
                                        whileHover={{ y: -2 }}
                                        className="text-2xl font-black mb-4 text-center leading-tight h-16 flex items-center justify-center text-slate-900 dark:text-white z-10 relative drop-shadow-[0_0_10px_rgba(var(--accent-1-rgb),0.2)]"
                                    >
                                        {edu.school.split(',')[0]}
                                    </motion.h3>

                                    {/* Degree */}
                                    <motion.p
                                        whileHover={{ y: -1 }}
                                        className="text-center font-bold text-lg mb-8 opacity-100 leading-tight h-20 flex flex-col items-center justify-center text-cyan-100 z-10 relative drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                                    >
                                        {edu.degree.split('\n').map((line, i) => (
                                            <span key={i} className={i === 1 ? "text-base font-black opacity-100 mt-1" : ""}>
                                                {line}
                                            </span>
                                        ))}
                                    </motion.p>

                                    <div className="flex flex-col gap-6 mt-auto w-full items-center z-10 relative">
                                        <motion.div
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="inline-flex justify-center items-center px-8 py-3 rounded-full text-sm font-black tracking-widest mx-auto w-fit cursor-default"
                                            style={{
                                                background: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))',
                                                color: '#000',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                boxShadow: idx === 0 ? '0 0 35px rgba(var(--accent-1-rgb), 0.5)' : '0 0 10px rgba(var(--accent-1-rgb), 0.2)'
                                            }}>
                                            {edu.grade}
                                        </motion.div>

                                        <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                                            <Calendar size={14} className="text-[var(--accent-1)]" /> {edu.year}
                                        </div>
                                    </div>

                                    {/* Ambient Core Flare */}
                                    <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 z-0"
                                        style={{ background: idx === 0 ? 'rgba(var(--accent-1-rgb), 0.5)' : 'rgba(var(--accent-1-rgb), 0.1)' }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};

// ── 2. Training Section ────────────────────────────────────────────
const TrainingCard = ({ training }) => {
    const [selectedTraining, setSelectedTraining] = useState(null);
    const [hoveredIdx, setHoveredIdx] = useState(null);

    // Accent colors per card
    const accentColors = ['#00f3ff', '#a855f7', '#f97316'];
    const accentColors2 = ['#3b82f6', '#7c3aed', '#ef4444'];

    return (
        <Section title="TRAINING" subtitle="Expanding my expertise.">
            <div className="max-w-5xl mx-auto space-y-12">
                {training.map((item, idx) => {
                    const c1 = accentColors[idx % accentColors.length];
                    const c2 = accentColors2[idx % accentColors2.length];
                    const isHovered = hoveredIdx === idx;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            className="relative group p-[2px] rounded-[2.5rem] overflow-hidden"
                        >
                            {/* ── Ultra-Premium Animated Border (3px) ── */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                                <div className="absolute inset-[-50%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,var(--accent-1)_50%,transparent_100%)] blur-3xl opacity-60"
                                    style={{ '--accent-1': c1 }}
                                />
                                <div className="absolute inset-[-150%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,var(--accent-1)_70%,#fff_100%)]"
                                    style={{ '--accent-1': c1 }}
                                />
                                <div className="absolute inset-[3px] bg-[#020617]/95 rounded-[2.4rem] backdrop-blur-[100px]" />
                            </div>

                            {/* Decorative Corner Brackets */}
                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-xl z-20 group-hover:border-[var(--accent-1)]/40 transition-all duration-500 pointer-events-none" />
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-xl z-20 group-hover:border-[var(--accent-1)]/40 transition-all duration-500 pointer-events-none" />

                            {/* Professional Status Badge */}
                            <div className="absolute top-6 right-8 z-30 flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="text-[7px] font-black text-white/60 tracking-[0.2em] uppercase transition-colors group-hover:text-[var(--accent-1)]">
                                    Verified
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] shadow-[0_0_8px_var(--accent-1)] animate-pulse" />
                            </div>

                            {/* ── Card Shell ── */}
                            <div
                                className="relative rounded-[2.5rem] backdrop-blur-[100px] overflow-hidden flex flex-col md:flex-row z-10 border border-white/10 transition-all duration-500"
                                style={{
                                    background: isHovered 
                                        ? `radial-gradient(circle at left, ${c1}15 0%, rgba(2, 6, 23, 0.95) 100%)` 
                                        : 'rgba(2, 6, 23, 0.85)',
                                    borderColor: isHovered ? `${c1}88` : 'rgba(255,255,255,0.05)',
                                    boxShadow: isHovered ? `0 40px 100px -20px ${c1}44, inset 0 0 30px ${c1}22` : '0 10px 40px rgba(0,0,0,0.5)',
                                }}
                            >
                                {/* ── Left: Animated Image Panel ── */}
                                <div className="relative w-full md:w-[42%] h-72 md:h-auto shrink-0 overflow-hidden">
                                    {item.image && (
                                        <motion.img
                                            animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 1 : 0 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            style={{ opacity: 0.95 }}
                                        />
                                    )}

                                    {/* Glass Overlay Sweep */}
                                    <motion.div
                                        animate={{ x: isHovered ? ['-100%', '200%'] : '-100%' }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-20 pointer-events-none z-20"
                                    />

                                    {/* Gradient overlay */}
                                    <div
                                        className="absolute inset-0 z-10"
                                        style={{ background: `linear-gradient(to right, transparent 0%, transparent 50%, var(--bg-elevated) 100%), linear-gradient(to top, var(--bg-elevated) 0%, transparent 40%)` }}
                                    />

                                    {/* Floating orbs on image */}
                                    {[...Array(2)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                x: [0, 30, -20, 0],
                                                y: [0, -40, 20, 0],
                                                opacity: [0.1, 0.25, 0.1],
                                            }}
                                            transition={{ duration: 6 + i * 2, repeat: Infinity, delay: i * 2, ease: "easeInOut" }}
                                            className="absolute rounded-full blur-3xl pointer-events-none"
                                            style={{
                                                width: `${120 + i * 40}px`,
                                                height: `${120 + i * 40}px`,
                                                background: i % 2 === 0 ? c1 : c2,
                                                top: `${20 + i * 30}%`,
                                                left: `${15 + i * 20}%`,
                                            }}
                                        />
                                    ))}

                                    {/* Company badge pinned to image */}
                                    <motion.div
                                        animate={{ y: isHovered ? -6 : 0, scale: isHovered ? 1.05 : 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute bottom-6 left-6 px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.3em] z-30"
                                        style={{
                                            background: `linear-gradient(135deg, ${c1}44, ${c2}44)`,
                                            border: `1px solid ${c1}66`,
                                            color: '#fff',
                                            backdropFilter: 'blur(12px)',
                                            textShadow: `0 0 10px ${c1}`
                                        }}
                                    >
                                        {item.company}
                                    </motion.div>
                                </div>

                                {/* ── Right: Content Panel ── */}
                                <div className="flex-1 p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-x-0 h-[1px] bg-white/5 top-0 animate-scanline pointer-events-none" />

                                    {/* Grid texture */}
                                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                        style={{
                                            backgroundImage: `linear-gradient(${c1} 1px, transparent 1px), linear-gradient(90deg, ${c1} 1px, transparent 1px)`,
                                            backgroundSize: '40px 40px'
                                        }}
                                    />

                                    {/* Massive Ambient Core Glow */}
                                    <motion.div
                                        animate={{ opacity: isHovered ? 0.15 : 0.05, scale: isHovered ? 1.2 : 1 }}
                                        className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-all duration-1000"
                                        style={{ background: `radial-gradient(circle, ${c1}, transparent)` }}
                                    />

                                    {/* Title with Parallax */}
                                    <motion.h3
                                        animate={{ x: isHovered ? 10 : 0, y: isHovered ? -2 : 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="text-3xl md:text-4xl font-black mb-4 leading-tight relative z-10 text-slate-900 dark:text-white tracking-tight"
                                        style={{
                                            textShadow: isHovered ? `0 0 30px ${c1}66` : 'none'
                                        }}
                                    >
                                        {item.title}
                                    </motion.h3>

                                    {/* Date with high precision icon */}
                                    <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-8 relative z-10 text-slate-900 dark:text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)]">
                                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[var(--accent-1)] transition-colors shadow-[0_0_10px_rgba(var(--accent-1-rgb),0.2)]">
                                            <Calendar size={14} className="text-[var(--accent-1)]" />
                                        </div>
                                        {item.date}
                                    </div>

                                    {/* Tech stack tags (Ultra-Premium Pills) */}
                                    {item.techStack && (
                                        <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
                                            {item.techStack.slice(0, 5).map((tech, tIdx) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: tIdx * 0.1, duration: 0.4 }}
                                                    whileHover={{ scale: 1.1, y: -3, backgroundColor: `${c1}33` }}
                                                    className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl cursor-default transition-all border border-white/5"
                                                    style={{
                                                        background: 'rgba(255,255,255,0.03)',
                                                        color: isHovered ? c1 : '#fff',
                                                        borderColor: isHovered ? `${c1}44` : 'rgba(255,255,255,0.05)'
                                                    }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Professional CTA Buttons */}
                                    <div className="flex flex-wrap gap-5 mt-auto relative z-10 font-bold">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -4, borderColor: c1 }}
                                            whileTap={{ scale: 0.96 }}
                                            onClick={() => setSelectedTraining(item)}
                                            className="relative flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] text-white overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                            style={{ background: 'rgba(255,255,255,0.03)' }}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                View Outcomes <ArrowRight size={16} style={{ color: c1 }} />
                                            </span>
                                        </motion.button>

                                        {item.link && (
                                            <motion.a
                                                whileHover={{ scale: 1.05, y: -4, borderColor: c2 }}
                                                whileTap={{ scale: 0.96 }}
                                                href={item.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] transition-all border border-white/10 text-white hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                                style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(8px)' }}
                                            >
                                                Certificate <ExternalLink size={16} style={{ color: c2 }} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Outcomes Modal (Ultra-Decorated - Preserved) */}
            <AnimatePresence>
                {selectedTraining && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/60 dark:bg-black/60 backdrop-blur-[100px]"
                        onClick={() => setSelectedTraining(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 40, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 40, opacity: 0 }}
                            className="relative w-full max-w-6xl bg-[#020617]/90 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_0_120px_-20px_rgba(var(--accent-1-rgb),0.5)] backdrop-blur-[120px] max-h-[95vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Subtle Professional Mesh Gradients */}
                            <motion.div
                                animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[130px] opacity-10 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, var(--accent-1), transparent)' }}
                            />
                            <motion.div
                                animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full blur-[130px] opacity-10 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
                            />

                            {/* High-Precision HUD Brackets */}
                            <div className="absolute top-8 left-8 w-12 h-12 border-t-[1px] border-l-[1px] border-[var(--accent-1)]/40 rounded-tl-2xl z-30" />
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-[1px] border-r-[1px] border-[var(--accent-1)]/40 rounded-tr-2xl z-30" />
                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-[1px] border-l-[1px] border-[var(--accent-1)]/40 rounded-bl-2xl z-30" />
                            <div className="absolute bottom-8 right-8 w-12 h-12 border-b-[1px] border-r-[1px] border-[var(--accent-1)]/40 rounded-br-2xl z-30" />

                            <button
                                onClick={() => setSelectedTraining(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-900 dark:text-white drop-shadow-md hover:text-[var(--accent-1)] transition-all z-50"
                            >
                                <X size={20} />
                            </button>

                            {/* Compact Grid Layout */}
                            <div className="relative z-20 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_1fr] gap-8 p-8 md:p-12 items-start overflow-hidden">
                                {/* Column 1: Identity & Brief */}
                                <div className="space-y-8 h-full flex flex-col justify-center">
                                    <div className="flex flex-col items-center md:items-start gap-4">
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="p-4 rounded-2xl bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/40 text-[var(--accent-1)] shadow-[0_0_20px_rgba(var(--accent-1-rgb),0.1)]"
                                        >
                                            <Zap size={32} />
                                        </motion.div>
                                        <div className="text-center md:text-left">
                                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] animate-pulse shadow-[0_0_8px_var(--accent-1)]" />
                                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[var(--accent-1)]">Mission Briefing</span>
                                            </div>
                                            <h2 className="text-3xl font-black text-white leading-tight mb-2 tracking-tight drop-shadow-lg">{selectedTraining.title}</h2>
                                            <p className="text-[11px] font-black text-[var(--accent-1)] tracking-widest uppercase opacity-80">{selectedTraining.company}</p>
                                        </div>
                                    </div>

                                    {selectedTraining.projectDetails && (
                                        <div className="pt-8 border-t border-white/5 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                                    <Cpu size={14} className="text-[#a855f7]" />
                                                </div>
                                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Core Objectives</h4>
                                            </div>
                                            <p className="text-[13px] leading-relaxed text-white/90 font-bold drop-shadow-sm italic border-l-2 border-[var(--accent-1)]/30 pl-4">{selectedTraining.projectDetails}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Column 2: Accomplishments (No-Scroll Grid) */}
                                <div className="md:px-8 md:border-x border-white/5 h-full">
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="p-2 rounded-xl bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20 shadow-[0_0_15px_rgba(var(--accent-1-rgb),0.2)]">
                                            <CheckCircle size={20} className="text-[var(--accent-1)]" />
                                        </div>
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Key Outcomes</h4>
                                    </div>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {(selectedTraining.outcomes || []).slice(0, 6).map((outcome, oIdx) => (
                                            <motion.li
                                                key={oIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + oIdx * 0.05 }}
                                                className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 text-white text-[14px] font-bold leading-relaxed hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 group/item"
                                            >
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] group-hover/item:scale-150 group-hover/item:shadow-[0_0_10px_var(--accent-1)] transition-all" />
                                                {outcome}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Column 3: Tech Stack */}
                                <div className="h-full flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-5">
                                        <Terminal size={18} className="text-[var(--accent-1)]" />
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)]">Tech Infrastructure</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {(selectedTraining.techStack || []).map((t, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-3 py-1.5 rounded-lg bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/30 text-[11px] font-black text-[var(--accent-1)]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bottom Scanline (Interior) */}
                                    <div className="mt-auto pt-8">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent-1)]/20 to-transparent" />
                                        <p className="text-[8px] font-mono text-slate-900 dark:text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)] mt-2 uppercase tracking-[0.2em]">Secure Data Stream Verified //</p>
                                    </div>
                                </div>
                            </div>

                            {/* Animated Elegant Scanning Line */}
                            <motion.div
                                animate={{ y: ['0%', '100%'] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[var(--accent-1)]/10 to-transparent pointer-events-none z-10"
                            />

                            {/* Massive Bottom Glow */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-1)] to-transparent shadow-[0_-15px_40px_rgba(var(--accent-1-rgb),0.4)] opacity-50 z-30" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

// ── 3. Holographic 3D Pictorial Certifications ───────────────────
const CertDetailsModal = ({ cert, isOpen, onClose, accent }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/80 dark:bg-black/80 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    className="relative w-full max-w-xl bg-[var(--card-bg)] rounded-3xl border border-white/10 overflow-hidden shadow-[0_30px_100px_var(--card-bg)]"
                    onClick={(e) => e.stopPropagation()}
                    style={{ borderTop: `6px solid ${accent}` }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] hover:text-slate-900 transition-all z-50"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10" style={{ color: accent, filter: `drop-shadow(0 0 10px ${accent})` }}>
                                <Award size={40} />
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] block mb-1">Official Certification</span>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">{cert.title}</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="space-y-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Platform / Institution</span>
                                <p className="text-slate-900 dark:text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)] font-bold flex items-center gap-2">
                                    <School size={16} className="text-slate-900 dark:text-[var(--accent-1)]" />
                                    {cert.issuer}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Completion Date / Duration</span>
                                <p className="text-slate-900 dark:text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)] font-bold flex items-center gap-2">
                                    <Calendar size={16} className="text-slate-900 dark:text-[var(--accent-1)]" />
                                    {cert.date}
                                </p>
                            </div>
                        </div>

                        <div className="mb-10">
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] block mb-4">Technology Stack learned</span>
                            <div className="flex flex-wrap gap-2">
                                {(cert.category || 'Professional').split(' ').concat(['Industry Standard', 'Validated']).map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-slate-900 dark:text-white drop-shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {cert.link && (
                            <motion.a
                                whileHover={{ scale: 1.02, backgroundColor: accent, color: '#000' }}
                                whileTap={{ scale: 0.98 }}
                                href={cert.link}
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-5 rounded-2xl flex items-center justify-center gap-4 bg-white/5 border border-white/10 text-slate-900 dark:text-white font-black text-sm tracking-[0.2em] uppercase transition-all shadow-lg"
                            >
                                View Official Credentials
                                <ExternalLink size={20} />
                            </motion.a>
                        )}
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

// ── Sub-Component: Orbital Node (Ultra-Premium) ──
const OrbitalNode = ({ cert, idx, accent }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getIcon = (category) => {
        const cat = category?.toLowerCase();
        if (cat?.includes('sql')) return <Database size={88} />;
        if (cat?.includes('dsa')) return <Code2 size={88} />;
        if (cat?.includes('cloud')) return <Cloud size={88} />;
        if (cat?.includes('testing')) return <ShieldCheck size={88} />;
        return <Award size={88} />;
    };

    const getShortName = (title) => {
        const t = title?.toLowerCase();
        if (t?.includes('data structures')) return 'DSA';
        if (t?.includes('cloud computing')) return 'Cloud';
        if (t?.includes('software engineering')) return 'SWE';
        if (t?.includes('sql')) return 'SQL';
        return title?.split(':')[0] || title;
    };

    return (
        <div
            className="group/node relative flex flex-col items-center justify-start p-8 rounded-[3rem] transition-all duration-700 min-h-[520px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Technical Decoration Brackets */}
            <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-white/10 rounded-tl-xl transition-all duration-500 group-hover/node:border-white/30 z-20" />
            <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-white/10 rounded-br-xl transition-all duration-500 group-hover/node:border-white/30 z-20" />

            {/* Status Indicator */}
            <div className="absolute top-8 right-10 z-30 flex items-center gap-2">
                <span className="text-[7px] font-black text-slate-900 dark:text-[#00f3ff] drop-shadow-[0_0_8px_rgba(0,243,255,0.8)] tracking-[0.3em] uppercase group-hover/node:text-[#00f3ff]">
                    Credential: Validated
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 shadow-[0_0_10px_white] animate-pulse" />
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-[3rem] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-0 group-hover/node:opacity-10 transition-opacity duration-1000 blur-[120px] rounded-full"
                style={{ backgroundColor: accent }}
            />

            {/* ── 3D Orbital Object (Ultra-Premium) ── */}
            <div className="relative perspective-2000 mb-16 scale-90 group-hover/node:scale-110 transition-transform duration-700">
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotateY: isHovered ? [0, 10, -10, 0] : 0
                    }}
                    transition={{
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-64 h-64 flex items-center justify-center transform-gpu preserve-3d"
                >
                    {/* Inner Glowing Core with 4px Animated Border */}
                    <div 
                        className="absolute w-44 h-44 rounded-full flex items-center justify-center z-10 overflow-hidden shadow-2xl transition-shadow duration-500"
                        style={{ boxShadow: isHovered ? `0 0 50px ${accent}66, inset 0 0 20px ${accent}33` : `0 0 30px rgba(0,0,0,0.8), inset 0 0 10px ${accent}22` }}
                    >
                        {/* Core Background */}
                        <div className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-2xl border border-white/5 z-0" />

                        {/* 4px Animated Border Effect */}
                        <div className="absolute inset-0 opacity-80 group-hover/node:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-[-50%] animate-border-rotate blur-2xl opacity-60"
                                style={{ background: `conic-gradient(from 0deg, transparent 0%, ${accent} 50%, transparent 100%)` }}
                            />
                            <div className="absolute inset-[-150%] animate-border-rotate"
                                style={{ background: `conic-gradient(from 0deg, transparent 0%, transparent 40%, ${accent} 70%, #fff 100%)` }}
                            />
                            <div className="absolute inset-[3px] bg-black/90 rounded-full" />
                        </div>

                        {/* Icon with Depth */}
                        <div className="relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-transform duration-500 group-hover/node:scale-110" style={{ color: accent }}>
                            {getIcon(cert.category || cert.title)}
                        </div>

                        {/* Atmospheric Scanline */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-1/2 w-full animate-scanline pointer-events-none opacity-30" />
                    </div>

                    {/* Highly-Refined Orbital Rings (Intensified Visibility) */}
                    {[1, 1.3, 1.6].map((scale, rIdx) => (
                        <div
                            key={rIdx}
                            className="absolute rounded-full border-[2px] opacity-40 pointer-events-none transition-all duration-700 group-hover/node:opacity-100 group-hover/node:border-[2.5px]"
                            style={{
                                borderColor: accent,
                                borderStyle: rIdx === 1 ? 'dashed' : 'solid',
                                width: `${scale * 100}%`,
                                height: `${scale * 100}%`,
                                boxShadow: isHovered
                                    ? `0 0 50px ${accent}66, inset 0 0 50px ${accent}66`
                                    : `0 0 20px ${accent}22, inset 0 0 20px ${accent}22`
                            }}
                        >
                            {/* Satellites on different rings (Upgraded Glow) */}
                            {rIdx === 0 && (
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                                    <div className="absolute top-0 rotate-45 w-2.5 h-2.5 rounded-full shadow-[0_0_20px_#fff]" style={{ backgroundColor: accent }} />
                                </motion.div>
                            )}
                            {rIdx === 2 && (
                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                                    <div className="absolute bottom-0 -rotate-45 w-4 h-4 rounded-full shadow-[0_0_30px_#fff] border-2 border-white/50" style={{ backgroundColor: accent }} />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── Label & UI Section (Ultra-Premium) ── */}
            <motion.div
                animate={{
                    y: isHovered ? -12 : 0,
                    scale: isHovered ? 1.05 : 1
                }}
                className="text-center z-20 w-full flex flex-col items-center gap-6"
            >
                <div className="relative">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-[0.25em] uppercase leading-none drop-shadow-2xl"
                        style={{
                            textShadow: isHovered ? `0 0 30px ${accent}, 0 0 60px ${accent}66` : '0 0 15px var(--card-bg)'
                        }}>
                        {getShortName(cert.title)}
                    </h3>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-[1px] mt-4 mx-auto rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        style={{ backgroundImage: `linear-gradient(90deg, transparent, ${accent}66, transparent)` }}
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="relative px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.4em] uppercase transition-all text-slate-900 dark:text-white overflow-hidden group/btn shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10">View Details</span>

                    {/* Button Underglow */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-white opacity-0 group-hover/btn:opacity-40 blur-[1px] transition-opacity"
                        style={{ backgroundColor: accent }}
                    />
                </motion.button>
            </motion.div>

            <CertDetailsModal
                cert={cert}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                accent={accent}
            />
        </div>
    );
};

const CertificationsGrid = ({ certifications }) => {
    const accents = ['#00f3ff', '#a855f7', '#f97316', '#22c55e'];

    return (
        <Section
            title="CREDENTIALS"
            subtitle="Verified career milestones."
        >
            <div className="max-w-7xl mx-auto mt-16 pb-16 relative">
                {/* Background circuitry effect */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 relative z-10">
                    {certifications.map((cert, idx) => (
                        <OrbitalNode
                            key={idx}
                            cert={cert}
                            idx={idx}
                            accent={accents[idx % accents.length]}
                        />
                    ))}
                </div>

                {/* Ambient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-[var(--accent-1)]/5 blur-[200px] rounded-full -z-10 pointer-events-none" />
            </div>
        </Section>
    );
};

// ── 4. Activities (3D Flip Cards - Ultra-Premium) ──────────────────
const Activities3DGrid = ({ extracurricular }) => {
    const iconMap = {
        Shield: Shield,
        ShieldCheck: ShieldCheck,
        Users: Users,
    };

    return (
        <Section title="ENGAGEMENTS" subtitle="Collaborative growth.">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mt-16 px-4 pb-32">
                {extracurricular.map((item, idx) => {
                    const Icon = iconMap[item.icon] || Zap;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="h-[600px] w-full perspective-2000 group/flip"
                        >
                            {/* Floating wrapper + flip container */}
                            <motion.div
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
                                className="flip-card w-full h-full cursor-pointer"
                                style={{ perspective: '2000px' }}
                            >
                                <div className="flip-inner">

                                    {/* ── FRONT (Ultra-Premium) ── */}
                                    <div className="flip-front backdrop-blur-3xl p-12 flex flex-col items-center justify-center gap-10 shadow-2xl overflow-hidden rounded-[2.5rem] border border-white/5"
                                        style={{ 
                                            background: `radial-gradient(circle at top left, rgba(var(--accent-1-rgb), 0.08) 0%, rgba(2, 6, 23, 0.85) 100%)`,
                                            boxShadow: '0 30px 60px -12px var(--card-bg), inset 0 0 20px rgba(255,255,255,0.02)' 
                                        }}
                                    >
                                        {/* ── Ultra-Premium Border (4px) ── */}
                                        <div className="absolute inset-0 opacity-0 group-hover/flip:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                                            <div className="absolute inset-[-50%] animate-border-rotate blur-3xl opacity-60" 
                                                style={{ background: 'conic-gradient(from 0deg, transparent 0%, var(--accent-1) 50%, transparent 100%)' }} />
                                            <div className="absolute inset-[-150%] animate-border-rotate" 
                                                style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, var(--accent-1) 70%, #fff 100%)' }} />
                                            <div className="absolute inset-[3px] bg-[#020617] rounded-[2.3rem]" />
                                        </div>

                                        {/* Technical Corner Brackets */}
                                        <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/10 rounded-tl-xl z-20 group-hover/flip:border-[var(--accent-1)]/40 transition-all duration-500 pointer-events-none" />
                                        <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/10 rounded-br-xl z-20 group-hover/flip:border-[var(--accent-1)]/40 transition-all duration-500 pointer-events-none" />

                                        {/* Mission Status Indicator */}
                                        <div className="absolute top-6 right-8 z-30 flex items-center gap-2">
                                            <span className="text-[8px] font-black text-slate-900 dark:text-white/20 tracking-[0.3em] uppercase group-hover/flip:text-[var(--accent-1)]/60 transition-colors">
                                                Mission: Active
                                            </span>
                                            <div className="w-2 h-2 rounded-full bg-[var(--accent-1)] shadow-[0_0_12px_var(--accent-1)] animate-pulse" />
                                        </div>

                                        {/* Scanline Effect */}
                                        <div className="absolute inset-x-0 h-[1px] bg-white/5 top-0 animate-scanline pointer-events-none z-10" />

                                        {/* Glass Overlay Sweep */}
                                        <motion.div
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-25 pointer-events-none z-10"
                                        />

                                        {/* Ambient Core Glow */}
                                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[var(--accent-1)]/5 blur-[100px] rounded-full pointer-events-none" />
                                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[var(--accent-2)]/5 blur-[100px] rounded-full pointer-events-none" />

                                        {/* Glowing icon with Parallax */}
                                        <motion.div
                                            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                            className="relative z-20"
                                        >
                                            <div className="w-32 h-32 rounded-[2.5rem] flex items-center justify-center text-[var(--accent-1)] border border-[var(--accent-1)]/30 backdrop-blur-md"
                                                style={{ background: 'linear-gradient(135deg, rgba(var(--accent-1-rgb),0.15), rgba(var(--accent-2-rgb),0.10))', boxShadow: '0 0 50px rgba(var(--accent-1-rgb),0.3)' }}
                                            >
                                                <Icon size={64} strokeWidth={1} />
                                            </div>
                                            <div className="absolute inset-0 bg-[var(--accent-1)]/20 blur-3xl rounded-[2rem] -z-10 animate-pulse" />
                                        </motion.div>

                                        {/* Text Section with Depth */}
                                        <div className="space-y-6 text-center relative z-20 transition-transform duration-500 group-hover/flip:scale-105">
                                            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight drop-shadow-[0_0_15px_rgba(var(--accent-1-rgb),0.3)]">
                                                {item.role}
                                            </h3>
                                            <div className="flex flex-col items-center gap-3">
                                                <p className="text-[var(--accent-1)] font-bold text-sm tracking-[.4em] uppercase opacity-80">
                                                    {item.org}
                                                </p>
                                                <motion.div
                                                    animate={{ width: ['20%', '60%', '20%'] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                    className="h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-1)]/40 to-transparent rounded-full"
                                                />
                                            </div>
                                        </div>

                                        {/* Date Section (Precise) */}
                                        <div className="px-6 py-2.5 rounded-xl border border-white/5 bg-white/5 backdrop-blur-md flex items-center gap-3 text-slate-900 dark:text-white/70 text-[10px] font-black tracking-[.3em] uppercase z-20">
                                            <Calendar size={14} className="text-[var(--accent-1)]" />
                                            {item.date}
                                        </div>
                                    </div>

                                    {/* ── BACK (Ultra-Premium) ── */}
                                    <div className="flip-back p-12 flex flex-col justify-between overflow-hidden rounded-[2.5rem]"
                                        style={{ 
                                            background: `radial-gradient(circle at center, rgba(var(--accent-1-rgb), 0.15) 0%, rgba(2, 6, 23, 0.95) 100%)`, 
                                            border: '1px solid rgba(var(--accent-1-rgb),0.5)', 
                                            boxShadow: '0 0 60px rgba(var(--accent-1-rgb),0.2), inset 0 0 40px rgba(var(--accent-1-rgb),0.1), 0 30px 60px -20px var(--card-bg)' 
                                        }}
                                    >
                                        {/* Encryption Grid Pattern */}
                                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                            style={{ backgroundImage: 'radial-gradient(var(--accent-1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                        />

                                        {/* Top accent bar */}
                                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-1)] to-transparent opacity-80" />

                                        {/* Role & org reminder on back */}
                                        <div className="mb-4 relative z-10">
                                            <p className="text-[10px] font-black tracking-[0.4em] uppercase text-[var(--accent-1)] drop-shadow-[0_0_10px_var(--accent-1)66]">{item.org}</p>
                                        </div>

                                        {/* Description block with parallax feel */}
                                        <div className="space-y-6 flex-1 relative z-10">
                                            <div className="flex items-center gap-3">
                                                <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--accent-1)] to-transparent rounded-full" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] animate-ping" />
                                            </div>
                                            <p className="text-slate-900 dark:text-white/95 text-[15px] leading-relaxed font-medium italic border-l-[3px] border-[var(--accent-1)]/50 pl-6 py-1">
                                                "{item.highlight}"
                                            </p>
                                            <p className="text-slate-900 dark:text-white/70 text-sm leading-relaxed pl-6 font-light">
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* Footer Strategy */}
                                        <div className="space-y-6 mt-8 pt-8 border-t border-white/10 relative z-10">
                                            {/* Skill tags (Technical Pills) */}
                                            <div className="flex flex-wrap gap-2.5">
                                                {item.skills?.map((skill, sIdx) => (
                                                    <span key={sIdx}
                                                        className="px-3.5 py-1.5 rounded-lg text-[var(--accent-1)] text-[9.5px] font-black tracking-[.25em] uppercase border border-[var(--accent-1)]/20 transition-all hover:bg-[var(--accent-1)]/10 hover:border-[var(--accent-1)]/40"
                                                        style={{ background: 'rgba(var(--accent-1-rgb),0.05)' }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* CTA button (Holographic) */}
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={e => e.stopPropagation()}
                                                    className="relative w-full inline-flex items-center justify-center gap-4 py-5 rounded-2xl border border-[var(--accent-1)]/40 text-slate-900 dark:text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(var(--accent-1-rgb),0.4)] hover:scale-[1.03] group/cbtn"
                                                    style={{ background: 'linear-gradient(135deg, rgba(var(--accent-1-rgb),0.2), rgba(var(--accent-2-rgb),0.2))' }}
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/cbtn:translate-x-[100%] transition-transform duration-700" />
                                                    <span className="text-[10px] font-black tracking-[.5em] uppercase relative z-10">View Certificate</span>
                                                    <ExternalLink size={18} className="text-[var(--accent-1)] relative z-10" />
                                                </a>
                                            ) : (
                                                <div className="py-5 text-center text-[9px] font-black tracking-[.4em] uppercase text-slate-900 dark:text-white/25 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
                                                    Signature: Authenticated
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Background ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-t from-[var(--accent-1)]/10 to-transparent blur-[150px] pointer-events-none -z-10" />
        </Section>
    );
};

// ── Main Experience Component ─────────────────────────────────────
const Experience = () => {
    const { education, training, certifications, extracurricular } = portfolioData;

    return (
        <div id="experience" className="experience-container flex flex-col font-sans relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-1)]/5 blur-[150px] -z-10" />

            <EducationPath education={education} />
            <TrainingCard training={training} />
            <CertificationsGrid certifications={certifications} />
            <Activities3DGrid extracurricular={extracurricular} />
        </div>
    );
};

export default Experience;
