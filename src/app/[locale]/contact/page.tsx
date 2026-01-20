'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            setIsSubmitted(true);
        }, 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' },
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2070")',
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
                            <Mail size={16} />
                            Contact Us
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

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className="grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--color-gray-100)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <MapPin size={24} style={{ color: 'var(--color-primary)' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Address</h4>
                                        <p style={{ color: 'var(--color-gray-600)' }}>{t('info.address')}</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--color-gray-100)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Mail size={24} style={{ color: 'var(--color-primary)' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                                        <p style={{ color: 'var(--color-gray-600)' }}>{t('info.email')}</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        background: 'var(--color-gray-100)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Phone size={24} style={{ color: 'var(--color-primary)' }} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                                        <p style={{ color: 'var(--color-gray-600)' }}>{t('info.phone')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        style={{
                                            width: '45px',
                                            height: '45px',
                                            borderRadius: '50%',
                                            background: 'var(--color-gray-100)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--color-gray-600)',
                                            transition: 'all 0.3s',
                                        }}
                                        className="social-link"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {isSubmitted ? (
                                <div
                                    className="message-success"
                                    style={{ textAlign: 'center', padding: '3rem' }}
                                >
                                    <CheckCircle size={60} style={{ color: '#166534', marginBottom: '1rem' }} />
                                    <h3 style={{ marginBottom: '1rem', color: '#166534' }}>Message Sent!</h3>
                                    <p>{t('form.success')}</p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    style={{
                                        background: 'var(--color-gray-50)',
                                        padding: '2.5rem',
                                        borderRadius: 'var(--radius-xl)',
                                    }}
                                >
                                    <h3 style={{ marginBottom: '1.5rem' }}>Send us a Message</h3>

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
                                        <label className="form-label" htmlFor="subject">{t('form.subject')}</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-input"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
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
                                        <Send size={18} style={{ marginRight: '0.5rem' }} />
                                        {t('form.submit')}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
        .social-link:hover {
          background: var(--color-primary) !important;
          color: white !important;
        }
      `}</style>
        </>
    );
}
