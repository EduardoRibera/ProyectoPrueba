import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Prueba Backend1",
  description: "Una página básica de prueba con un enlace a la página principal.",
};

export default function Backend1Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#eef2ff",
        color: "#111827",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "1rem",
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.12)",
        }}
      >
        <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
          Página de Prueba Backend1
        </h1>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.75 }}>
          Esta es una página de prueba creada en <code>Backend1.tsx</code>. Usa el enlace
          de abajo para volver a la página principal.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.25rem",
            borderRadius: "9999px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Volver a la página principal
        </Link>
      </section>
    </main>
  );
}
