"use strict";
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Lightbulb, ArrowRight, Code2, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    const [role, setRole] = useState<"dev" | "pm">("dev");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-500 opacity-20 blur-[100px]"></div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                {/* Toggle Switch */}
                <div className="mb-8 flex items-center p-1 bg-secondary rounded-full border border-border">
                    <button
                        onClick={() => setRole("dev")}
                        className={cn(
                            "flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            role === "dev" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        <Code2 className="w-4 h-4" />
                        Developer
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
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wide uppercase">
                        {role === "dev" ? "Vibe Coding + AI Architecture" : "10+ Years Experience"}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70">
                        {role === "dev" ? (
                            <span>
                                Building <span className="text-purple-500">Intelligent</span> SaaS Solutions
                            </span>
                        ) : (
                            <span>
                                Bridging <span className="text-purple-500">Vision</span> & Execution
                            </span>
                        )}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        {role === "dev"
                            ? "Full Stack Developer specializing in AI integrations, Next.js, and scalable architecture. Turning complex requirements into elegant, self-hosted products."
                            : "Senior Product Manager leveraging deep technical knowledge to lead agile teams, define roadmaps, and deliver high-value digital products."}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
                        {role === "dev" ? "View Projects" : "View Experience"} <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors">
                        Ask Digital Nelson <Terminal className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
