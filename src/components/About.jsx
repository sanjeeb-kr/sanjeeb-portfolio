import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/images/profile.png';

const About = () => {
    return (
        <Section id="about" title="KNOW ABOUT ME" subtitle="Crafting with purpose." className="py-16 md:py-20 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="max-w-4xl mx-auto"
            >
                {/* Landscape Glassmorphism Container */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="rounded-[2.5rem] overflow-hidden theme-card group/about relative border border-white/5 hover:border-transparent transition-all duration-700 hover:shadow-[0_0_60px_rgba(var(--accent-1-rgb),0.25)]"
                    style={{ background: 'var(--card-bg)', backdropFilter: 'blur(15px)' }}
                >
                    {/* Running Light Border (Ultra-Premium & Thick) */}
                    <div className="absolute inset-0 opacity-0 group-hover/about:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                        {/* Wide Glow Layer */}
                        <div className="absolute inset-[-50%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,var(--accent-1)_50%,transparent_100%)] blur-3xl opacity-30" />
                        {/* Primary High-Intensity Beam */}
                        <div className="absolute inset-[-150%] animate-border-rotate bg-[conic-gradient(from_0deg,transparent_0%,transparent_40%,var(--accent-1)_70%,#fff_100%)]" />
                        {/* Thick Content Mask (4px Border) */}
                        <div className="absolute inset-[4px] bg-var-bg-surface rounded-[2.3rem]" style={{ background: 'var(--bg-surface)' }} />
                    </div>

                    {/* Decorative Corner Brackets (Large) */}
                    <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-500/10 rounded-tl-xl z-20 group-hover/about:border-cyan-400/50 transition-all duration-700 pointer-events-none" />
                    <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-blue-500/10 rounded-br-xl z-20 group-hover/about:border-blue-400/50 transition-all duration-700 pointer-events-none" />

                    {/* Identity Status Indicator */}
                    <div className="absolute top-8 right-10 z-30 flex items-center gap-3">
                        <span className="text-[8px] font-black text-indigo-700 dark:text-cyan-500/40 tracking-[0.4em] uppercase group-hover/about:text-indigo-700 dark:text-cyan-400 transition-colors">Identity: Verified</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
                    </div>

                    <div className="p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 z-10 relative">

                        {/* Left Side: Circular Picture - Power Core Enhanced */}
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="relative shrink-0"
                        >
                            {/* Multi-Layer Power Core */}
                            <div className="absolute inset-[-15%] rounded-full blur-3xl opacity-40 animate-pulse-slow"
                                style={{ background: 'radial-gradient(circle, var(--accent-1), transparent 70%)' }}></div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-5%] rounded-full border border-dashed border-cyan-500/30 opacity-60"></motion.div>

                            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden p-3 z-10 bg-white/40 dark:bg-black/40 backdrop-blur-md"
                                style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <img
                                    src={profileImg}
                                    alt="Sanjeeb Kumar"
                                    className="w-full h-full object-cover rounded-full filter contrast-110 brightness-110 drop-shadow-[0_0_20px_rgba(var(--accent-1-rgb),0.4)]"
                                />
                            </div>
                        </motion.div>

                        {/* Right/Middle Side: Narrative Text Column */}
                        <div className="text-left flex-1 flex flex-col gap-6 w-full">
                            {portfolioData.about.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="pl-4 border-l-2"
                                    style={{ borderColor: 'var(--accent-1)' }}
                                >
                                    <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-wide font-heading"
                                        style={{ color: 'var(--text-primary)' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-base md:text-lg leading-relaxed"
                                        style={{ color: 'var(--text-secondary)' }}>
                                        {item.content}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default About;
