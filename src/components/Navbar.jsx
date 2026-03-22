import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Code2, Briefcase, Mail, FolderGit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick, playHover } from '../utils/sounds';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const navLinks = [
        { id: 'home', icon: Home, label: 'HOME', href: '#home' },
        { id: 'about', icon: User, label: 'ABOUT', href: '#about' },
        { id: 'skills', icon: Code2, label: 'ARSENAL', href: '#skills' },
        { id: 'projects', icon: FolderGit2, label: 'ARTIFACTS', href: '#projects' },
        { id: 'experience', icon: Briefcase, label: 'JOURNEY', href: '#experience' },
        { id: 'contact', icon: Mail, label: 'UPLINK', href: '#contact' },
    ];

    // Active section tracking
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 200;
            sections.forEach((section, index) => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveTab(navLinks[index].id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smart hide/reveal on scroll + cursor near top
    useEffect(() => {
        const handleScrollVis = () => {
            const y = window.scrollY;
            if (y < 80) {
                setIsVisible(true);
            } else if (y > lastScrollY.current + 10) {
                setIsVisible(false);
            } else if (y < lastScrollY.current - 10) {
                setIsVisible(true);
            }
            lastScrollY.current = y;
        };
        const handleMouse = (e) => { if (e.clientY < 80) setIsVisible(true); };

        window.addEventListener('scroll', handleScrollVis, { passive: true });
        window.addEventListener('mousemove', handleMouse, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScrollVis);
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);

    return (
        <>
            {/* ─── Desktop: Centered nav pill + fixed right toggle ─── */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: isVisible ? 0 : -120, opacity: isVisible ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center pointer-events-none"
            >
                {/* Nav pill — centered in the full viewport width */}
                <div className="flex items-center gap-1 p-2 rounded-full pointer-events-auto"
                    style={{ background: 'var(--nav-bg)', border: '1px solid var(--card-border)', backdropFilter: 'blur(16px)' }}>
                    {navLinks.map((link) => {
                        const isActive = activeTab === link.id;
                        return (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                onClick={() => { setActiveTab(link.id); playClick(); }}
                                onMouseEnter={() => playHover()}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 text-sm font-medium"
                                style={{ color: isActive ? 'var(--bg-base)' : 'var(--text-muted)' }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="absolute inset-0 rounded-full"
                                        style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <link.icon size={16} />
                                    <span>{link.label}</span>
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </motion.nav>



            {/* ─── Mobile Top Bar ─── */}
            <div className="fixed top-0 left-0 w-full z-40 md:hidden flex justify-between items-center p-4 backdrop-blur-md transition-colors duration-300"
                style={{ background: 'var(--nav-bg)', borderBottom: '1px solid var(--card-border)' }}>
                <span className="font-bold text-xl tracking-tighter" style={{ color: 'var(--text-primary)' }}>
                    Sanjeeb<span style={{ color: 'var(--accent-1)' }}>.</span>
                </span>
                <div className="flex gap-4 items-center relative z-50">
                    <button onClick={() => setIsMobileMenuOpen(true)} style={{ color: 'var(--text-primary)' }}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* ─── Mobile Menu Overlay ─── */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
                        style={{ background: 'var(--bg-surface)' }}
                    >
                        <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2" style={{ color: 'var(--text-muted)' }}>
                            <X size={32} />
                        </button>
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                onClick={() => { setIsMobileMenuOpen(false); playClick(); }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-2xl font-bold flex items-center gap-4 transition-colors"
                                style={{ color: 'var(--text-secondary)' }}
                                onMouseOver={e => e.currentTarget.style.color = 'var(--accent-1)'}
                                onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >
                                <link.icon size={28} />
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;