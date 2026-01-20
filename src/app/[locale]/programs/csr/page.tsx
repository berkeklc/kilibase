'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Check, Building2, Users, TrendingUp, Shield, Handshake, Leaf, Droplets } from 'lucide-react';

export default function CSRPage() {
    const t = useTranslations('csr');
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const partnerReasons = [
        { icon: Users, text: 'Engage employees in volunteering' },
        { icon: Shield, text: 'Contribute to national health priorities' },
        { icon: TrendingUp, text: 'Strengthen organizational reputation' },
        { icon: Handshake, text: 'Demonstrate authentic social responsibility' },
    ];

    const activities = [
        { icon: '🏃', text: 'Team participation in Run for Life' },
        { icon: '👥', text: 'Corporate volunteer groups' },
        { icon: '❤️', text: 'Blood donation mobilization' },
        { icon: '🌱', text: 'Environmental responsibility actions' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(37, 37, 37, 0.95), rgba(26, 95, 74, 0.95)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070") center/cover',
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
                            🏢 Corporate Partnership
                        </span>
                        <h1 style={{ marginBottom: '1rem' }}>{t('pageTitle')}</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
                            {t('intro')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="section section-light">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
                    >
                        <Building2 size={60} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
                        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: '1rem' }}>
                            {t('intro2')}
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--color-gray-600)' }}>
                            Partner with Kili Basecamp to create genuine impact while building a culture of purpose within your organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ marginBottom: '1.5rem' }}>{t('whyPartner')}</h2>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {partnerReasons.map((reason, index) => (
                                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            background: 'var(--color-gray-100)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <reason.icon size={24} style={{ color: 'var(--color-primary)' }} />
                                        </div>
                                        <span style={{ fontSize: '1.1rem' }}>{reason.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ marginBottom: '1.5rem' }}>{t('activities')}</h2>
                            <div className="grid-2" style={{ gap: '1rem' }}>
                                {activities.map((activity, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            padding: '1.5rem',
                                            background: 'var(--color-gray-50)',
                                            borderRadius: 'var(--radius-lg)',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{activity.icon}</div>
                                        <p style={{ fontWeight: 500 }}>{activity.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: '5rem 0',
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
                textAlign: 'center',
                color: 'white',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Partner?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.125rem', opacity: 0.95 }}>
                            Join leading organizations making a real difference through Kili Basecamp.
                        </p>
                        <Link href={`/${currentLocale}/contact`} className="btn btn-white" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
                            {t('contactButton')}
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
