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
        <Section id="projects" title="Featured Projects" subtitle="A collection of my best work in AI, Data, and Web Dev">

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

            {/* Project Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <AnimatePresence>
                    {filteredProjects.map((project, idx) => (
                        <TiltCard
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            key={project.id}
                            className="theme-card shimmer-card group flex flex-col h-full overflow-hidden p-0 relative"
                        >
                            {/* Project Image */}
                            <div className="w-full h-48 md:h-56 relative overflow-hidden shrink-0 p-2 flex items-center justify-center transition-all duration-500"
                                style={{ background: 'var(--bg-elevated)' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                                    style={{ background: 'linear-gradient(to top, var(--bg-surface), transparent 70%)' }}></div>
                            </div>

                            <div className="flex flex-col flex-1 w-full p-6 z-10 relative">
                                {/* Category Badge */}
                                <span className="self-start text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-4 transition-all duration-300"
                                    style={{
                                        background: 'var(--accent-glow)',
                                        color: 'var(--accent-1)',
                                        border: '1px solid var(--accent-1)',
                                    }}>
                                    {project.category}
                                </span>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 line-clamp-2"
                                    style={{ color: 'var(--text-primary)' }}>
                                    <span className="group-hover:text-gradient transition-all duration-300" style={{ color: 'inherit' }}>
                                        {project.title}
                                    </span>
                                </h3>

                                {/* Actions */}
                                <div className="mt-auto w-full flex justify-between items-center pt-6 gap-2">
                                    {project.links.live && project.links.live !== "" ? (
                                        <motion.a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="flex items-center gap-2 text-sm font-bold px-4 py-2.5 rounded-lg transition-all duration-300 text-white"
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
                        style={{ background: 'rgba(0,0,0,0.75)' }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', bounce: 0.25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl"
                        >
                            {/* Running Light Border */}
                            <div className="absolute -inset-[2px] rounded-[2rem] running-border opacity-80 blur-[2px]"></div>

                            {/* Modal Content */}
                            <div className="relative rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 overflow-hidden items-start"
                                style={{ background: 'var(--bg-surface)', border: '1px solid var(--card-border)' }}>

                                {/* Close */}
                                <motion.button
                                    onClick={() => setSelectedProject(null)}
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-6 right-6 p-2 rounded-full z-10 transition-colors"
                                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--card-border)' }}
                                    onMouseOver={e => { e.currentTarget.style.background = '#ef4444'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#ef4444'; }}
                                    onMouseOut={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--card-border)'; }}
                                >
                                    <X size={20} />
                                </motion.button>

                                {/* Left: Details */}
                                <div className="flex-1 w-full text-left pt-2">
                                    <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: 'var(--accent-1)' }}>
                                        {selectedProject.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                                        {selectedProject.details}
                                    </p>
                                    <div>
                                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-4 pb-2 inline-block"
                                            style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--card-border)' }}>
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2.5 mt-2">
                                            {selectedProject.tech.map(t => (
                                                <motion.span
                                                    key={t}
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    className="px-3 py-1.5 rounded-full text-xs font-semibold cursor-default transition-all"
                                                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
                                                    onMouseOver={e => { e.currentTarget.style.borderColor = 'var(--accent-1)'; e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.boxShadow = '0 0 10px var(--accent-glow)'; }}
                                                    onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.boxShadow = 'none'; }}
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
                                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white"
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
