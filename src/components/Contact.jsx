import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

// ── Sub-Component: Contact Card ─────────────────────────────────────
const ContactCard = ({ info, idx }) => {
    const [isHovered, setIsHovered] = useState(false);

    // 3D Tilt Hook-up
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0); y.set(0); setIsHovered(false);
    };

    const handleAction = (e) => {
        if (info.href) {
            window.open(info.href, '_blank');
        }
    };

    // Consistent font size to ensure the email ID fits in exactly one line
    const getFontSize = () => {
        // This size (text-lg/xl) is the sweet spot that fits 26-char emails in one line
        // while remaining large and readable for other cards.
        return 'text-lg md:text-xl tracking-tight leading-tight';
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-full"
        >
            <div
                onClick={handleAction}
                className="relative flex items-center gap-5 px-6 py-5 rounded-[2rem] cursor-pointer overflow-hidden transition-all duration-500 backdrop-blur-3xl h-full"
                style={{
                    background: isHovered 
                        ? `radial-gradient(circle at left, rgba(var(--accent-1-rgb), 0.15) 0%, rgba(2, 6, 23, 0.9) 100%)` 
                        : `linear-gradient(145deg, rgba(30, 41, 59, 0.3) 0%, rgba(2, 6, 23, 0.85) 100%)`,
                    border: `1px solid ${isHovered ? 'rgba(var(--accent-1-rgb), 0.5)' : 'rgba(var(--accent-1-rgb), 0.2)'}`,
                    boxShadow: isHovered 
                        ? `0 40px 80px -15px var(--card-bg), inset 0 0 30px rgba(var(--accent-1-rgb), 0.2), 0 0 30px rgba(var(--accent-1-rgb),0.2)` 
                        : `0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px rgba(var(--accent-1-rgb), 0.1), 0 0 15px rgba(var(--accent-1-rgb),0.1)`
                }}
            >
                {/* ── Ultra-Premium Inner Glow (Static on Hover) ── */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 mix-blend-screen">
                    <div className="absolute inset-[3px] rounded-[1.8rem]" style={{ background: isHovered ? `radial-gradient(circle at left, rgba(var(--accent-1-rgb), 0.12) 0%, rgba(2, 6, 23, 0.95) 100%)` : `rgba(2, 6, 23, 0.95)` }} />
                </div>

                {/* Technical Corner Brackets */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-white/10 rounded-tl-lg z-20 group-hover:border-[var(--accent-1)]/40 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-white/10 rounded-br-lg z-20 group-hover:border-[var(--accent-1)]/40 transition-all duration-500" />

                {/* Link Status Indicator */}
                <div className="absolute top-5 right-8 z-30 flex items-center gap-2">
                    <span className="text-[8px] font-black text-slate-900 dark:text-[var(--accent-1)] tracking-[0.3em] uppercase group-hover:text-white drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)]">
                        {info.href ? 'Connected' : 'Active'}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-1)] shadow-[0_0_10px_var(--accent-1)] animate-pulse" />
                </div>

                {/* Logo / Icon Container */}
                <motion.div
                    animate={isHovered ? {
                        scale: 1.1,
                        rotateY: 15,
                        transition: { duration: 0.4 }
                    } : {
                        y: [0, -2, 0],
                        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 bg-white shadow-2xl z-20"
                    style={{ transform: "translateZ(60px)" }}
                >
                    {info.logo ? (
                        <img src={info.logo} alt={info.label} className="w-8 h-8 object-contain" />
                    ) : (
                        <info.icon size={26} className="text-[#020617]" strokeWidth={1.5} />
                    )}

                    {/* Icon Aura */}
                    <div className="absolute inset-0 bg-[var(--accent-1)]/30 blur-xl rounded-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                </motion.div>

                {/* Data Section */}
                <div className="flex flex-col relative z-20 flex-1 min-w-0" style={{ transform: "translateZ(40px)" }}>
                    <motion.span
                        animate={isHovered ? { x: 4, color: "var(--accent-1)", textShadow: "0 0 15px var(--accent-1)" } : { x: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] font-black mb-1.5 text-slate-900 dark:text-[var(--accent-1)] transition-all drop-shadow-[0_0_8px_rgba(var(--accent-1-rgb),0.8)]"
                    >
                        {info.label}
                    </motion.span>
                    <div className="flex items-center gap-2.5 min-w-0 pointer-events-auto">
                        <span className={`font-black text-slate-900 dark:text-white group-hover:text-[var(--accent-1)] transition-all tracking-tight leading-tight w-full pr-2 drop-shadow-md ${getFontSize(info.value)}`}>
                            {info.value}
                        </span>
                        {info.href && (
                            <motion.div
                                animate={isHovered ? { rotate: 45, x: 2, y: -2 } : {}}
                            >
                                <ExternalLink size={16} className="text-slate-900 dark:text-[var(--accent-1)] group-hover:text-white shrink-0 drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)]" />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            {/* Ambient Underglow */}
            <div className="absolute -inset-2 bg-[var(--accent-1)]/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

// ── Sub-Component: Premium Input ──────────────────────────────────
const PremiumInput = ({ label, type = "text", name, value, onChange, required, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="flex-1 space-y-2"
        >
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)] ml-2">{label}</label>
            <input
                type={type} name={name} value={value} onChange={onChange}
                required={required} placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl outline-none text-slate-900 dark:text-white
                    focus:border-[var(--accent-1)] focus:shadow-[0_0_25px_rgba(var(--accent-1-rgb),0.2)] focus:bg-white/10 transition-all duration-300 placeholder-white/60 drop-shadow-sm font-bold"
            />
        </motion.div>
    );
};

// ── Sub-Component: Premium Textarea ────────────────────────────────
const PremiumTextarea = ({ label, name, value, onChange, required }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 relative"
        >
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent-1)] drop-shadow-[0_0_5px_rgba(var(--accent-1-rgb),0.5)] ml-2">{label}</label>
            <textarea
                name={name} rows={5} value={value} onChange={onChange} required={required}
                placeholder="How can we collaborate?"
                className="w-full px-6 py-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl outline-none text-slate-900 dark:text-white
                    focus:border-[var(--accent-1)] focus:shadow-[0_0_25px_rgba(var(--accent-1-rgb),0.2)] focus:bg-white/10 transition-all duration-300 resize-none placeholder-white/60 drop-shadow-sm font-bold"
            />
        </motion.div>
    );
};

// ── Contact Component ──────────────────────────────────────────────
const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsSubmitting(false); setIsSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }).catch(() => setIsSubmitting(false));
    };

    const cards = [
        { id: 'github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', label: 'GitHub', value: 'sanjeeb-kr', href: portfolioData.personal.github },
        { id: 'linkedin', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg', label: 'LinkedIn', value: 'sanjeeb-kr', href: portfolioData.personal.linkedin },
        { id: 'email', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg', label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
        { id: 'phone', icon: Phone, label: 'Mobile', value: portfolioData.personal.phone, href: `tel:+918240409227` },
        { id: 'location', icon: MapPin, label: 'Location', value: portfolioData.personal.location, href: null }
    ];

    return (
        <Section id="contact" title="UPLINK" subtitle="Let’s work together.">
            <div className="max-w-[1300px] mx-auto -mt-8 px-6 pb-12">

                {/* Available Badge */}
                <div className="flex justify-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 px-5 py-2 rounded-full border border-[var(--accent-1)]/20 bg-[var(--accent-1)]/5 backdrop-blur-xl"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-1)] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent-1)]" />
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent-1)] drop-shadow-[0_0_8px_rgba(var(--accent-1-rgb),0.8)]">Available for new opportunities</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

                    {/* Left: Enhanced Stacked Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        {cards.map((card, i) => (
                            <ContactCard key={card.id} info={card} idx={i} />
                        ))}
                    </div>

                    {/* Right: Animated Message Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-7"
                    >
                        <div className="relative h-full group/form">
                            {/* Outer Form Container (Thick Animated Border Shell) */}
                            <div className="relative p-10 md:p-14 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] h-full flex flex-col justify-center overflow-hidden transition-all duration-700 hover:shadow-[0_40px_100px_rgba(var(--accent-1-rgb),0.3)]">
                                
                                {/* ── Ultra-Premium Thick Animated Border ── */}
                                <div className="absolute inset-0 pointer-events-none opacity-80 group-hover/form:opacity-100 transition-opacity duration-700 mix-blend-screen z-0">
                                    <div className="absolute inset-[-50%] animate-border-rotate blur-3xl opacity-60"
                                        style={{ background: 'conic-gradient(from 0deg, transparent 0%, var(--accent-1) 50%, transparent 100%)' }} />
                                    <div className="absolute inset-[-150%] animate-border-rotate opacity-90"
                                        style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 40%, var(--accent-1) 70%, #fff 100%)' }} />
                                </div>
                                
                                {/* Inner Glass Shield (Reveals the thick 5px animated border) */}
                                <div className="absolute inset-[5px] bg-[#020617]/95 backdrop-blur-[100px] rounded-[3.2rem] overflow-hidden pointer-events-none z-0">
                                    {/* Ambient Core Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-1)]/5 via-transparent to-transparent opacity-50 group-hover/form:opacity-100 transition-opacity duration-700" />
                                    
                                    {/* Elegant Scanline */}
                                    <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-1)]/50 to-transparent top-0 animate-scanline opacity-0 group-hover/form:opacity-100 transition-opacity duration-1000 z-10" />
                                    
                                    {/* Radiant Corner Glows */}
                                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-[var(--accent-1)]/15 blur-[100px] rounded-full transition-all duration-1000 group-hover/form:scale-150 group-hover/form:bg-[var(--accent-1)]/30" />
                                    <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[var(--accent-1)]/10 blur-[100px] rounded-full transition-all duration-1000 group-hover/form:scale-150 group-hover/form:bg-[var(--accent-1)]/20" />
                                </div>

                                {/* Razor-Sharp Technical Brackets (Thickened for impact) */}
                                <div className="absolute top-10 left-10 w-8 h-8 border-t-[3px] border-l-[3px] border-white/20 rounded-tl-2xl z-20 transition-all duration-700 group-hover/form:border-[var(--accent-1)] group-hover/form:w-12 group-hover/form:h-12 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover/form:shadow-[0_0_30px_var(--accent-1)]" />
                                <div className="absolute bottom-10 right-10 w-8 h-8 border-b-[3px] border-r-[3px] border-white/20 rounded-br-2xl z-20 transition-all duration-700 group-hover/form:border-[var(--accent-1)] group-hover/form:w-12 group-hover/form:h-12 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover/form:shadow-[0_0_30px_var(--accent-1)]" />

                                {/* Status Indicator */}
                                <div className="absolute top-10 right-10 md:right-14 z-30 flex items-center gap-3">
                                    <span className="text-[9px] font-black text-slate-900 dark:text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] tracking-[0.3em] uppercase">
                                        System Online
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                                </div>

                                {/* Heading */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-10 relative z-10"
                                >
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-widest uppercase mb-2 drop-shadow-md">
                                        Get in <span className="text-[var(--accent-1)] drop-shadow-[0_0_10px_rgba(var(--accent-1-rgb),0.5)]">Touch</span>
                                    </h3>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white/90 drop-shadow-sm">Send a direct message to my inbox.</p>
                                </motion.div>

                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <PremiumInput delay={0.1} label="Name" name="user_name" required value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} />
                                        <PremiumInput delay={0.15} label="Email Address" type="email" name="user_email" required value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                                    </div>
                                    <PremiumTextarea label="Message" name="message" required value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })} />

                                    {/* Animated submit button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        className="pt-4"
                                    >
                                        <motion.button
                                            type="submit" disabled={isSubmitting}
                                            whileHover={{ y: -2, scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`relative w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all duration-300 ${
                                                isSuccess 
                                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]' 
                                                    : 'bg-[var(--accent-1)] text-[#020617] shadow-[0_4px_20px_rgba(var(--accent-1-rgb),0.3)] border border-[var(--accent-1)] hover:bg-transparent hover:text-white transition-colors duration-300 hover:shadow-[0_0_30px_rgba(var(--accent-1-rgb),0.5)]'
                                            }`}
                                        >
                                            {/* Success ripple */}
                                            <AnimatePresence>
                                                {isSuccess && (
                                                    <motion.div
                                                        initial={{ scale: 0, opacity: 0.8 }}
                                                        animate={{ scale: 4, opacity: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0 bg-white/20 rounded-2xl"
                                                    />
                                                )}
                                            </AnimatePresence>

                                            <span className="relative z-10 flex items-center justify-center gap-3">
                                                {isSubmitting && (
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                                        className="w-4 h-4 border-2 border-[#020617]/30 border-t-[#020617] rounded-full"
                                                    />
                                                )}
                                                {isSubmitting ? 'Sending...' : isSuccess ? '✅ Message Delivered!' : 'Send Message'}
                                            </span>
                                        </motion.button>
                                    </motion.div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;

