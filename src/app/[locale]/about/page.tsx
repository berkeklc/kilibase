'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Target, Heart, Users, Globe, Star, Mountain, Award, Shield } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function AboutPage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const values = currentLocale === 'sw' ? [
        { icon: <Target size={32} />, title: 'Kusudi', description: 'Kila hatua inalenga matokeo yanayoathiri jamii na taifa.' },
        { icon: <Heart size={32} />, title: 'Uhai Kwanza', description: 'Utoaji damu na afya ni msingi wa kila tunachofanya.' },
        { icon: <Users size={32} />, title: 'Jamii', description: 'Tunaamini nguvu ya hatua ya pamoja na uwajibikaji wa pamoja.' },
        { icon: <Globe size={32} />, title: 'Ujumuishaji', description: 'Wazi kwa wote wanaotaka kuchangia, bila kujali asili.' },
        { icon: <Star size={32} />, title: 'Ubora', description: 'Tunalenga viwango vya juu katika athari na utekelezaji.' },
        { icon: <Mountain size={32} />, title: 'Ustahimilivu', description: 'Kama Kilimanjaro, tunasimama imara katika ahadi yetu.' },
    ] : [
        { icon: <Target size={32} />, title: 'Purpose-Driven', description: 'Every action ties to meaningful community outcomes.' },
        { icon: <Heart size={32} />, title: 'Life First', description: 'Blood donation and health are at our core.' },
        { icon: <Users size={32} />, title: 'Community', description: 'We believe in collective action and shared responsibility.' },
        { icon: <Globe size={32} />, title: 'Inclusivity', description: 'Open to all who wish to contribute.' },
        { icon: <Star size={32} />, title: 'Excellence', description: 'We strive for the highest standards in impact.' },
        { icon: <Mountain size={32} />, title: 'Resilience', description: 'Like Kilimanjaro, we stand firm in our commitment.' },
    ];

    const timeline = currentLocale === 'sw' ? [
        { year: '2024', title: 'Maono', description: 'Dhana ya Kili Basecamp ilizaliwa kutoka kwa ndoto ya kubadilisha msimu wa Kilimanjaro Marathon kuwa jukwaa la athari ya kitaifa.' },
        { year: '2025', title: 'Kujenga Msingi', description: 'Ushirikiano ulianzishwa na serikali, hospitali, na mashirika ya kiraia nchini Tanzania.' },
        { year: '2026', title: 'Harakati Inaanza', description: 'Kili Basecamp Experience ya kwanza rasmi inaanza, ikiunganisha maelfu kwa afya, kusudi, na uwajibikaji wa kitaifa.' },
    ] : [
        { year: '2024', title: 'The Vision', description: 'Kili Basecamp concept was born from the vision of transforming the Kilimanjaro Marathon season into a platform for national impact.' },
        { year: '2025', title: 'Building Foundations', description: 'Partnerships established with government, hospitals, and civil society organizations across Tanzania.' },
        { year: '2026', title: 'The Movement Begins', description: 'First official Kili Basecamp Experience launches, uniting thousands for health, purpose, and national responsibility.' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '6rem',
                paddingBottom: '3rem',
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: "url('/img/elephant-babies-278525_1920.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(15, 41, 32, 0.7), rgba(15, 41, 32, 0.9))',
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255,255,255,0.15)',
                            borderRadius: '100px',
                            fontSize: '0.875rem',
                            marginBottom: '1.5rem',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                        }}>
                            <Mountain size={16} />
                            {currentLocale === 'sw' ? 'Hadithi Yetu' : 'Our Story'}
                        </span>
                        <h1 style={{
                            marginBottom: '1rem',
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                        }}>
                            {currentLocale === 'sw' ? 'Kuhusu Kili Basecamp' : 'About Kili Basecamp'}
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            color: '#ffffff',
                            lineHeight: 1.6,
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        }}>
                            {currentLocale === 'sw'
                                ? 'Harakati ya uhai, uwajibikaji, na kusudi la pamoja — iliyoanzishwa chini ya Mlima Kilimanjaro.'
                                : 'A movement for life, responsibility, and collective purpose — rooted at the foot of Kilimanjaro.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="section">
                <div className="container">
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '0.375rem 0.875rem',
                                background: 'var(--color-gray-100)',
                                color: 'var(--text-muted)',
                                borderRadius: '100px',
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                                {currentLocale === 'sw' ? 'Maono & Kusudi' : 'Vision & Purpose'}
                            </span>
                            <h2 style={{ marginBottom: '1.5rem' }}>{t('about.title')}</h2>
                            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                {t('about.description')}
                            </p>
                            <p style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                                {currentLocale === 'sw'
                                    ? 'Tunawaleta pamoja vijana, wataalamu, taasisi, na jamii kuunda athari inayopimika kupitia afya, ustawi, na huduma ya kitaifa.'
                                    : 'We bring together youth, professionals, institutions, and communities to create measurable impact through health, wellness, and national service.'}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section section-light">
                <div className="container">
                    <div className="section-title">
                        <h2>{currentLocale === 'sw' ? 'Maadili Yetu' : 'Our Values'}</h2>
                        <p>{currentLocale === 'sw' ? 'Kanuni zinazotuongoza katika kila tunachofanya' : 'The principles that guide everything we do'}</p>
                    </div>

                    <div className="grid-3">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="feature-card"
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: 'var(--radius-xl)',
                                    background: 'var(--color-gray-100)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto var(--spacing-md)',
                                    color: 'var(--color-primary)'
                                }}>
                                    {value.icon}
                                </div>
                                <h4 style={{ marginBottom: '0.5rem' }}>{value.title}</h4>
                                <p style={{ fontSize: '0.9375rem' }}>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-title">
                        <h2>{currentLocale === 'sw' ? 'Safari Yetu' : 'Our Journey'}</h2>
                        <p>{currentLocale === 'sw' ? 'Kutoka maono hadi harakati' : 'From vision to movement'}</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div style={{
                            position: 'absolute',
                            left: '24px',
                            top: '20px',
                            bottom: '20px',
                            width: '2px',
                            background: 'repeating-linear-gradient(to bottom, var(--color-primary) 0, var(--color-primary) 8px, transparent 8px, transparent 16px)',
                            opacity: 0.3
                        }} />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    marginBottom: '3rem',
                                    position: 'relative',
                                }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700',
                                    fontSize: '0.9rem',
                                    flexShrink: 0,
                                    boxShadow: '0 0 0 6px white, 0 4px 12px rgba(0,0,0,0.1)',
                                    zIndex: 1
                                }}>
                                    {item.year}
                                </div>
                                <div style={{
                                    paddingTop: '0.5rem',
                                    paddingBottom: '2rem',
                                    borderBottom: index !== timeline.length - 1 ? '1px solid var(--color-gray-100)' : 'none'
                                }}>
                                    <h4 style={{
                                        marginBottom: '0.5rem',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-primary-dark)'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--color-gray-600)',
                                        lineHeight: 1.6
                                    }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Preview Section */}
            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background Pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }} />

                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div style={{ maxWidth: '400px', textAlign: 'left' }}>
                            <h2 style={{
                                color: 'white',
                                marginBottom: '1rem',
                                fontSize: '2.5rem'
                            }}>
                                {currentLocale === 'sw' ? 'Athari Tunayotarajia' : 'Our Impact Goals'}
                            </h2>
                            <p style={{ opacity: 0.9, fontSize: '1.125rem', lineHeight: 1.6 }}>
                                {currentLocale === 'sw'
                                    ? 'Malengo yetu ya 2026 yanaonyesha dhamira yetu ya kubadilisha afya ya jamii na kuhamasisha kizazi kipya.'
                                    : 'Our 2026 targets reflect our commitment to transforming community health and inspiring a new generation.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                            {[
                                { value: 6000, label: currentLocale === 'sw' ? 'Maisha Yaliyoguswa' : 'Lives Impacted', icon: Heart },
                                { value: 2000, label: currentLocale === 'sw' ? 'Vipimo vya Damu' : 'Blood Units', icon: Award },
                                { value: 500, label: currentLocale === 'sw' ? 'Wajitolea' : 'Volunteers', icon: Users },
                                { value: 6, label: currentLocale === 'sw' ? 'Kanda' : 'Regions', icon: Globe },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{ textAlign: 'left' }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        marginBottom: '0.25rem',
                                        opacity: 0.8,
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        fontWeight: 600
                                    }}>
                                        <stat.icon size={18} />
                                        {stat.label}
                                    </div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                                        <AnimatedCounter end={stat.value} />
                                        {index < 3 ? '+' : ''}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SDG Alignment */}
            <section className="section section-dark">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
                    >
                        <h2 style={{ marginBottom: '1.25rem' }}>
                            {currentLocale === 'sw' ? 'Malengo ya Maendeleo Endelevu' : 'SDG Alignment'}
                        </h2>
                        <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                            {currentLocale === 'sw'
                                ? 'Kili Basecamp inachangia moja kwa moja vipaumbele vya afya vya Tanzania na Malengo ya Maendeleo Endelevu ya Umoja wa Mataifa.'
                                : 'Kili Basecamp directly contributes to Tanzania\'s national health priorities and the UN Sustainable Development Goals.'}
                        </p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap',
                        }}>
                            {['SDG 3', 'SDG 4', 'SDG 17'].map((sdg, index) => (
                                <div
                                    key={index}
                                    style={{
                                        padding: '0.75rem 1.5rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-lg)',
                                        fontWeight: 600,
                                        fontSize: '0.9375rem',
                                    }}
                                >
                                    {sdg}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
