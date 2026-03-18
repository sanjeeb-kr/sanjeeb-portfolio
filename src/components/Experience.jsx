import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, BookOpen, Users, Megaphone, Database, Cloud, Code, ShieldCheck, ArrowRight } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

// ── 1. Education Timeline ──────────────────────────────────────────
const EducationPath = ({ education }) => (
    <Section title="Education Journey" subtitle="The academic milestones">
        <div className="max-w-3xl mx-auto relative px-4 md:px-0 mt-8">
            {/* Neon vertical line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 opacity-30 blur-sm rounded-full"
                style={{ background: 'linear-gradient(to bottom, var(--accent-1), var(--accent-2), var(--accent-1))' }}></div>
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] z-0"
                style={{ background: 'linear-gradient(to bottom, var(--accent-1), var(--accent-2), var(--accent-1))' }}></div>

            <div className="flex flex-col gap-12">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        /* 
                         * once: false — allows re-animation on scroll back (fixes reset issue)
                         * margin: "-50px" — triggers slightly before fully in view
                         */
                        viewport={{ once: false, margin: '-50px' }}
                        transition={{ duration: 0.55, delay: idx * 0.15, ease: 'easeOut' }}
                        className="timeline-item relative pl-12 md:pl-20 z-10 group"
                    >
                        {/* Glowing Node */}
                        <div className="timeline-node absolute left-[9px] md:left-[25px] top-2 z-10 box-content"></div>

                        <div className="theme-card shimmer-card relative p-6 md:p-8 rounded-2xl overflow-hidden group-hover:border-[var(--accent-1)] transition-all duration-300">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none" style={{ color: 'var(--accent-1)' }}>
                                <BookOpen size={60} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{edu.school}</h3>
                            <div className="font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>{edu.degree}</div>

                            {/* CGPA / Grade highlight */}
                            <div className="inline-block px-4 py-1.5 mb-4 rounded-lg text-sm font-bold shadow-sm transition-all duration-300 group-hover:shadow-[0_0_15px_var(--accent-glow)]"
                                style={{
                                    background: 'var(--accent-glow)',
                                    border: '1px solid var(--accent-1)',
                                    color: 'var(--accent-1)'
                                }}>
                                🎓 {edu.grade}
                            </div>

                            <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full w-fit"
                                style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
                                <Calendar size={14} /> {edu.year}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
);

// ── 2. Training Section ────────────────────────────────────────────
const TrainingCard = ({ training }) => (
    <Section title="Training &amp; Outcomes">
        <div className="max-w-4xl mx-auto">
            {training.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="theme-card shimmer-card relative p-8 md:p-10 rounded-3xl overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-8 border-b pb-8"
                        style={{ borderColor: 'var(--card-border)' }}>
                        <div>
                            <span className="text-xs uppercase tracking-widest font-bold mb-2 block" style={{ color: 'var(--accent-2)' }}>{item.company}</span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                <Calendar size={14} /> {item.date}
                            </div>
                        </div>
                        {item.link && (
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="shrink-0 font-bold px-6 py-3 rounded-full transition-all flex items-center gap-2"
                                style={{ border: '2px solid var(--accent-2)', color: 'var(--accent-2)', background: 'transparent' }}
                                onMouseOver={e => { e.currentTarget.style.background = 'var(--accent-2)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow-2)'; }}
                                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent-2)'; e.currentTarget.style.boxShadow = 'none'; }}
                            >
                                View Certificate <ExternalLink size={16} />
                            </motion.a>
                        )}
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--text-muted)' }}>Key Learning Outcomes</h4>
                        <ul className="space-y-3">
                            {(item.outcomes || [item.desc]).map((outcome, oIdx) => (
                                <motion.li
                                    key={oIdx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: oIdx * 0.08 }}
                                    className="flex items-start gap-3"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    <span className="mt-1 font-bold" style={{ color: 'var(--accent-1)' }}>▹</span>
                                    <span className="leading-relaxed">{outcome}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </Section>
);

// ── 3. Certifications Grid ─────────────────────────────────────────
const CertificationsGrid = ({ certifications }) => {
    const getIconForPlatform = (platform) => {
        if (platform.includes('AlgoTutor')) return <Code size={24} />;
        if (platform.includes('NPTEL')) return <Cloud size={24} />;
        if (platform.includes('SQL')) return <Database size={24} />;
        return <ShieldCheck size={24} />;
    };

    return (
        <Section title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ y: -10, transition: { duration: 0.25 } }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="cert-card group relative"
                    >
                        {/* Gradient glow border appears on hover via CSS */}
                        <div className="cert-inner p-6 md:p-8 flex flex-col justify-between h-full min-h-[220px]">

                            {/* Top Row */}
                            <div className="flex justify-between items-start mb-8">
                                <div className="transition-all duration-300 group-hover:scale-110" style={{ color: 'var(--text-muted)' }}
                                    onMouseOver={() => {}} // handled by group CSS
                                >
                                    <div className="p-3 rounded-xl transition-all duration-300 group-hover:text-[var(--accent-1)] group-hover:shadow-[0_0_15px_var(--accent-glow)]"
                                        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--card-border)' }}>
                                        {getIconForPlatform(cert.issuer)}
                                    </div>
                                </div>
                                <div className="font-mono text-xs tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                                    {cert.issuer}
                                </div>
                            </div>

                            {/* Certificate Name */}
                            <div className="text-center mb-8 flex-1 flex items-center justify-center">
                                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug transition-colors duration-300 group-hover:text-gradient"
                                    style={{ color: 'var(--text-primary)' }}>
                                    {cert.title}
                                </h3>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex justify-between items-center border-t pt-5"
                                style={{ borderColor: 'var(--card-border)' }}>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: 'var(--text-muted)' }}>Issued</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold" style={{ color: 'var(--text-secondary)' }}>{cert.date || "Ongoing"}</span>
                                        {cert.date && (
                                            <span className="flex items-center gap-1.5 bg-green-500/10 text-green-600 text-[10px] px-2 py-0.5 rounded-full font-bold">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {cert.link && (
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ rotate: -45, scale: 1.15 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{ border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
                                        onMouseOver={e => { e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.borderColor = 'var(--accent-1)'; e.currentTarget.style.boxShadow = '0 0 15px var(--accent-glow)'; }}
                                        onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--card-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                                    >
                                        <ArrowRight size={18} />
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

// ── 4. Positions of Responsibility ─────────────────────────────────
const ExtracurricularCards = ({ extracurricular }) => (
    <Section title="Positions of Responsibility">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {extracurricular.map((item, idx) => {
                const isCoordinator = item.role.includes("Coordinator");
                return (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ y: -6 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.4, delay: idx * 0.15 }}
                        className="p-8 rounded-3xl backdrop-blur-xl flex flex-col items-start gap-4 relative overflow-hidden group theme-card shimmer-card"
                    >
                        {/* Pulsing hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                            style={{ background: `radial-gradient(circle at 30% 30%, var(--accent-glow-2), transparent 70%)` }}></div>

                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                            className="p-4 rounded-2xl relative z-10"
                            style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-2)' }}>
                            {isCoordinator
                                ? <Megaphone style={{ color: 'var(--accent-2)' }} size={28} />
                                : <Users style={{ color: 'var(--accent-2)' }} size={28} />
                            }
                        </motion.div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.role}</h3>
                            <div className="font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>{item.org}</div>
                            {item.date && <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{item.date}</div>}
                            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    </Section>
);

// ── Main Export ────────────────────────────────────────────────────
const Experience = () => {
    const { training, certifications, extracurricular, education } = portfolioData;
    return (
        <div id="experience" className="relative">
            <EducationPath education={education} />
            <TrainingCard training={training} />
            <CertificationsGrid certifications={certifications} />
            <ExtracurricularCards extracurricular={extracurricular} />
        </div>
    );
};

export default Experience;
