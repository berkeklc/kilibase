'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const currentLocale = pathname.startsWith('/sw') ? 'sw' : 'en';
    const otherLocale = currentLocale === 'en' ? 'sw' : 'en';

    const switchLocalePath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: `/${currentLocale}`, label: t('home') },
        { href: `/${currentLocale}/about`, label: t('about') },
        { href: `/${currentLocale}/programs`, label: t('programs') },
        { href: `/${currentLocale}/impact`, label: t('impact') },
        { href: `/${currentLocale}/media`, label: t('media') },
        { href: `/${currentLocale}/get-involved`, label: t('getInvolved') },
        { href: `/${currentLocale}/contact`, label: t('contact') },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
            boxShadow: isScrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.875rem 1.5rem',
            }}>
                {/* Logo */}
                <Link href={`/${currentLocale}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        background: isScrolled ? 'var(--color-primary)' : 'white',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isScrolled ? 'white' : 'var(--color-primary)',
                        fontWeight: 800,
                        fontSize: '1.125rem',
                    }}>K</div>
                    <span style={{
                        fontWeight: 700,
                        fontSize: '1.125rem',
                        color: isScrolled ? 'var(--text-primary)' : 'white',
                        letterSpacing: '-0.01em',
                    }}>Kili Basecamp</span>
                </Link>

                {/* Desktop Navigation */}
                <nav style={{
                    display: 'none',
                    gap: '0.25rem',
                    alignItems: 'center',
                }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                color: isScrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.9)',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                                padding: '0.5rem 0.875rem',
                                borderRadius: '0.5rem',
                                transition: 'all 0.2s',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Language Switcher */}
                    <Link
                        href={switchLocalePath || `/${otherLocale}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.375rem',
                            padding: '0.5rem 0.875rem',
                            background: isScrolled ? 'var(--color-gray-100)' : 'rgba(255,255,255,0.15)',
                            borderRadius: '0.5rem',
                            color: isScrolled ? 'var(--text-secondary)' : 'white',
                            fontWeight: 500,
                            fontSize: '0.8125rem',
                            marginLeft: '0.5rem',
                            transition: 'all 0.2s',
                        }}
                    >
                        <Globe size={15} />
                        {otherLocale.toUpperCase()}
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        display: 'flex',
                        padding: '0.5rem',
                        color: isScrolled ? 'var(--text-primary)' : 'white',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    className="mobile-menu-btn"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'var(--color-gray-900)',
                    zIndex: 99,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            color: 'white',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                        }}
                        aria-label="Close menu"
                    >
                        <X size={28} />
                    </button>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                color: 'white',
                                fontWeight: 500,
                                fontSize: '1.25rem',
                                padding: '0.5rem 1rem',
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href={switchLocalePath || `/${otherLocale}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.75rem 1.5rem',
                            background: 'var(--color-primary)',
                            borderRadius: '0.75rem',
                            color: 'white',
                            fontWeight: 600,
                            marginTop: '1rem',
                        }}
                    >
                        <Globe size={18} />
                        {otherLocale === 'en' ? 'English' : 'Kiswahili'}
                    </Link>
                </div>
            )}

            <style jsx>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
        </header>
    );
}
