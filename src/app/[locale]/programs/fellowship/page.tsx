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
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(244, 162, 89, 0.95), rgba(201, 85, 62, 0.95)), url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070") center/cover',
                textAlign: 'center',
                color: 'white',
                paddingTop: '6rem',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.25rem',
                            background: 'rgba(255,255,255,0.2)',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            marginBottom: '1.5rem',
                        }}>
                            🎓 Leadership Program
                        </span>
                        <h1 style={{ marginBottom: '1rem' }}>{t('pageTitle')}</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
                            {t('intro')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '1.125rem',
                            textAlign: 'center',
                            maxWidth: '800px',
                            margin: '0 auto 4rem',
                            lineHeight: 1.8,
                        }}
                    >
                        {t('intro2')}
                    </motion.p>

                    <div className="grid-3" style={{ marginBottom: '4rem' }}>
                        {/* What Fellows Do */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card"
                            style={{ borderTop: '4px solid var(--color-accent)' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>{t('whatFellowsDo')}</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {doItems.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <item.icon size={20} style={{ color: 'var(--color-accent)', marginTop: '2px' }} />
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
                            className="card"
                            style={{ borderTop: '4px solid var(--color-primary)' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>{t('whoCanApply')}</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {applyItems.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <Check size={20} style={{ color: 'var(--color-primary)', marginTop: '2px' }} />
                                        <span>{item}</span>
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
                            className="card"
                            style={{ borderTop: '4px solid var(--color-secondary)' }}
                        >
                            <h3 style={{ marginBottom: '1.5rem' }}>{t('whatFellowsGain')}</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {gainItems.map((item, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                        <Award size={20} style={{ color: 'var(--color-secondary)', marginTop: '2px' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center' }}
                    >
                        <Link href={`/${currentLocale}/get-involved`} className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                            {t('applyButton')}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
