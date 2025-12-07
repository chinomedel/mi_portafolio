"use strict";
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Terminal, Lightbulb, ArrowRight, Code2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    const [role, setRole] = useState<"dev" | "pm">("dev");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
            {/* Background Elements */}
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                >
                    <source src="/videos/hero-background.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
            </div>

            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand opacity-20 blur-[100px] pointer-events-none"></div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                {/* Profile & Name */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex flex-col items-center"
                >
                    <div className="relative mb-8">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-brand/30 shadow-[0_0_40px_-10px_rgba(44,177,188,0.5)] overflow-hidden bg-black/50 backdrop-blur-sm flex items-center justify-center">
                            {/* Using standard img tag since we just downloaded it to public/logo.png and want to avoid next/image config for now if domains issue arises, but next/image is better. Let's use img for simplicity in this artifact-heavy flow, or next/image with unoptimized if needed. Actually standard next/image with local path is fine. */}
                            <Image
                                src="/logo.png"
                                alt="Nelson Medel Logo"
                                className="w-full h-full object-contain p-2"
                                width={160} // Added width and height for next/image
                                height={160}
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-brand text-black font-bold px-3 py-1 rounded-full text-xs border-2 border-background">
                            {role === "dev" ? "DEV" : "PM"}
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold tracking-tight mb-2">Nelson Medel</h1>
                    <div className="flex gap-4 mt-4">
                        <a href="https://linkedin.com/in/#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-brand/20 hover:text-brand/40 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://github.com/chinomedel" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-brand/20 hover:text-brand/40 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                        </a>
                        <a href="https://youtube.com/@#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-brand/20 hover:text-brand/40 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 0 1 1.768-1.768C5.745 5 12 5 12 5s6.255 0 7.812.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" /></svg>
                        </a>
                    </div>
                </motion.div>
                <div className="mb-8 flex items-center p-1 bg-secondary rounded-full border border-border">
                    <button
                        onClick={() => setRole("dev")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            role === "dev" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Code2 className="w-4 h-4" />
                        Desarrollador
                    </button>
                    <button
                        onClick={() => setRole("pm")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            role === "pm" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Users className="w-4 h-4" />
                        Product Manager
                    </button>
                </div>

                {/* Dynamic Heading */}
                <motion.div
                    key={role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand/50 text-xs font-semibold tracking-wide uppercase">
                        {role === "dev" ? "Vibe Coding + Arquitectura IA" : "10+ Años de Experiencia"}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                        {role === "dev" ? (
                            <span>
                                Construyendo Soluciones SaaS <span className="text-brand">Inteligentes</span>
                            </span>
                        ) : (
                            <span>
                                Uniendo <span className="text-brand">Visión</span> y Ejecución
                            </span>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        {role === "dev"
                            ? "Desarrollador Full Stack especializado en integraciones de IA, Next.js y arquitecturas escalables. Transformando requerimientos complejos en productos elegantes y autohospedables."
                            : "Senior Product Manager aprovechando un profundo conocimiento técnico para liderar equipos ágiles, definir roadmaps y entregar productos digitales de alto valor."}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                        {role === "dev" ? "Ver Proyectos" : "Ver Experiencia"} <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        Pregúntale a Nelson Digital <Terminal className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
