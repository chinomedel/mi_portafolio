"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        year: "2023 - Presente",
        role: "Desarrollador Full Stack IA & Arquitecto SaaS",
        company: "Freelance / Independiente",
        description: "Creando soluciones SaaS de marca blanca utilizando Next.js, Vibe Coding y agentes de IA. Integrando RAG (Retrieval Augmented Generation) para el procesamiento inteligente de documentos.",
        type: "dev",
        skills: ["Next.js", "OpenAI API", "Vector DB", "Docker", "Stripe"]
    },
    {
        year: "2018 - 2023",
        role: "Senior Product Manager",
        company: "Empresa Tech Mayor (Placeholder)",
        description: "Lideré la estrategia de transformación digital. Gestioné un equipo multifuncional de más de 15 desarrolladores y diseñadores. Reduje el time-to-market en un 40% mediante la optimización de procesos Ágiles.",
        type: "pm",
        skills: ["Estrategia de Producto", "Scrum", "JIRA", "Gestión de Stakeholders", "User Research"]
    },
    {
        year: "2015 - 2018",
        role: "Product Owner & Arquitecto de Soluciones",
        company: "Fintech Startup",
        description: "Definí el roadmap para la plataforma de pagos. Uniendo la brecha entre los requisitos de negocio y la implementación técnica. Implementé flujos de trabajo BPMN.",
        type: "hybrid",
        skills: ["Bonita BPM", "SQL", "Diseño de API", "Historias de Usuario", "Roadmapping"]
    },
    {
        year: "2012 - 2015",
        role: "Analista de Business Intelligence / Dev",
        company: "Grupo Retail",
        description: "Desarrollé dashboards automatizados utilizando Pentaho BI. Optimicé procesos ETL para reducir la latencia de datos. Adopción temprana de toma de decisiones basada en datos.",
        type: "dev",
        skills: ["Pentaho", "ETL", "Data Warehousing", "Java", "SQL"]
    }
];

export default function Experience() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    10+ Años de <span className="text-brand">Evolución</span>
                </h2>

                <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-border transform sm:-translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={cn(
                                "relative mb-12 flex flex-col sm:flex-row items-center",
                                index % 2 === 0 ? "sm:flex-row-reverse" : ""
                            )}
                        >
                            {/* Dot */}
                            <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-brand z-10 flex items-center justify-center transform -translate-x-1/2 sm:translate-x-[-50%] ml-4 sm:ml-0">
                                {exp.type === "dev" && <Code className="w-4 h-4 text-brand" />}
                                {exp.type === "pm" && <Briefcase className="w-4 h-4 text-blue-500" />}
                                {exp.type === "hybrid" && <Rocket className="w-4 h-4 text-orange-500" />}
                            </div>

                            {/* Content Card */}
                            <div className={cn(
                                "w-full sm:w-[calc(50%-2rem)] p-6 rounded-xl border border-border bg-card hover:border-brand/50 transition-colors ml-12 sm:ml-0",
                                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                            )}>
                                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                                    <Calendar className="w-3 h-3" />
                                    {exp.year}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-brand/80 mb-3 text-sm font-medium">{exp.company}</p>
                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <span key={skill} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
