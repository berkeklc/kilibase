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
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(26, 95, 74, 0.95), rgba(42, 125, 98, 0.9)), url("https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070") center/cover',
                textAlign: 'center',
                color: 'white',
                paddingTop: '6rem',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            marginBottom: '1.5rem',
                        }}>
                            🏃 Pillar One
                        </span>
                        <h1>{t('pillars.run.title')}</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto 0', opacity: 0.95 }}>
                            {t('pillars.run.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Run for Life?</h2>
                        <p>More than a race — it's a commitment to health and unity</p>
                    </div>
                    <div className="grid-3">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{ textAlign: 'center', borderTop: '4px solid var(--color-primary)' }}
                            >
                                <benefit.icon size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>{benefit.title}</h4>
                                <p>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zonal Runs */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <h2>Zonal Runs</h2>
                        <p>Join a run in your zone</p>
                    </div>
                    <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {zones.map((zone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card"
                                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <MapPin size={24} color="white" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4>{zone.name}</h4>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', color: 'var(--color-gray-500)', fontSize: '0.875rem' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Calendar size={14} /> {zone.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                            <Users size={14} /> {zone.participants}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Run?</h2>
                    <p style={{ maxWidth: '500px', margin: '0 auto 2rem', opacity: 0.95 }}>
                        Register now and be part of the movement for health and unity.
                    </p>
                    <Link href={`/${currentLocale}/get-involved`} className="btn btn-white">
                        Register Now
                    </Link>
                </div>
            </section>
        </>
    );
}
