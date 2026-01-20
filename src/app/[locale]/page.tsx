'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import {
    Mountain,
    Droplet,
    Tent,
    Activity,
    Heart,
    Users,
    Building2,
    GraduationCap,
    Landmark,
    Stethoscope,
    HandHeart,
    ArrowRight,
    ChevronRight,
    AlertCircle
} from 'lucide-react';

export default function HomePage() {
    const t = useTranslations();
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: "url('/img/mountain-3081356_1920.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }}>
                    {/* Gradient Overlay for Readability */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.8))',
                    }} />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.1))',
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ color: 'white', maxWidth: '800px' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '100px',
                                    fontSize: '0.875rem',
                                    marginBottom: '1.5rem',
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: 500,
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                            >
                                <Mountain size={16} />
                                Kilimanjaro 2026
                            </motion.div>

                            <h1 style={{
                                fontSize: 'clamp(3rem, 6vw, 5rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '1.5rem',
                                color: 'white',
                                letterSpacing: '-0.03em',
                                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                            }}>
                                Run for Life.<br />
                                Camp with Purpose.<br />
                                <span style={{ color: 'var(--color-blood)' }}>Give Blood.</span>
                            </h1>

                            <p style={{
                                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                                marginBottom: '2.5rem',
                                color: '#ffffff',
                                lineHeight: 1.6,
                                maxWidth: '650px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                            }}>
                                {t('hero.subtitle')} <span style={{ color: 'var(--color-secondary)', fontWeight: 800, textDecoration: 'underline', textUnderlineOffset: '4px' }}>save lives</span> and build a stronger community.
                            </p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                alignItems: 'center',
                            }}>
                                <Link
                                    href={`/${currentLocale}/get-involved`}
                                    className="btn btn-primary"
                                    style={{
                                        padding: '1rem 2rem',
                                        fontSize: '1.0625rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    {t('hero.cta1')}
                                    <ArrowRight size={20} />
                                </Link>
                                <Link
                                    href={`/${currentLocale}/about`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '1rem 2rem',
                                        background: 'rgba(255,255,255,0.1)',
                                        color: 'white',
                                        borderRadius: '0.75rem',
                                        fontWeight: 600,
                                        fontSize: '1.0625rem',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        transition: 'all 0.2s'
                                    }}
                                    className="hover:bg-white/20"
                                >
                                    {t('hero.cta2')}
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Blood Crisis Section */}
            <section style={{ padding: '6rem 0', background: 'var(--color-gray-50)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            color: 'var(--color-blood)',
                            fontSize: '0.875rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            background: 'rgba(196, 60, 80, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '100px',
                        }}>
                            <AlertCircle size={16} />
                            {currentLocale === 'sw' ? 'Tatizo la Afya' : 'Health Crisis'}
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            color: 'var(--color-gray-900)',
                            marginBottom: '1rem',
                            lineHeight: 1.2
                        }}>
                            {currentLocale === 'sw' ? 'Tanzania Inahitaji Damu' : 'Tanzania Needs Blood'}
                        </h2>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--color-gray-600)',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}>
                            {currentLocale === 'sw'
                                ? 'Kila siku, familia za Tanzania zinapoteza wapendwa wao kwa sababu ya upungufu wa damu. Hali hii inaweza kuzuilika.'
                                : 'Every day, Tanzanian families lose loved ones due to preventable blood shortages. This tragedy can be stopped.'}
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                        }}
                    >
                        {[
                            {
                                value: '40%',
                                label: currentLocale === 'sw'
                                    ? 'Hospitali zinakabiliwa na upungufu'
                                    : 'Hospitals face critical Shortages',
                                icon: <Building2 className="text-secondary" size={32} />,
                                color: 'var(--color-secondary)'
                            },
                            {
                                value: '1%',
                                label: currentLocale === 'sw'
                                    ? 'Ya Watanzania wanatoa damu'
                                    : 'Population donates regularly',
                                icon: <Users className="text-primary" size={32} />,
                                color: 'var(--color-primary)'
                            },
                            {
                                value: '3x',
                                label: currentLocale === 'sw'
                                    ? 'Maisha yanaokolewa kwa unit 1'
                                    : 'Lives saved by 1 donation',
                                icon: <Heart className="text-blood" size={32} />,
                                color: 'var(--color-blood)'
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="card"
                                style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '2.5rem 2rem',
                                }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: `color-mix(in srgb, ${stat.color} 10%, transparent)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: stat.color,
                                }}>
                                    {stat.icon}
                                </div>
                                <div style={{
                                    fontSize: '3.5rem',
                                    fontWeight: 800,
                                    color: stat.color,
                                    lineHeight: 1,
                                    marginBottom: '1rem',
                                }}>
                                    {stat.value}
                                </div>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-gray-600)',
                                    fontWeight: 500,
                                    maxWidth: '200px',
                                }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Impact Counters (Dark) */}
            <section style={{
                padding: '5rem 0',
                background: 'var(--color-gray-900)',
                color: 'white',
            }}>
                <div className="container">
                    <div className="grid-4" style={{ textAlign: 'center' }}>
                        {[
                            { value: 6000, label: t('impact.livesImpacted') + '+', icon: <Heart size={24} /> },
                            { value: 2000, label: t('impact.bloodUnits') + '+', icon: <Droplet size={24} /> },
                            { value: 500, label: t('impact.volunteers') + '+', icon: <Users size={24} /> },
                            { value: 6, label: t('impact.zones'), icon: <Landmark size={24} /> },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ padding: '1rem' }}
                            >
                                <div style={{
                                    display: 'inline-flex',
                                    marginBottom: '1.25rem',
                                    color: 'var(--color-primary-light)',
                                    opacity: 0.9
                                }}>
                                    {item.icon}
                                </div>
                                <div style={{
                                    fontSize: 'clamp(3rem, 5vw, 4rem)',
                                    fontWeight: 900,
                                    marginBottom: '0.75rem',
                                    background: 'linear-gradient(to bottom right, #ffffff 30%, #a5b4fc 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    fontFamily: 'var(--font-heading, sans-serif)',
                                    letterSpacing: '-0.03em',
                                    lineHeight: 1,
                                    filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.1))'
                                }}>
                                    <AnimatedCounter end={item.value} />
                                </div>
                                <div style={{
                                    color: 'var(--color-gray-400)',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em'
                                }}>
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontWeight: 800,
                                letterSpacing: '-0.02em',
                                fontSize: 'clamp(2rem, 4vw, 3rem)'
                            }}
                        >
                            {t('pillars.title')}
                        </motion.h2>
                    </div>

                    <div className="grid-3">
                        {[
                            {
                                icon: <Activity size={36} />,
                                title: t('pillars.run.title'),
                                desc: t('pillars.run.description'),
                                color: 'var(--color-primary)',
                                href: `/${currentLocale}/programs/run-for-life`
                            },
                            {
                                icon: <Tent size={36} />,
                                title: t('pillars.camp.title'),
                                desc: t('pillars.camp.description'),
                                color: 'var(--color-mountain)',
                                href: `/${currentLocale}/programs/camp-with-purpose`
                            },
                            {
                                icon: <Droplet size={36} />,
                                title: t('pillars.blood.title'),
                                desc: t('pillars.blood.description'),
                                color: 'var(--color-blood)',
                                href: `/${currentLocale}/programs/give-blood`
                            },
                        ].map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={pillar.href} className="feature-card" style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    height: '100%',
                                    textDecoration: 'none',
                                    background: 'white',
                                    borderRadius: '24px',
                                    padding: '2.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '24px',
                                        background: `color-mix(in srgb, ${pillar.color} 8%, transparent)`,
                                        color: pillar.color,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '2rem',
                                        transition: 'transform 0.3s ease',
                                    }}>
                                        {pillar.icon}
                                    </div>
                                    <h3 style={{
                                        marginBottom: '1rem',
                                        fontWeight: 800,
                                        fontSize: '1.5rem',
                                        color: 'var(--color-gray-900)'
                                    }}>
                                        {pillar.title}
                                    </h3>
                                    <p style={{
                                        flex: 1,
                                        marginBottom: '2rem',
                                        color: 'var(--color-gray-600)',
                                        lineHeight: 1.6,
                                        fontSize: '1.0625rem'
                                    }}>
                                        {pillar.desc}
                                    </p>
                                    <div style={{
                                        color: pillar.color,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '100px',
                                        background: `color-mix(in srgb, ${pillar.color} 5%, transparent)`,
                                    }}>
                                        Explore <ChevronRight size={18} />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section style={{
                padding: '6rem 0',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1e6b55 0%, #14503f 100%)' // Enforce dark green
            }}>
                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-20%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-title">
                        <h2 style={{
                            color: 'white',
                            fontWeight: 800,
                            fontSize: 'clamp(2rem, 4vw, 3rem)'
                        }}>
                            {t('programs.title')}
                        </h2>
                    </div>

                    <div className="grid-2">
                        {[
                            {
                                title: t('programs.fellowship.title'),
                                desc: t('programs.fellowship.description'),
                                icon: <GraduationCap size={40} />,
                                href: `/${currentLocale}/programs/fellowship`,
                                label: t('programs.fellowship.learnMore')
                            },
                            {
                                title: t('programs.csr.title'),
                                desc: t('programs.csr.description'),
                                icon: <Building2 size={40} />,
                                href: `/${currentLocale}/programs/csr`,
                                label: t('programs.csr.explore')
                            }
                        ].map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    borderRadius: '32px',
                                    padding: '3.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    marginBottom: '2rem',
                                }}>
                                    <div style={{
                                        padding: '1rem',
                                        background: 'white',
                                        borderRadius: '16px',
                                        color: '#1e6b55',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                    }}>
                                        {program.icon}
                                    </div>
                                    <h3 style={{
                                        color: 'white',
                                        margin: 0,
                                        fontSize: '2rem',
                                        fontWeight: 800,
                                        letterSpacing: '-0.02em'
                                    }}>
                                        {program.title}
                                    </h3>
                                </div>
                                <p style={{
                                    color: 'rgba(255,255,255,0.9)',
                                    marginBottom: '3rem',
                                    flex: 1,
                                    fontSize: '1.25rem',
                                    lineHeight: 1.6,
                                    fontWeight: 500,
                                }}>
                                    {program.desc}
                                </p>
                                <Link
                                    href={program.href}
                                    style={{
                                        alignSelf: 'flex-start',
                                        background: 'white',
                                        color: '#1e6b55',
                                        padding: '1rem 2.5rem',
                                        borderRadius: '100px',
                                        fontWeight: 700,
                                        fontSize: '1.0625rem',
                                        border: 'none',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        textDecoration: 'none',
                                        transition: 'transform 0.2s',
                                    }}
                                >
                                    {program.label} <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <h2>{t('partners.title')}</h2>
                        <p>{t('partners.subtitle')}</p>
                    </div>

                    <div className="grid-4">
                        {[
                            { name: 'Government', icon: <Landmark size={24} /> },
                            { name: 'Hospitals', icon: <Stethoscope size={24} /> },
                            { name: 'NGOs', icon: <HandHeart size={24} /> },
                            { name: 'Corporates', icon: <Building2 size={24} /> },
                        ].map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="partner-logo"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    padding: '2rem',
                                }}
                            >
                                <div style={{ color: 'var(--color-gray-400)' }}>
                                    {partner.icon}
                                </div>
                                <span style={{ fontWeight: 600 }}>{partner.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{
                padding: '6rem 0',
                background: 'var(--color-secondary)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{
                            color: 'white',
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            marginBottom: '1.5rem',
                        }}>
                            {currentLocale === 'sw' ? 'Tayari Kufanya Mabadiliko?' : 'Ready to Make an Impact?'}
                        </h2>
                        <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '1.25rem',
                            maxWidth: '600px',
                            margin: '0 auto 2.5rem',
                        }}>
                            {currentLocale === 'sw'
                                ? 'Jiunge na maelfu ya watu wanaofanya kazi kuokoa maisha Tanzania.'
                                : 'Join the national movement building a healthier, stronger Tanzania.'}
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link href={`/${currentLocale}/get-involved`} className="btn btn-white">
                                {currentLocale === 'sw' ? 'Shiriki Leo' : 'Get Involved Today'}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
