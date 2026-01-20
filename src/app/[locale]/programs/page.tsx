'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Tent, Droplet, GraduationCap, Building2, Heart, Users, Target, ShieldCheck } from 'lucide-react';

export default function ProgramsPage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const programs = [
        {
            slug: 'run-for-life',
            icon: <Activity size={32} />,
            title: t('pillars.run.title'),
            description: t('pillars.run.description'),
            details: currentLocale === 'sw' ? 'Mbio za jamii zinazojumuisha watu wote.' : 'Join inclusive community runs promoting health and unity.',
            color: 'var(--color-primary)',
            image: '/img/run-for-life-bg.jpg', // Placeholder for concept
            gradient: 'linear-gradient(135deg, #1e6b55 0%, #2a8a6d 100%)'
        },
        {
            slug: 'camp-with-purpose',
            icon: <Tent size={32} />,
            title: t('pillars.camp.title'),
            description: t('pillars.camp.description'),
            details: currentLocale === 'sw' ? 'Uongozi na mafunzo katika msingi weu.' : 'Participate in leadership sessions and fireside experiences.',
            color: 'var(--color-mountain)',
            gradient: 'linear-gradient(135deg, #5a7fa8 0%, #7eb8d8 100%)'
        },
        {
            slug: 'give-blood',
            icon: <Droplet size={32} />,
            title: t('pillars.blood.title'),
            description: t('pillars.blood.description'),
            details: currentLocale === 'sw' ? 'Kampeni ya kitaifa ya utoaji damu.' : 'Be part of our national blood donation campaign.',
            color: 'var(--color-blood)',
            gradient: 'linear-gradient(135deg, #c43c50 0%, #e8836e 100%)'
        },
        {
            slug: 'fellowship',
            icon: <GraduationCap size={32} />,
            title: t('programs.fellowship.title'),
            description: t('programs.fellowship.description'),
            details: currentLocale === 'sw' ? 'Mpango wa uongozi wa wiki 8.' : 'An 8-week leadership program for young ambassadors.',
            color: 'var(--color-accent)',
            gradient: 'linear-gradient(135deg, #e89f4c 0%, #f4b76e 100%)'
        },
        {
            slug: 'csr',
            icon: <Building2 size={32} />,
            title: t('programs.csr.title'),
            description: t('programs.csr.description'),
            details: currentLocale === 'sw' ? 'Ushiriki wa mashirika katika jamii.' : 'Platforms for corporations to engage in community service.',
            color: 'var(--color-secondary)',
            gradient: 'linear-gradient(135deg, #d4654e 0%, #e8836e 100%)'
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-105"
                        style={{ backgroundImage: "url('/img/sweep-2881581_1920.jpg')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-gray-50" />

                    {/* Abstract Shapes */}
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
                </div>

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6">
                            {currentLocale === 'sw' ? 'Programu Zetu' : 'Our Programs'}
                        </span>
                        <h1 className="text-white mb-6 font-black tracking-tight leading-none" style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)' }}>
                            Impact <span className="text-accent">Drives</span> Us
                        </h1>
                        <p className="text-white/90 text-xl md:text-2xl mx-auto font-medium leading-relaxed mb-8">
                            Five pillars of purposeful action designed to save lives, empower leaders, and transform communities across Tanzania.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-lg">
                                        <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="avatar" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-accent flex items-center justify-center text-white font-bold shadow-lg">
                                    +1k
                                </div>
                            </div>
                            <p className="text-white/80 text-sm font-semibold">
                                {currentLocale === 'sw' ? 'Jiunge na maelfu ya watu tayari wanashiriki' : 'Join thousands of people already making an impact'}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10" />
            </section>

            {/* Programs Section */}
            <section className="relative py-20 -mt-20 z-20">
                <div className="container px-4">
                    <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                        {programs.map((program, index) => (
                            <motion.div
                                key={program.slug}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/${currentLocale}/programs/${program.slug}`}
                                    className="group relative flex flex-col md:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
                                >
                                    {/* Accent Sidebar (Desktop) */}
                                    <div
                                        className="w-full md:w-4 h-2 md:h-auto"
                                        style={{ background: program.gradient }}
                                    />

                                    <div className="flex-1 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-14">
                                        {/* Icon Container */}
                                        <div
                                            className="relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner overflow-hidden bg-gray-50 border border-gray-100"
                                        >
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                                style={{ background: program.gradient }}
                                            />
                                            <div className="relative z-10 transition-colors duration-500" style={{ color: program.color }}>
                                                {program.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight group-hover:text-primary transition-colors">
                                                    {program.title}
                                                </h3>
                                            </div>
                                            <p className="text-lg md:text-xl text-gray-600 font-medium mb-8 leading-relaxed">
                                                {program.description}
                                            </p>

                                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                                                <span className="px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold flex items-center gap-2 group-hover:bg-white group-hover:shadow-sm transition-all">
                                                    <Target size={18} className="text-primary" />
                                                    {program.details}
                                                </span>
                                                <span className="px-5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold flex items-center gap-2 group-hover:bg-white group-hover:shadow-sm transition-all">
                                                    <ShieldCheck size={18} className="text-primary" />
                                                    Verified Impact
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action */}
                                        <div className="flex-shrink-0 pt-6 md:pt-0">
                                            <div
                                                className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 group-hover:gap-5 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1"
                                                style={{
                                                    background: program.gradient,
                                                    color: 'white'
                                                }}
                                            >
                                                {currentLocale === 'sw' ? 'Gundua' : 'Join Program'}
                                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover Backdrop Glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
                                        style={{ background: program.gradient }}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Quote / Stats Section */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="container px-4">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        {[
                            { icon: <Heart className="text-blood" />, label: 'Lives Saved', value: '50k+', color: 'text-blood' },
                            { icon: <Users className="text-primary" />, label: 'Volunteers', value: '12k+', color: 'text-primary' },
                            { icon: <Target className="text-accent" />, label: 'Communities', value: '25+', color: 'text-accent' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                                    {stat.icon}
                                </div>
                                <div className={`text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ / Bottom CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary z-0" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_20%_20%,_white_0%,_transparent_50%)]" />
                </div>

                <div className="container relative z-10 flex flex-col items-center justify-center w-full text-center px-4">
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight mx-auto drop-shadow-md">
                        {currentLocale === 'sw'
                            ? 'Bado hauna uhakika wa kuanzia?'
                            : 'Not sure where to start your journey?'}
                    </h2>
                    <p className="text-white/90 text-xl font-medium mb-12 mx-auto drop-shadow-sm">
                        {currentLocale === 'sw'
                            ? 'Timu yetu iko hapa kukuongoza kupata programu inayofaa malengo yako.'
                            : 'Our team is here to guide you toward the program that best fits your goals and availability.'}
                    </p>
                    <Link
                        href={`/${currentLocale}/contact`}
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-black text-xl hover:scale-105 transition-transform shadow-2xl"
                    >
                        {currentLocale === 'sw' ? 'Wasiliana Nasi' : 'Talk to an Advisor'}
                        <ArrowRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
