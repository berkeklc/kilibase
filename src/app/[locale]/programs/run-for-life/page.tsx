'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Users, Trophy, MapPin, Calendar, Clock } from 'lucide-react';

export default function RunForLifePage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const benefits = [
        { icon: Heart, title: 'Health & Wellness', description: 'Improve cardiovascular health and overall fitness' },
        { icon: Users, title: 'Community Unity', description: 'Run alongside people from all walks of life' },
        { icon: Trophy, title: 'Personal Achievement', description: 'Challenge yourself and celebrate your progress' },
    ];

    const zones = [
        { name: 'Kilimanjaro Zone', date: 'Feb 20, 2026', participants: '500+' },
        { name: 'Arusha Zone', date: 'Feb 21, 2026', participants: '400+' },
        { name: 'Dar es Salaam Zone', date: 'Feb 22, 2026', participants: '600+' },
        { name: 'Mwanza Zone', date: 'Feb 23, 2026', participants: '350+' },
    ];

    return (
        <>
            {/* Hero */}
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070")',
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
                        className="w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
                        >
                            <span className="text-xl">🏃</span> Pillar One
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {t('pillars.run.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed w-full">
                            {t('pillars.run.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center w-full mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Run for Life?</h2>
                        <p className="text-lg text-gray-600">More than a race — it's a commitment to health and unity</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                    <benefit.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zonal Runs */}
            <section className="section bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-5" />
                <div className="container relative z-10">
                    <div className="text-center w-full mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zonal Runs</h2>
                        <p className="text-gray-400 text-lg">Join a run in your zone</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 w-full mx-auto">
                        {zones.map((zone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                                    <MapPin size={28} className="text-white" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-white mb-2">{zone.name}</h4>
                                    <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                                        <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
                                            <Calendar size={14} className="text-primary-light" /> {zone.date}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded-md">
                                            <Users size={14} className="text-primary-light" /> {zone.participants}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light opacity-90" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Run?</h2>
                    <p className="text-xl text-white/90 mb-10 w-full mx-auto leading-relaxed">
                        Register now and be part of the movement for health and unity.
                    </p>
                    <Link
                        href={`/${currentLocale}/get-involved`}
                        className="inline-flex items-center gap-2 bg-white text-primary font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                    >
                        Register Now
                        <Clock size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
}
