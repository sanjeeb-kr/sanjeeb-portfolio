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
    const { technical, soft } = portfolioData.skills;

    const categories = technical.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <Section id="skills" title="The Arsenal" subtitle="Tools and technologies that power my solutions">
            <div className="flex flex-col gap-10">
                {Object.entries(categories).map(([categoryName, skills], idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="theme-card shimmer-card relative p-6 md:p-8"
                    >
                        {/* Category Header */}
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-gradient">
                            {categoryName}
                        </h3>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            {skills.map((skill, sIdx) => (
                                <motion.div
                                    key={sIdx}
                                    variants={item}
                                    className="skill-pill relative group flex items-center gap-3"
                                >
                                    <skill.icon size={20} className="icon-glow" />
                                    <span className="font-medium text-sm md:text-base relative z-10">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="theme-card shimmer-card relative p-6 md:p-8"
                >
                    <h3 className="text-xl md:text-2xl font-bold mb-6"
                        style={{ background: 'linear-gradient(135deg, var(--accent-2), #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        Soft Skills
                    </h3>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-4"
                    >
                        {soft.map((skill, idx) => (
                            <motion.span
                                key={idx}
                                variants={item}
                                className="skill-pill relative violet-pill"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
