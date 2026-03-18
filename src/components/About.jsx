import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/images/profile.png';

const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="My journey and passion for technology">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                className="max-w-4xl mx-auto"
            >
                {/* Terminal Window Container */}
                <motion.div
                    whileHover={{ boxShadow: '0 0 50px var(--accent-glow)' }}
                    className="rounded-xl overflow-hidden theme-card shimmer-card shadow-xl relative"
                >
                    {/* Terminal Header Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b"
                        style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border-color)' }}>
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:scale-110 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition-transform cursor-pointer"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:scale-110 transition-transform cursor-pointer"></div>
                        <span className="ml-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                            sanjeeb@portfolio:~/about_me
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10"
                        style={{ background: 'var(--card-bg)' }}>

                        {/* Animated Headshot */}
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 2 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="relative shrink-0 cursor-pointer"
                        >
                            {/* Pulsing glow halo */}
                            <div className="absolute inset-0 rounded-2xl blur-md opacity-60 animate-pulse"
                                style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}></div>
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 p-1 z-10"
                                style={{ borderColor: 'var(--accent-1)', background: 'var(--bg-base)' }}>
                                <img
                                    src={profileImg}
                                    alt="Sanjeeb Kumar Headshot"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </motion.div>

                        {/* Narrative Text */}
                        <div className="text-left font-mono">
                            <p className="mb-4 font-semibold" style={{ color: 'var(--accent-1)' }}>
                                $ cat narrative.txt
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                                {portfolioData.about}
                            </p>
                            <div className="mt-4 flex items-center gap-2 animate-pulse" style={{ color: 'var(--accent-1)' }}>
                                <span>$</span>
                                <span className="w-2 h-4 inline-block" style={{ background: 'var(--accent-1)' }}></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default About;
