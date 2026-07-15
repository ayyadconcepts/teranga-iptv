'use client';

import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first section that is intersecting
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    // Set initial active section
    if (elements.length > 0 && !activeId) {
      setActiveId(elements[0].id);
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      className="hidden lg:block sticky top-24 self-start"
      aria-label="Table des matières"
    >
      <div className="bg-surface rounded-2xl border border-white/10 p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-vert shrink-0"
            aria-hidden="true"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
            Sommaire
          </span>
        </div>

        {/* Section Links */}
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeId === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(section.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setActiveId(section.id);
                    }
                  }}
                  className={`
                    block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200
                    ${
                      isActive
                        ? 'border-vert text-vert font-medium'
                        : 'border-transparent text-muted-light hover:text-foreground hover:border-white/20'
                    }
                  `}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
