import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram, MessageCircle, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
    const { hero, personal } = portfolioData;
    const [textIndex, setTextIndex] = useState(0);

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollY } = useScroll();
    const y1Base = useTransform(scrollY, [0, 500], [0, 200]);
    const y2Base = useTransform(scrollY, [0, 500], [0, -150]);

    const y1 = isMobile ? 0 : y1Base;
    const y2 = isMobile ? 0 : y2Base;

    // Use the longest text to set the width of the placeholder
    const longestText = hero.rotatingText.reduce(
        (a, b) => (a.length > b.length ? a : b),
        ""
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % hero.rotatingText.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hero.rotatingText.length]);

    return (
        <section id="home" className="relative min-h-[110vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Blobs - Optimized opacity */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute top-[40%] left-[60%] w-60 h-60 bg-purple-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10 relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
                        style={{ background: 'var(--bg-elevated)', border: '1px solid var(--card-border)' }}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="font-medium tracking-wide text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>Status: Open to Opportunities</span>
                    </motion.div>

                    {/* Heading - Adjusted line-height and spacing */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        I am a <br />
                        {/* Rotating Text Container */}
                        <span className="relative inline-block h-[1.2em] w-full align-top">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={textIndex}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -40, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="absolute left-0 top-0 text-gradient whitespace-nowrap"
                                >
                                    {hero.rotatingText[textIndex]}
                                </motion.span>
                            </AnimatePresence>
                            {/* Invisible Placeholder */}
                            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                                {longestText}
                            </span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl max-w-lg mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {hero.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-14">
                        <a href="#projects" className="btn-primary group flex items-center gap-2">
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                            <Download size={20} />
                            Resume
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t max-w-md" style={{ borderColor: 'var(--card-border)' }}>
                        <div>
                            <div className="text-3xl font-bold mb-1 font-heading" style={{ color: 'var(--text-primary)' }}>{personal.stats.cgpa}</div>
                            <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>CGPA</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-1 font-heading" style={{ color: 'var(--text-primary)' }}>{personal.stats.projects}</div>
                            <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-1 font-heading" style={{ color: 'var(--text-primary)' }}>{personal.stats.certifications}</div>
                            <div className="text-xs uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>Certifications</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Visuals - Repositioned for better mobile stack */}
                <motion.div
                    style={{ y: y2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center mx-auto mt-12 lg:mt-0"
                >
                    <div className="relative w-full max-w-[380px] h-[550px]">
                        {/* Profile Card Container */}
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 rounded-[2rem] blur-2xl opacity-20 animate-pulse"
                                style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}></div>
                            <div className="relative h-full backdrop-blur-2xl rounded-[2rem] px-6 py-8 flex flex-col items-center justify-between overflow-hidden group transition-all duration-500 theme-card">

                                {/* Decorative Top */}
                                <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                                <div className="relative z-10 w-full flex flex-col items-center">
                                    <div className="w-64 h-64 rounded-full p-1 mb-6 shadow-2xl mx-auto"
                                        style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}>
                                        <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                                            style={{ background: 'var(--bg-base)' }}>
                                            <img src={profileImg} alt={personal.name} className="w-full h-full object-cover object-center" />
                                        </div>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gradient mb-1">{personal.name}</h3>
                                    <p className="text-sm font-medium tracking-wide mb-6" style={{ color: 'var(--accent-1)' }}>{hero.rotatingText[0]}</p>

                                    <div className="w-full flex flex-wrap justify-center gap-2 mb-6">
                                        {['C++', 'Python', 'Data Science'].map((tag) => (
                                            <span key={tag} className="px-3 py-1.5 rounded-lg text-xs"
                                                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Action Bar */}
                                <div className="flex flex-wrap justify-center gap-2 w-full border-t pt-4"
                                    style={{ borderColor: 'var(--card-border)' }}>
                                    {[
                                        { href: personal.github,    icon: Github,          label: 'GitHub',  color: 'var(--accent-1)' },
                                        { href: personal.linkedin,  icon: Linkedin,        label: 'LinkedIn', color: 'var(--accent-1)' },
                                        { href: `mailto:${personal.email}`, icon: Mail,   label: 'Email',   color: 'var(--accent-1)' },
                                        { href: personal.whatsapp,  icon: MessageCircle,   label: 'WhatsApp', color: '#25D366' },
                                        { href: personal.instagram, icon: Instagram,       label: 'Insta',   color: '#E1306C' },
                                        { href: personal.leetcode,  icon: Code2,           label: 'LeetCode', color: '#FFA116' },
                                    ].filter(s => s.href).map(({ href, icon: Icon, label, color }) => (
                                        <a key={label} href={href} target="_blank" rel="noreferrer"
                                            className="flex flex-col items-center gap-1.5 group/icon transition-all duration-300 w-[46px]"
                                            style={{ color: 'var(--text-muted)' }}
                                            onMouseOver={e => { e.currentTarget.style.color = color; e.currentTarget.querySelector('.icon-bg').style.boxShadow = `0 0 14px ${color}55`; e.currentTarget.querySelector('.icon-bg').style.borderColor = color; }}
                                            onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.querySelector('.icon-bg').style.boxShadow = 'none'; e.currentTarget.querySelector('.icon-bg').style.borderColor = 'var(--card-border)'; }}
                                        >
                                            <div className="icon-bg p-2.5 rounded-full transition-all duration-300 shadow-sm"
                                                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--card-border)' }}>
                                                <Icon size={16} />
                                            </div>
                                            <span className="text-[7px] uppercase tracking-wider font-semibold opacity-70 group-hover/icon:opacity-100">{label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
