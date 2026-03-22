import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, icon: Icon, children, className = "" }) => {
    return (
        <section id={id} className={`py-24 lg:py-32 relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 md:mb-12 text-center max-w-3xl mx-auto"
                    >
                        {title && (
                            <div className="relative inline-block mb-4">
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    {Icon && <Icon className="text-[var(--accent-1)] w-8 h-8 md:w-10 md:h-10" />}
                                    <h2 className="section-title mb-0">
                                        {title}
                                    </h2>
                                </div>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80px" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
                                    className="h-1 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] rounded-full mx-auto mt-2 relative"
                                >
                                    <motion.div 
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -right-1 -top-1 w-3 h-3 bg-[var(--accent-1)] rounded-full blur-[2px]"
                                    />
                                </motion.div>
                            </div>
                        )}
                        {subtitle && (
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="section-subtitle mt-4"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </motion.div>
                )}

                {children}
            </div>

            {/* Decorative organic divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 opacity-[0.07] pointer-events-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(130%+1.3px)] h-[60px] md:h-[100px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{ fill: 'var(--accent-1)' }}></path>
                </svg>
            </div>
        </section>
    );
};

export default Section;
