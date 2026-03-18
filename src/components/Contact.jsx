import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';

// ── Wireframe Globe (monochrome, theme-aware) ──────────────────────
const EarthGraphic = () => {
    const latLines = [-72, -54, -36, -18, 0, 18, 36, 54, 72];
    const lonAngles = [0, 20, 40, 60, 80, 100, 120, 140, 160];
    const R = 138; const cx = 150; const cy = 150;

    const lonPath = (angleDeg) => {
        const a = (angleDeg * Math.PI) / 180;
        const rx = Math.abs(Math.sin(a)) * R;
        const sweep = Math.cos(a) >= 0 ? 1 : 0;
        if (rx < 1) return `M${cx},${cy - R} L${cx},${cy + R}`;
        return `M${cx},${cy - R} A${rx},${R} 0 0,${sweep} ${cx},${cy + R} A${rx},${R} 0 0,${sweep} ${cx},${cy - R}`;
    };

    const cities = [
        { x: 73, y: 115 }, { x: 148, y: 100 }, { x: 165, y: 108 },
        { x: 194, y: 122 }, { x: 205, y: 138 }, { x: 235, y: 110 },
        { x: 252, y: 132 }, { x: 108, y: 198 }, { x: 265, y: 175 },
    ];
    const home = { x: 210, y: 130 };

    return (
        <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80 mx-auto select-none">
            {/* Atmosphere halo */}
            <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, transparent 46%, var(--accent-glow) 65%, transparent 82%)', opacity: 0.8 }} />

            {/* Rotating orbit ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-18px] rounded-full"
                style={{ border: '1px dashed var(--accent-1)', opacity: 0.3 }}
            />
            {/* Tilted second ring */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-30px] rounded-full"
                style={{ border: '1px solid var(--accent-2)', opacity: 0.18 }}
            />

            {/* Globe — slow y-axis spin */}
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                style={{ width: 300, height: 300, willChange: 'transform' }}
            >
                <svg viewBox="0 0 300 300" width="300" height="300">
                    <defs>
                        <radialGradient id="sphereGrad" cx="36%" cy="32%" r="60%">
                            <stop offset="0%" stopColor="var(--accent-1)" stopOpacity="0.07" />
                            <stop offset="60%" stopColor="var(--accent-1)" stopOpacity="0.02" />
                            <stop offset="100%" stopColor="var(--accent-1)" stopOpacity="0.12" />
                        </radialGradient>
                        <radialGradient id="rimG" cx="50%" cy="50%" r="50%">
                            <stop offset="72%" stopColor="transparent" />
                            <stop offset="100%" stopColor="var(--accent-1)" stopOpacity="0.4" />
                        </radialGradient>
                        <radialGradient id="specG" cx="34%" cy="28%" r="28%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </radialGradient>
                        <clipPath id="gclip"><circle cx={cx} cy={cy} r={R} /></clipPath>
                        <filter id="dGlow" x="-60%" y="-60%" width="220%" height="220%">
                            <feGaussianBlur stdDeviation="2.5" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <filter id="lGlow" x="-5%" y="-5%" width="110%" height="110%">
                            <feGaussianBlur stdDeviation="1.1" result="b" />
                            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>

                    {/* Sphere glass surface */}
                    <circle cx={cx} cy={cy} r={R} fill="url(#sphereGrad)" />

                    {/* Latitude ellipses */}
                    <g clipPath="url(#gclip)" filter="url(#lGlow)">
                        {latLines.map(lat => {
                            const phi = (lat * Math.PI) / 180;
                            const ry = Math.cos(phi) * R * 0.18;
                            const yOff = Math.sin(phi) * R;
                            return (
                                <ellipse key={lat} cx={cx} cy={cy + yOff} rx={R} ry={ry > 1 ? ry : 1}
                                    fill="none"
                                    stroke="var(--accent-1)"
                                    strokeWidth={lat === 0 ? 0.9 : 0.5}
                                    strokeOpacity={lat === 0 ? 0.5 : 0.22} />
                            );
                        })}
                    </g>

                    {/* Longitude arcs */}
                    <g clipPath="url(#gclip)" filter="url(#lGlow)">
                        {lonAngles.map(a => (
                            <path key={a} d={lonPath(a)} fill="none"
                                stroke="var(--accent-1)" strokeWidth="0.5" strokeOpacity="0.22" />
                        ))}
                    </g>

                    {/* City connection lines */}
                    <g clipPath="url(#gclip)" stroke="var(--accent-2)" strokeWidth="0.6" fill="none">
                        {cities.slice(0, -1).map((c, i) => (
                            <line key={i} x1={c.x} y1={c.y} x2={cities[i + 1].x} y2={cities[i + 1].y} strokeOpacity="0.14" />
                        ))}
                        {cities.map((c, i) => (
                            <line key={`h${i}`} x1={c.x} y1={c.y} x2={home.x} y2={home.y} strokeOpacity="0.08" />
                        ))}
                    </g>

                    {/* City dots */}
                    <g clipPath="url(#gclip)" filter="url(#dGlow)">
                        {cities.map((c, i) => (
                            <circle key={i} cx={c.x} cy={c.y} r="2.2"
                                fill="var(--accent-1)" fillOpacity="0.7" />
                        ))}
                    </g>

                    {/* Home — Patna, India */}
                    <g clipPath="url(#gclip)">
                        <circle cx={home.x} cy={home.y} r="3.5"
                            fill="var(--accent-2)" fillOpacity="0.95" filter="url(#dGlow)" />
                        <circle cx={home.x} cy={home.y} r="3.5" fill="none"
                            stroke="var(--accent-2)" strokeWidth="1.5">
                            <animate attributeName="r" values="4;13;4" dur="2.4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.9;0;0.9" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                    </g>

                    {/* Rim + specular layers */}
                    <circle cx={cx} cy={cy} r={R} fill="url(#rimG)" />
                    <circle cx={cx} cy={cy} r={R} fill="url(#specG)" />
                    <circle cx={cx} cy={cy} r={R} fill="none"
                        stroke="var(--accent-1)" strokeWidth="1" strokeOpacity="0.4" />
                </svg>
            </motion.div>

        </div>
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
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }).catch(() => {
            setIsSubmitting(false);
        });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
        { icon: Phone, label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
        { icon: MapPin, label: 'Location', value: portfolioData.personal.location, href: null },
    ];

    const inputStyle = {
        background: 'var(--bg-elevated)',
        border: '1px solid var(--card-border)',
        color: 'var(--text-primary)',
        borderRadius: '0.75rem',
        padding: '0.875rem 1.25rem',
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s'
    };

    return (
        <Section id="contact" title="Get In Touch" subtitle="Let's build something amazing together">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left — Globe + contact info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="space-y-10"
                >
                    <EarthGraphic />

                    <div className="space-y-4 mt-8">
                        {contactInfo.map(({ icon: Icon, label, value, href }, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                className="flex items-center gap-4 p-4 rounded-xl theme-card"
                            >
                                <div className="p-3 rounded-xl shrink-0"
                                    style={{ background: 'var(--accent-glow)', color: 'var(--accent-1)', border: '1px solid var(--card-border)' }}>
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <div className="text-xs uppercase tracking-widest font-semibold mb-0.5"
                                        style={{ color: 'var(--text-muted)' }}>{label}</div>
                                    {href ? (
                                        <a href={href} className="font-medium transition-colors"
                                            style={{ color: 'var(--text-secondary)' }}
                                            onMouseOver={e => e.currentTarget.style.color = 'var(--accent-1)'}
                                            onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >{value}</a>
                                    ) : (
                                        <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{value}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="theme-card p-8 md:p-10 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>

                        <AnimatePresence>
                            {isSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-3 p-4 rounded-xl mb-6 text-green-600"
                                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)' }}
                                >
                                    <CheckCircle size={20} />
                                    <span className="font-semibold">Message sent! I'll get back to you soon.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Your Name</label>
                                <input type="text" name="user_name" required placeholder="Your Name"
                                    style={inputStyle}
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    onFocus={e => { e.target.style.borderColor = 'var(--accent-1)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                    onBlur={e => { e.target.style.borderColor = 'var(--card-border)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Email Address</label>
                                <input type="email" name="user_email" required placeholder="you@example.com"
                                    style={inputStyle}
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    onFocus={e => { e.target.style.borderColor = 'var(--accent-1)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                    onBlur={e => { e.target.style.borderColor = 'var(--card-border)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Message</label>
                                <textarea name="message" rows={5} required
                                    placeholder="Tell me about your project or opportunity..."
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    onFocus={e => { e.target.style.borderColor = 'var(--accent-1)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                    onBlur={e => { e.target.style.borderColor = 'var(--card-border)'; e.target.style.boxShadow = 'none'; }}
                                />
                            </div>

                            <button type="submit" disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                                style={{
                                    background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                                    boxShadow: '0 4px 15px var(--accent-glow)'
                                }}
                            >
                                {isSubmitting ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><Send size={20} /> Send Message</>}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
