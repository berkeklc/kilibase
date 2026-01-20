'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Building2, Heart, Landmark, Newspaper, GraduationCap, Briefcase } from 'lucide-react';

export default function PartnersPage() {
    const t = useTranslations('partners');

    const partnerCategories = [
        {
            title: 'Government',
            icon: Landmark,
            color: 'var(--color-primary)',
            partners: ['Ministry of Health', 'Regional Administration', 'Sports Council', 'Youth Development'],
        },
        {
            title: 'Hospitals & Health',
            icon: Heart,
            color: 'var(--color-blood)',
            partners: ['Kilimanjaro Christian Medical Centre', 'Muhimbili National Hospital', 'Regional Blood Banks', 'Red Cross Tanzania'],
        },
        {
            title: 'Corporates',
            icon: Briefcase,
            color: 'var(--color-secondary)',
            partners: ['Major Corporate Sponsor', 'Banking Partner', 'Telecommunications', 'Hospitality Partners'],
        },
        {
            title: 'NGOs',
            icon: Heart,
            color: 'var(--color-mountain)',
            partners: ['Health NGOs', 'Youth Development Organizations', 'Environmental Groups', 'Community Organizations'],
        },
        {
            title: 'Media',
            icon: Newspaper,
            color: 'var(--color-accent)',
            partners: ['National TV', 'Radio Partners', 'Print Media', 'Digital Platforms'],
        },
        {
            title: 'Education',
            icon: GraduationCap,
            color: 'var(--color-primary-light)',
            partners: ['Universities', 'Secondary Schools', 'Vocational Institutes', 'Student Organizations'],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(26, 95, 74, 0.95), rgba(74, 111, 165, 0.9)), url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070") center/cover',
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

            {/* Partner Categories */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '2rem' }}>
                        {partnerCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{ borderTop: `4px solid ${category.color}` }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--color-gray-100)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <category.icon size={24} style={{ color: category.color }} />
                                    </div>
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="grid-2" style={{ gap: '0.75rem' }}>
                                    {category.partners.map((partner, pIndex) => (
                                        <div
                                            key={pIndex}
                                            className="partner-logo"
                                            style={{ minHeight: '60px', fontSize: '0.9rem' }}
                                        >
                                            {partner}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA */}
            <section style={{
                padding: '5rem 0',
                background: 'linear-gradient(135deg, var(--color-gray-900), var(--color-gray-800))',
                textAlign: 'center',
                color: 'white',
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Building2 size={50} style={{ marginBottom: '1rem', opacity: 0.8 }} />
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Become a Partner</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                            Join our network of partners making a difference in Tanzania.
                            There are many ways to contribute to the Kili Basecamp movement.
                        </p>
                        <a href="/contact" className="btn btn-secondary">
                            Contact Partnership Team
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
