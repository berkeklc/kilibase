'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Award, Users, Megaphone, BookOpen, Camera } from 'lucide-react';

export default function FellowshipPage() {
    const t = useTranslations('fellowship');
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const doItems = [
        { icon: Megaphone, text: 'Lead blood donation mobilization campaigns' },
        { icon: Users, text: 'Organize community awareness sessions' },
        { icon: Award, text: 'Represent Kili Basecamp in their institutions' },
        { icon: BookOpen, text: 'Participate in leadership and ethics sessions' },
        { icon: Camera, text: 'Contribute stories and impact reports' },
    ];

    const applyItems = [
        'Youth aged 18–30',
        'Students, young professionals, community leaders',
        'Passion for service and responsibility',
    ];

    const gainItems = [
        'National recognition',
        'Leadership experience',
        'Official certificate',
        'Network of purpose-driven peers',
        'Opportunity to be featured in media',
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '6rem',
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-50" />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
                        >
                            <span className="text-xl">🎓</span> Leadership Program
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {t('pageTitle')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed w-full">
                            {t('intro')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section bg-white">
                <div className="container">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-center  mx-auto mb-16 leading-relaxed text-gray-600 font-medium"
                    >
                        {t('intro2')}
                    </motion.p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* What Fellows Do */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                                    <Megaphone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('whatFellowsDo')}</h3>
                            </div>
                            <ul className="space-y-4">
                                {doItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                        <div className="mt-1 min-w-[5px] h-[5px] rounded-full bg-accent" />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Who Can Apply */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-primary/5 rounded-3xl p-8 border border-primary/10 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('whoCanApply')}</h3>
                            </div>
                            <ul className="space-y-4 relative z-10">
                                {applyItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                        <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* What Fellows Gain */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{t('whatFellowsGain')}</h3>
                            </div>
                            <ul className="space-y-4">
                                {gainItems.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-600">
                                        <div className="mt-1 min-w-[5px] h-[5px] rounded-full bg-secondary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-accent relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-dark via-accent to-accent-light opacity-90" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Lead?</h2>
                    <p className="text-xl text-white/90 mb-10 w-full mx-auto leading-relaxed">
                        Join the next cohort of changemakers.
                    </p>
                    <Link
                        href={`/${currentLocale}/get-involved`}
                        className="inline-flex items-center gap-2 bg-white text-accent font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                    >
                        {t('applyButton')}
                        <Award size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
}
