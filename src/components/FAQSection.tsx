import type { FAQItem } from '@/lib/faq';

export default function FAQSection({ faqs, title = 'Questions fréquentes' }: { faqs: FAQItem[]; title?: string }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-2xl font-bold">{title}</h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl border border-border bg-surface"
              suppressHydrationWarning
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-foreground sm:text-base">
                <span>{faq.question}</span>
                <svg
                  className="faq-chevron h-5 w-5 shrink-0 text-muted"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <div className="faq-answer px-5 pb-4 text-sm leading-relaxed text-muted" suppressHydrationWarning>
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
