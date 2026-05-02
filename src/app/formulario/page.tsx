import FormularioPremium from "@/components/sections/FormularioPremium";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Análisis Hipotecario Premium | Mi Guía Financiero",
  description: "Descubra cuánto dinero y años puede ahorrar en su crédito hipotecario aplicando la Ley de Vivienda.",
};

export default function FormPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#0d1117" }}>
      <FormularioPremium />
    </main>
  );
}
