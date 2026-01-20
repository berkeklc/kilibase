'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Play, Image, Newspaper, Download } from 'lucide-react';

export default function MediaPage() {
    const t = useTranslations('mediaPage');

    const videos = [
        { title: 'Kili Basecamp: A Movement for Life', duration: '12:45', type: 'Documentary' },
        { title: 'Youth Fellowship Stories', duration: '8:30', type: 'Stories' },
        { title: 'The Power of Blood Donation', duration: '6:15', type: 'Impact' },
        { title: 'Running for Unity', duration: '5:20', type: 'Stories' },
        { title: 'Behind the Scenes', duration: '10:00', type: 'Documentary' },
        { title: 'Community Voices', duration: '7:45', type: 'Stories' },
    ];

    const pressItems = [
        { outlet: 'Daily News Tanzania', title: 'Kili Basecamp Launches National Blood Drive', date: 'Jan 2026' },
        { outlet: 'The Citizen', title: 'Youth Fellowship Program Empowers Young Leaders', date: 'Dec 2025' },
        { outlet: 'Mwananchi', title: 'Kilimanjaro Marathon Season Gets Purpose-Driven Boost', date: 'Nov 2025' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95), rgba(74, 111, 165, 0.9)), url("https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2070") center/cover',
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
                        <h1 style={{ marginBottom: '1rem' }}>{t('title')}</h1>
                        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', opacity: 0.95 }}>
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Documentary Series */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('documentary')}</h2>
                        <p>Watch the stories that define our movement</p>
                    </div>

                    <div className="grid-3">
                        {videos.map((video, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    borderRadius: 'var(--radius-xl)',
                                    overflow: 'hidden',
                                    background: 'white',
                                    boxShadow: 'var(--shadow-md)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s',
                                }}
                                className="video-card"
                            >
                                <div style={{
                                    aspectRatio: '16/9',
                                    background: 'linear-gradient(135deg, var(--color-gray-800), var(--color-gray-700))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Play size={24} fill="var(--color-secondary)" color="var(--color-secondary)" />
                                    </div>
                                    <span style={{
                                        position: 'absolute',
                                        bottom: '0.5rem',
                                        right: '0.5rem',
                                        background: 'rgba(0,0,0,0.7)',
                                        color: 'white',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.75rem',
                                    }}>
                                        {video.duration}
                                    </span>
                                </div>
                                <div style={{ padding: '1rem' }}>
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'var(--color-gray-100)',
                                        color: 'var(--color-gray-600)',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: 'var(--radius-sm)',
                                        fontSize: '0.75rem',
                                        marginBottom: '0.5rem',
                                    }}>
                                        {video.type}
                                    </span>
                                    <h4 style={{ fontSize: '1rem' }}>{video.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('gallery')}</h2>
                        <p>Moments that capture our impact</p>
                    </div>

                    <div className="grid-4">
                        {[...Array(8)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    aspectRatio: '1',
                                    background: `linear-gradient(135deg, hsl(${index * 40}, 60%, 50%), hsl(${index * 40 + 30}, 60%, 40%))`,
                                    borderRadius: 'var(--radius-lg)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s',
                                }}
                                className="gallery-item"
                            >
                                <Image size={32} color="rgba(255,255,255,0.5)" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Coverage */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('press')}</h2>
                        <p>Kili Basecamp in the news</p>
                    </div>

                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {pressItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    marginBottom: '1rem',
                                    cursor: 'pointer',
                                }}
                            >
                                <Newspaper size={32} style={{ color: 'var(--color-gray-400)' }} />
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 500 }}>
                                        {item.outlet}
                                    </span>
                                    <h4 style={{ marginTop: '0.25rem' }}>{item.title}</h4>
                                </div>
                                <span style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>{item.date}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="section section-gradient">
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Media Kit</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.95 }}>
                            Download our media kit for logos, photos, and brand guidelines.
                        </p>
                        <button className="btn btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={20} />
                            Download Media Kit
                        </button>
                    </motion.div>
                </div>
            </section>

            <style jsx global>{`
        .video-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }
        .gallery-item:hover {
          transform: scale(1.05);
        }
      `}</style>
        </>
    );
}
