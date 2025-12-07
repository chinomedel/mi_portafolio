"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Lock, Monitor, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "SaaS Analytics Dashboard",
        description: "Multi-tenant analytics platform with white-label capabilities. Clients can host on their own infrastructure (Docker) or use our cloud.",
        tech: ["Next.js", "Postgres", "Docker", "Redis"],
        type: "SaaS",
        githubUrl: "#",
        liveUrl: "#",
        color: "bg-blue-500"
    },
    {
        title: "AI Document Processor",
        description: "Automated workflow system using n8n and LLMs to process invoices and legal documents. Self-hosted architecture.",
        tech: ["n8n", "Python", "OpenAI", "Pentaho"],
        type: "Automation",
        githubUrl: "#",
        liveUrl: "#",
        color: "bg-green-500"
    },
    {
        title: "E-Commerce White-label Core",
        description: "Headless e-commerce engine based on OpenCart but modernized with a React frontend. deployed via Docker Compose.",
        tech: ["React", "Express", "OpenCart", "Docker"],
        type: "E-Commerce",
        githubUrl: "#",
        liveUrl: "#",
        color: "bg-orange-500"
    }
];

export default function Projects() {
    return (
        <section className="py-20 bg-secondary/20 bg-grid-white/[0.02]">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium mb-4">
                        <Layers className="w-3 h-3" />
                        <span>Architecture & Code</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight mb-4">
                        Built for <span className="text-purple-500">Scale</span> & Flexibility
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Focusing on White-label SaaS, Self-hosted solutions, and AI Automation.
                        All projects are containerized with Docker for easy deployment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    // "White-label" simulator state: Allows user to change the accent color of the card
    const [themeColor, setThemeColor] = useState<string>("bg-purple-500");
    const [active, setActive] = useState(false);

    const colors = [
        "bg-purple-500",
        "bg-blue-500",
        "bg-emerald-500",
        "bg-rose-500",
        "bg-amber-500"
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {/* "Screen" Mockup Header */}
            <div className={cn("h-40 w-full relative transition-colors duration-500 flex items-center justify-center", themeColor)}>
                <div className="absolute inset-0 bg-black/20" />
                <Monitor className="text-white/80 w-16 h-16" />

                {/* White-label Controls (Visible on Hover/Always for demo) */}
                <div className="absolute bottom-4 right-4 flex gap-1 bg-black/40 backdrop-blur-sm p-1 rounded-full">
                    {colors.map((c) => (
                        <button
                            key={c}
                            onClick={(e) => { e.stopPropagation(); setThemeColor(c); }}
                            className={cn("w-4 h-4 rounded-full border border-white/20 transition-transform hover:scale-125", c)}
                            aria-label="Change theme color"
                        />
                    ))}
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-white/70 font-mono bg-black/30 px-2 py-1 rounded">
                    White-label Ready
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{project.type}</span>
                        <h3 className="text-xl font-bold mt-1 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    </div>
                    <div className="flex gap-2">
                        <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-medium">
                    {project.tech.map((t: string) => (
                        <span key={t} className="px-2 py-1 rounded-md bg-secondary/50 border border-border text-foreground/80 flex items-center gap-1">
                            {t === "Docker" ? "🐳 " : ""}{t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
