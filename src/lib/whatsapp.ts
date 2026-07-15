const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '221770000000';

export function getWhatsAppUrl(offerName: string, price: string): string {
  const message = `Bonjour je souhaite commander l'abonnement ${offerName} (${price} FCFA). Merci.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppContactUrl(): string {
  const message = `Bonjour, je souhaite en savoir plus sur vos abonnements IPTV. Merci.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
