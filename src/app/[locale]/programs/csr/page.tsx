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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070")',
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
                            <span className="text-xl">🏢</span> Corporate Partnership
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

            {/* Intro */}
            <section className="section bg-white">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center  mx-auto mb-16"
                    >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <Building2 size={40} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                            {t('intro2')}
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Partner with Kili Basecamp to create genuine impact while building a culture of purpose within your organization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Why Partner */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('whyPartner')}</h2>
                            <div className="space-y-6">
                                {partnerReasons.map((reason, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                                            <reason.icon size={24} />
                                        </div>
                                        <span className="text-lg text-gray-700 font-medium">{reason.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Activities */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('activities')}</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {activities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 hover:bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
                                    >
                                        <div className="text-4xl mb-3">{activity.icon}</div>
                                        <p className="font-medium text-gray-800">{activity.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern.png')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-primary/20" />
                <div className="container relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Partner?</h2>
                    <p className="text-xl text-white/80 mb-10 w-full mx-auto leading-relaxed">
                        Join leading organizations making a real difference through Kili Basecamp.
                    </p>
                    <Link
                        href={`/${currentLocale}/contact`}
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary-light hover:shadow-2xl transition-all duration-300 text-lg shadow-lg shadow-primary/20"
                    >
                        {t('contactButton')}
                        <Handshake size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
}
