import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import Section from './Section';
import TiltCard from './TiltCard';
import { portfolioData } from '../data/portfolioData';
import { playClick, playSuccess } from '../utils/sounds';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ['All', 'Data Analysis', 'Dashboards', 'AI/Web'];

    const filteredProjects = portfolioData.projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    return (
        <Section id="projects" title="ARTIFACTS" subtitle="Exploring elegant solutions.">

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => { setFilter(f); playClick(); }}
                        className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden"
                        style={filter === f ? {
                            background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                            color: '#fff',
                            boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow)'
                        } : {
                            background: 'var(--bg-elevated)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--card-border)'
                        }}
                        onMouseOver={e => { if (filter !== f) { e.currentTarget.style.borderColor = 'var(--accent-1)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'; }}}
                        onMouseOut={e => { if (filter !== f) { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.boxShadow = 'none'; }}}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Project Grid — Modern Flex-Center Layout for Smart Space Usage */}
            <motion.div layout className="flex flex-wrap justify-center gap-6 items-stretch w-full">
                <AnimatePresence>
                    {filteredProjects.map((project, idx) => (
                        <TiltCard
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            key={project.id}
                            className="theme-card group flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] max-w-[600px] overflow-hidden p-0 relative border border-white/5 hover:border-transparent transition-all duration-500 hover:shadow-[0_0_50px_rgba(var(--accent-1-rgb),0.3)]"
                        >
                            {/* Running Light Border (Ultra-Premium & Thick) */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0">
                                {/* Wide Glow Layer */}
                                <div className="absolute inset-[-50%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,var(--accent-1)_50%,transparent_100%)] blur-3xl opacity-40" />
                                {/* Primary High-Intensity Beam */}
                                <div className="absolute inset-[-150%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,var(--accent-1)_70%,#fff_100%)]" />
                                {/* Thick Content Mask (4px Border) */}
                                <div className="absolute inset-[4px] bg-var-bg-surface rounded-2xl" style={{ background: 'var(--bg-surface)' }} />
                            </div>

                            {/* Decorative Corner Brackets (Refined) */}
                            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500/10 rounded-tl z-20 group-hover:border-cyan-400/40 transition-all duration-500 peer-hover:scale-110 pointer-events-none" />
                            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-blue-500/10 rounded-br z-20 group-hover:border-blue-400/40 transition-all duration-500 peer-hover:scale-110 pointer-events-none" />

                            {/* Status Indicator */}
                            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                <span className="text-[8px] font-black text-emerald-800 dark:text-emerald-500 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active</span>
                            </div>

                            {/* Holographic Shine Sweep */}
                            <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden rounded-inherit">
                                <motion.div 
                                    animate={{ x: ['-200%', '300%'] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
                                    className="absolute inset-0 w-1/3 h-full skew-x-[-35deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-3xl"
                                />
                            </div>

                            {/* Project Image - Digital Power Core Container */}
                            <div className="w-full h-48 md:h-56 relative overflow-hidden shrink-0 p-6 flex items-center justify-center transition-all duration-500 bg-white/40 dark:bg-black/40"
                                style={{ backdropFilter: 'blur(5px)' }}>
                                
                                {/* Power Core Background */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{ background: 'conic-gradient(from 0deg, transparent, var(--accent-1), transparent, var(--accent-2), transparent)' }}
                                />
                                <div className="absolute inset-0 bg-var-bg-surface/50 opacity-40 mix-blend-overlay pointer-events-none" 
                                    style={{ backgroundImage: 'radial-gradient(circle at center, transparent 30%, black 100%)' }} />

                                {/* Project Image - Parallax */}
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    whileHover={{ scale: 1.1, translateY: -10 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="max-w-full max-h-full object-contain z-10 filter drop-shadow-[0_15px_30px_var(--card-bg)]"
                                />
                                
                                <div className="absolute inset-0 opacity-60 transition-opacity duration-500"
                                    style={{ background: 'linear-gradient(to top, var(--bg-surface), transparent 85%)' }}></div>
                            </div>

                            <div className="flex flex-col flex-1 w-full p-6 z-10 relative">
                                <div className="flex justify-between items-start mb-4">
                                    {/* Category Badge - Multi-layer Glow */}
                                    <span className="text-[10px] md:text-sm font-black px-4 py-1.5 rounded-lg transition-all duration-300 border border-cyan-500/20 bg-cyan-500/5 text-indigo-700 dark:text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:bg-cyan-500/10">
                                        {project.category}
                                    </span>
                                </div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="transition-transform duration-300"
                                >
                                    <h3 className="text-xl md:text-2xl font-black mb-4 leading-tight"
                                        style={{ color: 'var(--text-primary)' }}>
                                        <span className="group-hover:text-gradient transition-all duration-300">
                                            {project.title}
                                        </span>
                                    </h3>
                                </motion.div>

                                {/* High-Tech Tech Stack on Card */}
                                <div className="flex flex-wrap gap-2.5 mb-8">
                                    {project.tech.slice(0, 3).map(t => (
                                        <span key={t} className="text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 text-indigo-700 dark:text-[var(--accent-1)] group-hover:text-white group-hover:bg-[var(--accent-1)]/20 group-hover:border-[var(--accent-1)]/50 transition-all duration-300 drop-shadow-[0_0_8px_rgba(var(--accent-1-rgb),0.4)]">
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="text-[9px] font-bold text-muted self-center opacity-40 tracking-wider">
                                            +{project.tech.length - 3} &nbsp;MODULES
                                        </span>
                                    )}
                                </div>

                                {/* Actions - Enhanced Parallax */}
                                <div className="mt-auto w-full flex justify-between items-center pt-6 gap-3 border-t border-white/5">
                                    {project.links.live && project.links.live !== "" ? (
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-lg transition-all duration-300 text-slate-900 dark:text-white"
                                            style={{
                                                background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                                                boxShadow: '0 4px 15px var(--accent-glow)'
                                            }}>
                                            <ExternalLink size={16} /> View Live
                                        </motion.a>
                                    ) : (
                                        <span className="text-sm italic" style={{ color: 'var(--text-muted)' }}>No Live Link</span>
                                    )}
                                    <motion.button
                                        onClick={() => { setSelectedProject(project); playSuccess(); }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="text-sm font-bold px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2"
                                        style={{
                                            background: 'var(--bg-elevated)',
                                            color: 'var(--text-secondary)',
                                            border: '1px solid var(--card-border)'
                                        }}
                                        onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-1)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'; }}
                                        onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        View Details <ChevronRight size={16} />
                                    </motion.button>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 backdrop-blur-2xl"
                        style={{ background: 'var(--card-bg)' }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', bounce: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl"
                        >
                            {/* Running Light Border */}
                            {/* Modal Content - Ultra HUD Shell */}
                            <div className="relative rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row gap-10 md:gap-16 overflow-hidden items-start backdrop-blur-[100px] border border-white/20"
                                style={{ background: 'var(--bg-elevated)' }}>

                                {/* Corner Brackets (HUD Decoration) */}
                                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-cyan-500/10 rounded-tl-2xl pointer-events-none" />
                                <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-cyan-500/10 rounded-tr-2xl pointer-events-none" />
                                <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-cyan-500/10 rounded-bl-2xl pointer-events-none" />
                                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-cyan-500/10 rounded-br-2xl pointer-events-none" />

                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
                                <div className="absolute inset-0 h-px bg-white/5 opacity-10 pointer-events-none" />

                                {/* Project Status Indicator */}
                                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
                                    <span className="text-[10px] whitespace-nowrap font-black text-emerald-800 dark:text-emerald-500 tracking-[.4em] uppercase">Project // Verified</span>
                                </div>

                                {/* Close Button - Refined */}
                                <motion.button
                                    onClick={() => setSelectedProject(null)}
                                    whileHover={{ rotate: 90, scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-8 right-8 p-3 rounded-full z-20 transition-all border border-white/10 text-slate-900 dark:text-white/40 hover:text-slate-900 dark:text-white"
                                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                                >
                                    <X size={20} />
                                </motion.button>

                                {/* Left: Details */}
                                <div className="flex-1 w-full text-left pt-6 relative z-10">
                                    <span className="text-[11px] font-black tracking-[0.4em] uppercase mb-4 block text-indigo-700 dark:text-cyan-400 opacity-60">
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight text-slate-900 dark:text-white tracking-tight">
                                        <span className="text-gradient-cyan-blue">{selectedProject.title}</span>
                                    </h2>
                                    
                                    <div className="space-y-6 mb-12">
                                        <h4 className="text-[11px] font-black uppercase tracking-[.3em] text-slate-900 dark:text-white/30 mb-6 flex items-center gap-4">
                                            Mission Objectives <div className="h-[1px] flex-1 bg-white/5" />
                                        </h4>
                                        <ul className="space-y-4">
                                            {selectedProject.details.split('. ').map((point, pIdx) => point.trim() !== "" && (
                                                <motion.li 
                                                    key={pIdx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + (pIdx * 0.1) }}
                                                    className="flex items-start gap-4 group/point"
                                                >
                                                    <div className="mt-1.5 shrink-0 w-2 h-2 rounded-sm rotate-45 border border-cyan-500 group-hover/point:bg-cyan-500 group-hover/point:shadow-[0_0_12px_#22d3ee] transition-all duration-300" />
                                                    <p className="text-[15px] md:text-[17px] leading-relaxed text-slate-900 dark:text-white/70 group-hover/point:text-slate-900 dark:text-white transition-colors">
                                                        {point.endsWith('.') ? point : `${point}.`}
                                                    </p>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-[.3em] text-slate-900 dark:text-white/30 mb-6 flex items-center gap-4">
                                            Infrastructure Stack <div className="h-[1px] flex-1 bg-white/5" />
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.tech.map(t => (
                                                <motion.span
                                                    key={t}
                                                    whileHover={{ scale: 1.1, y: -2, backgroundColor: 'rgba(var(--accent-1-rgb), 0.2)' }}
                                                    className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/10 text-indigo-700 dark:text-[var(--accent-1)] hover:text-slate-900 dark:hover:text-white hover:border-[var(--accent-1)] transition-all cursor-default drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.3)]"
                                                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                                                >
                                                    {t}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Actions */}
                                <div className="w-full md:w-64 shrink-0 flex flex-col gap-4 border-t md:border-t-0 md:border-l pt-6 md:pt-2 md:pl-8 mt-6 md:mt-0"
                                    style={{ borderColor: 'var(--card-border)' }}>
                                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Actions</h4>

                                    {selectedProject.links.live && (
                                        <motion.a
                                            href={selectedProject.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-slate-900 dark:text-white"
                                            style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))', boxShadow: '0 4px 20px var(--accent-glow)' }}>
                                            <ExternalLink size={18} /> View Live
                                        </motion.a>
                                    )}

                                    {selectedProject.links.github ? (
                                        <motion.a
                                            href={selectedProject.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ y: -3, scale: 1.02 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold transition-all"
                                            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
                                            onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-1)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'; }}
                                            onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                                        >
                                            <Github size={18} /> Source Code
                                        </motion.a>
                                    ) : (
                                        <div className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold cursor-not-allowed"
                                            style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}>
                                            <Github size={18} /> Private Repo
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Projects;
