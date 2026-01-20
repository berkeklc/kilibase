'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, MessageCircle, Flame, Users, BookOpen, Mic } from 'lucide-react';

export default function CampWithPurposePage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const activities = [
        { icon: Mic, title: 'Inspiring Talks', description: 'Hear from leaders, changemakers, and experts across various fields' },
        { icon: BookOpen, title: 'Leadership Sessions', description: 'Develop practical skills for effective leadership and impact' },
        { icon: MessageCircle, title: 'Dialogue Circles', description: 'Engage in meaningful conversations about national priorities' },
        { icon: Flame, title: 'Fireside Experiences', description: 'Connect with fellow participants in intimate evening gatherings' },
        { icon: Lightbulb, title: 'Innovation Labs', description: 'Collaborate on solutions for community challenges' },
        { icon: Users, title: 'Networking', description: 'Build lasting connections with purpose-driven peers' },
    ];

    return (
        <>
            {/* Hero */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(74, 111, 165, 0.95), rgba(26, 95, 74, 0.9)), url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070") center/cover',
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
                            ⛺ Pillar Two
                        </span>
                        <h1>{t('pillars.camp.title')}</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto 0', opacity: 0.95 }}>
                            {t('pillars.camp.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Happens */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>What Happens at Camp</h2>
                        <p>A transformative experience designed for growth and connection</p>
                    </div>
                    <div className="grid-3">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{ textAlign: 'center', borderTop: '4px solid var(--color-mountain)' }}
                            >
                                <activity.icon size={40} style={{ color: 'var(--color-mountain)', marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>{activity.title}</h4>
                                <p>{activity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="section section-dark">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ marginBottom: '1.5rem' }}>The Basecamp Experience</h2>
                            <p style={{ marginBottom: '1rem', lineHeight: 1.8 }}>
                                Set against the majestic backdrop of Mount Kilimanjaro, our basecamp offers a unique environment for reflection, learning, and connection.
                            </p>
                            <p style={{ lineHeight: 1.8 }}>
                                Participants spend 2-3 days immersed in activities designed to inspire national responsibility and build leadership capabilities that extend far beyond the camp itself.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{
                                height: '350px',
                                background: 'linear-gradient(135deg, var(--color-mountain), var(--color-primary))',
                                borderRadius: 'var(--radius-xl)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                            }}
                        >
                            ⛺
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section section-gradient" style={{ background: 'linear-gradient(135deg, var(--color-mountain), var(--color-primary-dark))' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Join the Camp</h2>
                    <p style={{ maxWidth: '500px', margin: '0 auto 2rem', opacity: 0.95 }}>
                        Experience the transformative power of purpose-driven community.
                    </p>
                    <Link href={`/${currentLocale}/get-involved`} className="btn btn-white">
                        Register Now
                    </Link>
                </div>
            </section>
        </>
    );
}
