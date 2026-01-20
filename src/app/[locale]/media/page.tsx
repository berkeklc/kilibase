'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Play, Image, Newspaper, Download } from 'lucide-react';

export default function MediaPage() {
    const t = useTranslations('mediaPage');

    const videos = [
        { title: 'Kili Basecamp: A Movement for Life', releaseDate: 'Feb 14, 2026', type: 'Documentary', upcoming: true },
        { title: 'Youth Fellowship Stories', releaseDate: 'Feb 21, 2026', type: 'Stories', upcoming: true },
        { title: 'The Power of Blood Donation', releaseDate: 'Feb 28, 2026', type: 'Impact', upcoming: true },
        { title: 'Running for Unity', releaseDate: 'Mar 7, 2026', type: 'Stories', upcoming: true },
        { title: 'Behind the Scenes', releaseDate: 'Mar 14, 2026', type: 'Documentary', upcoming: true },
        { title: 'Community Voices', releaseDate: 'Mar 23, 2026', type: 'Stories', upcoming: true },
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
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: '6rem',
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: "url('/img/mountain-3081356_1920.jpg')",

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
                        transition={{ duration: 0.8 }}
                        className="w-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
                        >
                            <Play size={16} />
                            Media Center
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed w-full">
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
                                    cursor: video.upcoming ? 'default' : 'pointer',
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
                                    {video.upcoming ? (
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(0,0,0,0.6)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backdropFilter: 'blur(2px)',
                                        }}>
                                            <div style={{
                                                padding: '0.5rem 1rem',
                                                background: 'rgba(255,255,255,0.1)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                borderRadius: '50px',
                                                color: 'white',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                marginBottom: '0.5rem',
                                            }}>
                                                Coming Soon
                                            </div>
                                            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
                                                {video.releaseDate}
                                            </div>
                                        </div>
                                    ) : (
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
                                    )}
                                </div>
                                <div style={{ padding: '1.5rem', borderBottom: '4px solid var(--color-primary)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            background: 'var(--color-gray-100)',
                                            color: 'var(--color-gray-600)',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                        }}>
                                            {video.type}
                                        </span>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-gray-500)' }}>
                                            {video.releaseDate}
                                        </span>
                                    </div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.4 }}>{video.title}</h4>
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
                        <h2 style={{ color: 'black', marginBottom: '1rem' }}>Media Kit</h2>
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
