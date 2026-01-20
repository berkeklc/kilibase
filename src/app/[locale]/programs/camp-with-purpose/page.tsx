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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070")',
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
                            <span className="text-xl">⛺</span> Pillar Two
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            {t('pillars.camp.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed w-full">
                            {t('pillars.camp.description')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Happens */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center w-full mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Happens at Camp</h2>
                        <p className="text-lg text-gray-600">A transformative experience designed for growth and connection</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-mountain/10 flex items-center justify-center mb-6 text-mountain">
                                    <activity.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="section bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-5" />
                <div className="container relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The Basecamp Experience</h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                Set against the majestic backdrop of Mount Kilimanjaro, our basecamp offers a unique environment for reflection, learning, and connection.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Participants spend 2-3 days immersed in activities designed to inspire national responsibility and build leadership capabilities that extend far beyond the camp itself.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="h-[400px] bg-gradient-to-br from-mountain to-primary rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-black/20" />
                            <span className="text-9xl relative z-10 drop-shadow-lg">⛺</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-mountain relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-mountain-dark via-mountain to-primary-dark opacity-90" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Camp</h2>
                    <p className="text-xl text-white/90 mb-10 w-full mx-auto leading-relaxed">
                        Experience the transformative power of purpose-driven community.
                    </p>
                    <Link
                        href={`/${currentLocale}/get-involved`}
                        className="inline-flex items-center gap-2 bg-white text-mountain font-bold px-10 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
                    >
                        Register Now
                        <Users size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
}
