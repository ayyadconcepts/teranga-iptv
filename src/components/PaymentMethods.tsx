export default function PaymentMethods({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        {/* Wave logo */}
        <div className="flex items-center gap-1.5 rounded border border-border bg-background px-2.5 py-1.5">
          <img src="/images/wave.png" alt="" className="h-5 w-5 rounded-sm object-contain" aria-hidden="true" />
          <span className="text-xs font-medium text-muted">Wave</span>
        </div>
        {/* Orange Money logo */}
        <div className="flex items-center gap-1.5 rounded border border-border bg-background px-2.5 py-1.5">
          <img src="/images/orangemoney.png" alt="" className="h-5 w-5 rounded-sm object-contain" aria-hidden="true" />
          <span className="text-xs font-medium text-muted">Orange Money</span>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-6 text-center text-lg font-semibold">
          Paiement sécurisé
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Wave */}
          <div
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4"
            role="img"
            aria-label="Payer par Wave au Sénégal"
          >
            <img src="/images/wave.png" alt="" className="h-9 w-9 rounded-md object-contain" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold">Wave</p>
              <p className="text-xs text-muted">Transfert instantané</p>
            </div>
          </div>

          {/* Orange Money */}
          <div
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4"
            role="img"
            aria-label="Payer par Orange Money au Sénégal"
          >
            <img src="/images/orangemoney.png" alt="" className="h-9 w-9 rounded-md object-contain" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold">Orange Money</p>
              <p className="text-xs text-muted">Transfert instantané</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-muted">
          Activation en moins de 5 minutes après confirmation du paiement
        </p>
      </div>
    </section>
  );
}
