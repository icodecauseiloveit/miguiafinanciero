export const LEAD_SOURCES: Record<string, string> = {
  // Ejemplos de tráfico físico
  "qr_poster": "Póster QR Físico (Oficina/Evento)",
  "volante": "Volante Físico",
  
  // Ejemplos de Asesores o Afiliados
  "asesor_carlos": "Asesor Carlos Gómez",
  "asesor_maria": "Asesora María López",
  
  // Ejemplos de Redes Sociales
  "ig_story": "Historia de Instagram",
  "ig_bio": "Enlace en Biografía de Instagram",
  "fb_ads": "Anuncio de Facebook Ads",
  "tiktok_video": "Video Viral en TikTok",
  
  // Tráfico por defecto
  "direct": "Tráfico Directo / Orgánico"
};

/**
 * Recibe un código de fuente (ej. "qr_poster") y devuelve su nombre amigable.
 * Si el código no está en el registro, devuelve el mismo código para no perder la información de rastreo.
 */
export function getSourceName(code: string | null): string {
  if (!code) return LEAD_SOURCES["direct"];
  const cleanCode = code.toLowerCase().trim();
  return LEAD_SOURCES[cleanCode] || cleanCode;
}
