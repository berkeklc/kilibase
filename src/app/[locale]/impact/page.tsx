'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { Heart, Droplets, Users, MapPin, Building2, Globe, FileText, ArrowRight, TrendingUp } from 'lucide-react';

export default function ImpactPage() {
    const t = useTranslations('impactPage');

    const mainMetrics = [
        { icon: Heart, value: 6000, label: t('metrics.livesImpacted') + '+', color: 'text-blood', bg: 'bg-blood/10', border: 'border-blood/20' },
        { icon: Droplets, value: 2000, label: t('metrics.bloodCollected') + '+', color: 'text-secondary', bg: 'bg-secondary/10', border: 'border-secondary/20' },
        { icon: Users, value: 500, label: t('metrics.volunteersEngaged') + '+', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/20' },
        { icon: MapPin, value: 6, label: t('metrics.zonesActivated'), color: 'text-mountain', bg: 'bg-mountain/10', border: 'border-mountain/20' },
        { icon: Building2, value: 20, label: t('metrics.partnersJoined') + '+', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
        { icon: Globe, value: 25, label: t('metrics.communitiesReached'), color: 'text-sky', bg: 'bg-sky/10', border: 'border-sky/20' },
    ];

    const zoneData = [
        { zone: 'Kilimanjaro', units: 450, volunteers: 120, status: 'Active' },
        { zone: 'Arusha', units: 380, volunteers: 80, status: 'Active' },
        { zone: 'Manyara', units: 280, volunteers: 60, status: 'Expanding' },
        { zone: 'Tanga', units: 320, volunteers: 90, status: 'Active' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/img/tanzania-2042777_1920.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-50" />
                </div>

                <div className="container relative z-10 text-center px-4 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-bold tracking-widest uppercase mb-8">
                            <TrendingUp size={16} className="text-secondary" />
                            <span>Real Impact, Real Lives</span>
                        </div>
                        <h1 className="text-white mb-8 font-black tracking-tight leading-none drop-shadow-lg" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                            {t('title')}
                        </h1>
                        <p className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed mx-auto drop-shadow-md">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Metrics Grid */}
            <section className="relative -mt-32 pb-24 z-20 px-4">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainMetrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${metric.bg} ${metric.color} flex items-center justify-center mb-6 border ${metric.border} group-hover:scale-110 transition-transform`}>
                                    <metric.icon size={28} />
                                </div>
                                <div className={`text-5xl font-black ${metric.color} mb-2 tracking-tighter`}>
                                    <AnimatedCounter end={metric.value} />
                                </div>
                                <p className="text-gray-500 font-medium text-lg uppercase tracking-wide">{metric.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Feature Story */}
            <section className="py-24 bg-white">
                <div className="container px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 relative"
                        >
                            <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] rotate-3 transform translate-y-4" />
                            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                                    style={{ backgroundImage: "url('/img/masaka-5309791_1920.jpg')" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-10 text-white">
                                    <div className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">Success Story</div>
                                    <h3 className="text-3xl font-black mb-4">Aisha's Second Chance</h3>
                                    <p className="text-white/80">"Without the prompt availability of blood, I wouldn't be here to hold my daughter today."</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                                Beyond the Numbers: <span className="text-primary block">Changing Lives Daily</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Every statistic represents a heartbeat, a family, and a future preserved. Our impact isn't just measured in liters collected, but in the moments of joy, relief, and hope we help create across Tanzania.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Sustainable Growth</h4>
                                        <p className="text-gray-500">Consistently increasing collections by 25% year-over-year.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Community Driven</h4>
                                        <p className="text-gray-500">Local leaders empowering their own communities to take action.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zone Breakdown - Visual Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Regional Impact</h2>
                        <p className="text-lg text-gray-600 mx-auto leading-relaxed">
                            These activations will be implemented as a zonal program across key Northern and Coastal regions, including Tanga, Manyara, Arusha, and Kilimanjaro, creating early momentum, expanding outreach, and increasing blood collection before the main celebration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {zoneData.map((zone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-primary/30 transition-colors"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">{zone.zone}</h3>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${zone.status === 'Active'
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-amber-100 text-amber-700'
                                        }`}>
                                        {zone.status}
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-medium">Units Collected</span>
                                        <span className="text-gray-900 font-bold text-lg">{zone.units}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${(zone.units / 600) * 100}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                                        <span className="text-gray-500 text-sm">Volunteers</span>
                                        <span className="text-gray-700 font-semibold">{zone.volunteers}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reports Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-black text-gray-900 mb-12">Transparency & Reports</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
                        {['2026 Impact Report', '2025 Planning Report', 'Partnership Guide'].map((report, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer p-8 rounded-3xl bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:bg-white hover:shadow-xl transition-all"
                            >
                                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <FileText size={32} className="text-primary" />
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{report}</h4>
                                <div className="flex items-center justify-center text-primary font-bold text-sm">
                                    <span>Download PDF</span>
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
