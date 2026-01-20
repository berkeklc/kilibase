'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Droplet, Heart, Clock, CheckCircle2, AlertCircle, Quote, ArrowRight, Share2, Info } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function GiveBloodPage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const crisisStats = currentLocale === 'sw' ? [
        { number: '40%', text: 'ya hospitali zinakabiliwa na upungufu mkubwa wa damu', icon: <AlertCircle className="text-red-500" /> },
        { number: '1%', text: 'tu ya Watanzania wanatoa damu mara kwa mara', icon: <Info className="text-blue-500" /> },
        { number: '450ml', text: 'inaweza kuokoa maisha matatu', icon: <Heart className="text-pink-500" /> },
    ] : [
        { number: '40%', text: 'of Tanzanian hospitals face critical blood shortages', icon: <AlertCircle className="text-red-500" /> },
        { number: '1%', text: 'of the population donates blood regularly', icon: <Info className="text-blue-500" /> },
        { number: '450ml', text: 'of blood can save up to three lives', icon: <Heart className="text-pink-500" /> },
    ];

    const process = currentLocale === 'sw' ? [
        { step: 1, title: 'Usajili', description: 'Jaza fomu fupi na upimwe afya yako', time: '5 dak', icon: <Clock size={20} /> },
        { step: 2, title: 'Utoaji Damu', description: 'Taratibu salama na ya haraka', time: '10-15 dak', icon: <Droplet /> },
        { step: 3, title: 'Kupumzika', description: 'Kupata vinywaji na vitafunio', time: '10 dak', icon: <CheckCircle2 size={20} /> },
        { step: 4, title: 'Athari', description: 'Damu yako itasaidia wagonjwa wanaohitaji', time: 'Saa 24', icon: <Heart size={20} /> },
    ] : [
        { step: 1, title: 'Registration', description: 'Quick health screening and form', time: '5 min', icon: <Clock size={20} /> },
        { step: 2, title: 'Donation', description: 'Safe and comfortable process', time: '10-15 min', icon: <Droplet /> },
        { step: 3, title: 'Recovery', description: 'Rest with refreshments provided', time: '10 min', icon: <CheckCircle2 size={20} /> },
        { step: 4, title: 'Impact', description: 'Your blood helps patients in need', time: '24 hrs', icon: <Heart size={20} /> },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/img/masaka-5309791_1920.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                    <div className="absolute inset-0 bg-blood/20 mix-blend-multiply" />
                </div>

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                            {currentLocale === 'sw' ? 'Msaada wa Dharura' : 'Urgent Need'}
                        </div>

                        <h1 className="text-white mb-6 font-black tracking-tighter leading-[0.9] mx-auto" style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}>
                            {t('pillars.blood.title')}
                        </h1>

                        <p className="text-white/90 text-xl md:text-2xl mx-auto font-medium leading-relaxed mb-12">
                            {currentLocale === 'sw'
                                ? 'Kila siku, wagonjwa Tanzania wanakufa kwa kukosa damu. Unaweza kuwa shujaa wa mtu leo.'
                                : 'Every day, patients in Tanzania lose their lives due to preventable blood shortages. You can be someone\'s hero today.'}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href={`/${currentLocale}/get-involved`} className="group flex items-center gap-3 px-10 py-5 rounded-full bg-blood text-white font-black text-xl hover:scale-105 transition-all shadow-2xl">
                                {currentLocale === 'sw' ? 'Toa Damu Leo' : 'Donate Blood Now'}
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="flex items-center gap-2 text-white font-bold hover:text-white/80 transition-colors">
                                <Share2 size={20} />
                                {currentLocale === 'sw' ? 'Shiriki Kampeni' : 'Share Campaign'}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Progress Bar (Visual) */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-4">
                    <div className="flex justify-between text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
                        <span>Current Reserve</span>
                        <span>42% of Goal</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-md border border-white/10">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '42%' }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-blood"
                        />
                    </div>
                </div>
            </section>

            {/* Live Stats Strip */}
            <section className="bg-white border-b border-gray-100 py-10">
                <div className="container px-4">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-24">
                        <div className="text-center">
                            <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1">
                                <AnimatedCounter end={1240} />
                            </div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Units Collected</div>
                        </div>
                        <div className="w-px h-12 bg-gray-100 hidden md:block" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-blood tracking-tighter mb-1">
                                <AnimatedCounter end={2000} />
                            </div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Target Units</div>
                        </div>
                        <div className="w-px h-12 bg-gray-100 hidden md:block" />
                        <div className="text-center">
                            <div className="text-4xl font-black text-gray-900 tracking-tighter mb-1">
                                <AnimatedCounter end={85} />%
                            </div>
                            <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Hospital Coverage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Crisis Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            {currentLocale === 'sw' ? 'Hali ya Dharura' : 'The Urgent Reality'}
                        </h2>
                        <p className="text-lg text-gray-600 font-medium leading-relaxed">
                            While the need for blood is constant, the supply in Tanzania is critically low. Every donation matters to bridge this gap.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mx-auto">
                        {crisisStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 group-hover:bg-red-50 transition-colors">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">{stat.number}</div>
                                <div className="text-gray-600 font-medium leading-relaxed">{stat.text}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Story / Quote */}
            <section className="py-24">
                <div className="container px-4">
                    <div className="relative rounded-[3rem] bg-gray-900 p-8 md:p-20 overflow-hidden text-center isolate">
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(196,60,80,0.4),transparent_70%)]" />
                        </div>

                        <div className="relative z-10 mx-auto">
                            <Quote className="mx-auto text-blood mb-8" size={64} fill="currentColor" />
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight italic drop-shadow-sm">
                                "{currentLocale === 'sw'
                                    ? 'Damu haiwezi kutengenezwa kiwandani. Inaweza kutoka kwa mtu kama wewe tu.'
                                    : 'Blood cannot be manufactured. It is the most precious gift one human can give to another.'}"
                            </h2>
                            <div className="flex flex-col items-center gap-4">

                                <div>
                                    <div className="text-white font-bold text-lg drop-shadow-md">Dr. Maria Sokoine</div>
                                    <div className="text-white/80 text-sm font-medium uppercase tracking-widest">National Blood Transfusion Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Process */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            {currentLocale === 'sw' ? 'Mchakato Rahisi' : 'A Simple 4-Step Process'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-auto">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center"
                            >
                                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-blood text-white flex items-center justify-center font-black text-lg shadow-lg">
                                    {item.step}
                                </div>
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 text-blood">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm font-medium mb-4 flex-1">{item.description}</p>
                                <div className="px-4 py-2 rounded-xl bg-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                                    {item.time}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-blood relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
                <div className="container relative z-10 px-4 text-center">
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                        {currentLocale === 'sw' ? 'Jiunge na Mashujaa' : 'Become a Lifetime Hero'}
                    </h2>
                    <p className="text-white/80 text-xl font-medium mb-12 mx-auto leading-relaxed">
                        Donating blood is one of the most selfless acts you can perform. Your 15 minutes can grant someone a lifetime of birthdays.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href={`/${currentLocale}/get-involved`} className="px-12 py-6 rounded-full bg-white text-blood font-black text-2xl hover:scale-105 transition-all shadow-2xl">
                            {currentLocale === 'sw' ? 'Jisajili Sasa' : 'Register to Donate'}
                        </Link>
                        <Link href={`/${currentLocale}/contact`} className="px-12 py-6 rounded-full border-2 border-white/20 text-white font-black text-2xl hover:bg-white/10 transition-all">
                            {currentLocale === 'sw' ? 'Wasiliana Nasi' : 'Ask a Question'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
