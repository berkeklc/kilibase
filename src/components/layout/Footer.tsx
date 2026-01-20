'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const pathname = usePathname();
    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';

    const quickLinks = [
        { href: `/${currentLocale}/about`, label: tNav('about') },
        { href: `/${currentLocale}/programs`, label: tNav('programs') },
        { href: `/${currentLocale}/impact`, label: tNav('impact') },
        { href: `/${currentLocale}/get-involved`, label: tNav('getInvolved') },
    ];

    const programLinks = [
        { href: `/${currentLocale}/programs/run-for-life`, label: 'Run for Life' },
        { href: `/${currentLocale}/programs/camp-with-purpose`, label: 'Camp with Purpose' },
        { href: `/${currentLocale}/programs/give-blood`, label: 'Give Blood' },
        { href: `/${currentLocale}/programs/fellowship`, label: 'Youth Fellowship' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: 'fb' },
        { name: 'Twitter', icon: 'tw' },
        { name: 'Instagram', icon: 'ig' },
        { name: 'YouTube', icon: 'yt' },
    ];

    return (
        <footer style={{
            background: 'var(--color-gray-900)',
            color: 'white',
            paddingTop: '4rem',
        }}>
            <div className="container">
                {/* Main Footer Content */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gap: '2.5rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid var(--color-gray-800)',
                }} className="footer-grid">
                    {/* Brand Column */}
                    <div>
                        <Link href={`/${currentLocale}`} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            marginBottom: '1rem',
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                background: 'var(--color-primary)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 800,
                                fontSize: '1.25rem',
                            }}>K</div>
                            <div>
                                <span style={{
                                    fontWeight: 700,
                                    fontSize: '1.125rem',
                                    display: 'block',
                                }}>Kili Basecamp</span>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--color-gray-500)',
                                }}>{t('tagline')}</span>
                            </div>
                        </Link>
                        <p style={{
                            color: 'var(--color-gray-400)',
                            fontSize: '0.9375rem',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                            maxWidth: '280px',
                        }}>
                            {t('movement')}
                        </p>
                        {/* Social Links */}
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '8px',
                                        background: 'var(--color-gray-800)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'var(--color-gray-400)',
                                        fontSize: '0.75rem',
                                        fontWeight: 600,
                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.25rem',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}>{t('quickLinks')}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{
                                        color: 'var(--color-gray-400)',
                                        fontSize: '0.9375rem',
                                        transition: 'color 0.2s',
                                    }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.25rem',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}>{t('programs')}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                            {programLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{
                                        color: 'var(--color-gray-400)',
                                        fontSize: '0.9375rem',
                                        transition: 'color 0.2s',
                                    }}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.25rem',
                            color: 'white',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                        }}>{t('connect')}</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <MapPin size={16} style={{ color: 'var(--color-primary)', marginTop: '3px', flexShrink: 0 }} />
                                <span style={{ color: 'var(--color-gray-400)', fontSize: '0.9375rem' }}>
                                    Moshi, Kilimanjaro Region, Tanzania
                                </span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Mail size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                                <span style={{ color: 'var(--color-gray-400)', fontSize: '0.9375rem' }}>
                                    info@kilibasecamp.org
                                </span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Phone size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                                <span style={{ color: 'var(--color-gray-400)', fontSize: '0.9375rem' }}>
                                    +255 XXX XXX XXX
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    paddingTop: '1.5rem',
                    paddingBottom: '1.5rem',
                }} className="footer-bottom">
                    <p style={{
                        color: 'var(--color-gray-500)',
                        fontSize: '0.8125rem',
                    }}>
                        © {new Date().getFullYear()} Kili Basecamp Experience. {t('rights')}
                    </p>
                    <p style={{
                        color: 'var(--color-gray-500)',
                        fontSize: '0.8125rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                    }}>
                        Made with <Heart size={12} style={{ color: 'var(--color-blood)' }} /> in Tanzania
                    </p>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr 1fr !important;
          }
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
        </footer>
    );
}
