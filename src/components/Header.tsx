'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getWhatsAppContactUrl } from '@/lib/whatsapp';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isHome 
    ? `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent border-b border-transparent'}`
    : `sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm`;

  const linkClass = `text-sm transition-colors ${
    isHome && !isScrolled ? 'text-white hover:text-gray-300' : 'text-muted hover:text-foreground'
  }`;

  return (
    <header className={headerClass}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="IPTV Sénégal - Accueil">
          <span className="text-2xl">🇸🇳</span>
          <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
            TERANGA IPTV
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className={linkClass}>
            Accueil
          </Link>
          <Link href="/#offres" className={linkClass}>
            Offres
          </Link>
          <Link
            href="/abonnement-iptv-24h-gratuit"
            className={linkClass}
          >
            Test Gratuit
          </Link>
          <Link
            href="/iptv-smarters-pro"
            className={linkClass}
          >
            Installation
          </Link>
          <a
            href={getWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-vert px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-vert-hover"
          >
            Contacter
          </a>
        </div>

        {/* Mobile hamburger - pure CSS with checkbox */}
        <label htmlFor="mobile-menu-toggle" className={`cursor-pointer p-2 md:hidden ${isHome && !isScrolled ? 'text-white' : 'text-foreground'}`} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </label>
      </nav>

      {/* Mobile menu */}
      <input type="checkbox" id="mobile-menu-toggle" className="mobile-menu-toggle hidden" aria-hidden="true" />
      <div className={`mobile-menu border-t border-border md:hidden ${isHome && !isScrolled ? 'bg-background/95 backdrop-blur-sm' : ''}`}>
        <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
          <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">
            Accueil
          </Link>
          <Link href="/#offres" className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">
            Offres
          </Link>
          <Link
            href="/abonnement-iptv-24h-gratuit"
            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            Test Gratuit
          </Link>
          <Link
            href="/iptv-smarters-pro"
            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            Installation
          </Link>
          <a
            href={getWhatsAppContactUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-vert px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-vert-hover"
          >
            Contacter sur WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
