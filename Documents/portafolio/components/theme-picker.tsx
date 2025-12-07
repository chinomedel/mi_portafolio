"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const themes = [
    {
        name: "Default (Teal)",
        brand: "185 62% 45%",    // #2cb1bc
        background: "240 10% 3.9%", // Dark standard
        color: "bg-[#2cb1bc]"
    },
    {
        name: "Purple Haze",
        brand: "270 95% 60%",    // Neon Purple
        background: "260 20% 4%",   // Deep Purple/Black
        color: "bg-purple-500"
    },
    {
        name: "Matrix",
        brand: "142 70% 50%",    // Neon Green
        background: "120 10% 2%",   // Very Dark Green/Black
        color: "bg-green-500"
    },
    {
        name: "Midnight Ocean",
        brand: "217 91% 60%",    // Electric Blue
        background: "220 20% 4%",   // Deep Blue
        color: "bg-blue-500"
    },
    {
        name: "Light Mode",
        brand: "221 83% 53%",    // Blue
        background: "0 0% 100%",    // White
        color: "bg-zinc-200 border border-zinc-400"
    }
];

export default function ThemePicker() {
    const [isOpen, setIsOpen] = useState(false);

    const applyTheme = (theme: typeof themes[0]) => {
        // We update the CSS variables on the document root
        const root = document.documentElement;
        root.style.setProperty("--brand", theme.brand);
        root.style.setProperty("--background", theme.background);

        // If selecting light mode, we might need to invert some text colors or logical properties
        // For simplicity in this v1, we assume the 'foreground' variable adapts or we set it too.
        if (theme.name === "Light Mode") {
            root.style.setProperty("--foreground", "240 10% 3.9%");
            root.style.setProperty("--card", "0 0% 100%");
            root.classList.remove("dark");
        } else {
            root.style.setProperty("--foreground", "0 0% 98%");
            root.style.setProperty("--card", "240 10% 4.5%"); // Slightly lighter than bg
            root.classList.add("dark");
        }
    };

    return (
        <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-full bg-secondary/80 backdrop-blur-md border border-border shadow-xl hover:bg-secondary transition-all group"
                aria-label="Change Theme"
            >
                <Palette className="w-5 h-5 text-muted-foreground group-hover:text-brand transition-colors" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="absolute top-14 right-0 p-3 rounded-xl bg-card/90 backdrop-blur-xl border border-border shadow-2xl flex flex-col gap-2 min-w-[140px]"
                    >
                        <span className="text-xs font-medium text-muted-foreground px-2 mb-1">Elige tu Vibe</span>
                        {themes.map((theme) => (
                            <button
                                key={theme.name}
                                onClick={() => applyTheme(theme)}
                                className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-secondary/50 transition-colors text-left group"
                            >
                                <span className={cn("w-4 h-4 rounded-full border border-white/10 shadow-sm", theme.color)} />
                                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">{theme.name}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
