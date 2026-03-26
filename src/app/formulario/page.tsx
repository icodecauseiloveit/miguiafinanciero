import type { Metadata } from "next";
import FormularioMGF from "@/components/sections/FormularioMGF";

export const metadata: Metadata = {
  title: "Análisis Gratuito de tu Crédito Hipotecario | Mi Guía Financiero",
  description: "Responde 10 preguntas y en menos de 24 horas recibirás un análisis personalizado de cuánto puedes ahorrarte en tu crédito hipotecario.",
};

export default function FormularioPage() {
  return <FormularioMGF />;
}
