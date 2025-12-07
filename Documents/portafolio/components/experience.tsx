"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        year: "2023 - Present",
        role: "Full Stack AI Developer & SaaS Architect",
        company: "Freelance / Independent",
        description: "Building white-label SaaS solutions using Next.js, Vibe Coding, and AI agents. Integrating RAG (Retrieval Augmented Generation) for intelligent document processing.",
        type: "dev",
        skills: ["Next.js", "OpenAI API", "Vector DB", "Docker", "Stripe"]
    },
    {
        year: "2018 - 2023",
        role: "Senior Product Manager",
        company: "Major Tech Corp (Placeholder)",
        description: "Led the digital transformation strategy. Managed a cross-functional team of 15+ developers and designers. Reduced time-to-market by 40% through Agile process optimization.",
        type: "pm",
        skills: ["Product Strategy", "Scrum", "JIRA", "Stakeholder Mgmt", "User Research"]
    },
    {
        year: "2015 - 2018",
        role: "Product Owner & Solution Architect",
        company: "Fintech Startup",
        description: "Defined roadmap for payments platform. Bridged the gap between business requirements and technical implementation. Implemented BPMN workflows.",
        type: "hybrid",
        skills: ["Bonita BPM", "SQL", "API Design", "User Stories", "Roadmapping"]
    },
    {
        year: "2012 - 2015",
        role: "Business Intelligence Analyst / Dev",
        company: "Retail Group",
        description: "Developed automated dashboards using Pentaho BI. Optimized ETL processes to reduce data latency. Early adopter of data-driven decision making.",
        type: "dev",
        skills: ["Pentaho", "ETL", "Data Warehousing", "Java", "SQL"]
    }
];

export default function Experience() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    10+ Years of <span className="text-purple-500">Evolution</span>
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
                            <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-purple-500 z-10 flex items-center justify-center transform -translate-x-1/2 sm:translate-x-[-50%] ml-4 sm:ml-0">
                                {exp.type === "dev" && <Code className="w-4 h-4 text-purple-500" />}
                                {exp.type === "pm" && <Briefcase className="w-4 h-4 text-blue-500" />}
                                {exp.type === "hybrid" && <Rocket className="w-4 h-4 text-orange-500" />}
                            </div>

                            {/* Content Card */}
                            <div className={cn(
                                "w-full sm:w-[calc(50%-2rem)] p-6 rounded-xl border border-border bg-card hover:border-purple-500/50 transition-colors ml-12 sm:ml-0",
                                index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                            )}>
                                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                                    <Calendar className="w-3 h-3" />
                                    {exp.year}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-purple-400 mb-3 text-sm font-medium">{exp.company}</p>
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
