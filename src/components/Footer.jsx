import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        const toggleVisibility = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <footer className="py-12 relative border-t" style={{ background: 'var(--bg-surface)', borderColor: 'var(--card-border)' }}>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="flex flex-col items-center justify-center gap-2 mb-4 text-sm font-medium tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    <span>Designed &amp; Engineered by Sanjeeb Kumar</span>
                    <span className="flex items-center gap-1 text-xs opacity-80">
                        Built with
                        <Heart size={14} className="fill-current ml-1" style={{ color: 'red' }} />
                    </span>
                </p>

                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            onClick={scrollToTop}
                            className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all z-40 text-white"
                            style={{ background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))' }}
                        >
                            <ArrowUp size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </footer>
    );
};

export default Footer;
