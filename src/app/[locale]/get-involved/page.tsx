'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Calendar, HandHeart, Award, Building2, CheckCircle } from 'lucide-react';

export default function GetInvolvedPage() {
    const t = useTranslations('getInvolved');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        type: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const involvementTypes = [
        { id: 'participant', icon: Users, label: t('participant'), description: 'Join runs and basecamp activities' },
        { id: 'volunteer', icon: Heart, label: t('volunteer'), description: 'Help organize and support events' },
        { id: 'fellowship', icon: Award, label: t('fellowship'), description: 'Apply for the leadership program' },
        { id: 'partner', icon: Building2, label: t('partner'), description: 'Become an organizational partner' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070")',
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
                            <HandHeart size={16} />
                            Get Involved
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

            {/* Involvement Options */}
            <section className="section section-light">
                <div className="container">
                    <div className="grid-4">
                        {involvementTypes.map((type, index) => (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setFormData({ ...formData, type: type.id })}
                                style={{
                                    padding: '2rem 1.5rem',
                                    background: formData.type === type.id ? 'var(--color-primary)' : 'white',
                                    color: formData.type === type.id ? 'white' : 'inherit',
                                    borderRadius: 'var(--radius-xl)',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)',
                                    transition: 'all 0.3s',
                                    border: formData.type === type.id ? 'none' : '2px solid transparent',
                                }}
                                className="involvement-option"
                            >
                                <type.icon size={40} style={{ marginBottom: '1rem', color: formData.type === type.id ? 'white' : 'var(--color-primary)' }} />
                                <h4 style={{ marginBottom: '0.5rem', color: formData.type === type.id ? 'white' : 'var(--color-gray-900)' }}>{type.label}</h4>
                                <p style={{ fontSize: '0.875rem', color: formData.type === type.id ? 'rgba(255,255,255,0.9)' : 'var(--color-gray-500)' }}>
                                    {type.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <div className="section-title">
                            <h2>Application Form</h2>
                            <p>Fill in your details and we'll get back to you soon</p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="message-success"
                                style={{ textAlign: 'center', padding: '3rem' }}
                            >
                                <CheckCircle size={60} style={{ color: '#166534', marginBottom: '1rem' }} />
                                <h3 style={{ marginBottom: '1rem', color: '#166534' }}>Application Submitted!</h3>
                                <p>{t('form.success')}</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                onSubmit={handleSubmit}
                                style={{
                                    background: 'white',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-xl)',
                                    boxShadow: 'var(--shadow-lg)',
                                }}
                            >
                                <div className="form-group">
                                    <label className="form-label" htmlFor="name">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">{t('form.email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">{t('form.phone')}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="type">{t('form.type')}</label>
                                    <select
                                        id="type"
                                        name="type"
                                        className="form-select"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select an option</option>
                                        {involvementTypes.map((type) => (
                                            <option key={type.id} value={type.id}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="message">{t('form.message')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
                                    {t('form.submit')}
                                </button>
                            </motion.form>
                        )}
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .involvement-option:hover {
          transform: translateY(-4px);
        }
      `}</style>
        </>
    );
}
