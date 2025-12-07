"use client";

import { motion } from "framer-motion";

const skills = {
    "Producto & Estrategia": [
        "Gestión de Producto (10+ Años)",
        "Agile & Scrum",
        "Definición de Roadmap",
        "Gestión de Stakeholders",
        "Investigación de Usuario",
        "Análisis de KPIs"
    ],
    "Stack de Desarrollo": [
        "React / Next.js 14",
        "TypeScript",
        "Node.js & Express",
        "PostgreSQL",
        "Prisma / Drizzle",
        "Tailwind CSS"
    ],
    "IA & Automatización": [
        "Vercel AI SDK",
        "Implementación RAG",
        "Automatización n8n",
        "Pentaho BI",
        "Integración LLM",
        "Pipelines de Datos"
    ],
    "DevOps & Infraestructura": [
        "Docker & Docker Compose",
        "Git & GitHub Actions",
        "Bonita BPM (Self-hosted)",
        "OpenCart",
        "Vercel / AWS",
        "Administración Linux"
    ]
};

export default function Skills() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
                    Arsenal <span className="text-brand">Técnico & Estratégico</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors"
                        >
                            <h3 className="text-lg font-semibold mb-4 text-brand/80">{category}</h3>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
