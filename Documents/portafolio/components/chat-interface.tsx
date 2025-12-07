"use client";


import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, User, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { knowledgeBase, defaultAnswer } from "@/lib/knowledge";

type Message = {
    id: string;
    role: 'user' | 'assistant';
    content: string;
};

export default function ChatInterface() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const suggestedQuestions = [
        "¿Cuál es tu experiencia con IA?",
        "¿Has trabajado con Docker?",
        "¿Qué proyectos SaaS has construido?",
        "¿Cómo gestionas equipos de producto?"
    ];

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 600));

            // Simple Keyword Matching Logic (Local "RAG")
            const lowerInput = input.toLowerCase();
            let matchedAnswer = defaultAnswer;

            for (const entry of knowledgeBase) {
                if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
                    matchedAnswer = entry.answer;
                    break;
                }
            }

            // Streaming simulation
            const decoder = new TextDecoder(); // Decoder is not strictly needed for local string, but kept for consistency with original streaming idea
            let assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: ""
            };

            setMessages(prev => [...prev, assistantMessage]);

            const chunks = matchedAnswer.split(" ");

            for (let i = 0; i < chunks.length; i++) {
                const chunk = chunks[i] + (i < chunks.length - 1 ? " " : ""); // Add space back, but not after the last word
                await new Promise(resolve => setTimeout(resolve, Math.random() * 50 + 30)); // Variable typing speed

                assistantMessage.content += chunk;

                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { ...assistantMessage };
                    return newMessages;
                });
            }

        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: "Lo siento, hubo un error de conexión. Inténtalo de nuevo."
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSuggestedClick = (question: string) => {
        setInput(question);
        // Optional: Auto-submit? Let's just set input for user to confirm
        // or we can auto-call:
        // setInput(question);
        // setTimeout(() => handleSubmit(), 100); 
        // But need to handle state update. Simpler to just set input.
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-card/95 backdrop-blur-xl border border-brand/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-border bg-brand/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center border border-brand/30">
                                    <Bot className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Nelson Digital</h3>
                                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Online & Ready
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-secondary rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-secondary">
                            {messages.length === 0 && (
                                <div className="text-center mt-8 space-y-4">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 mb-2">
                                        <Sparkles className="w-6 h-6 text-brand" />
                                    </div>
                                    <p className="text-sm text-muted-foreground px-4">
                                        Hola, soy la versión digital de Nelson. He leído todo su CV y portafolio. ¡Pregúntame lo que quieras!
                                    </p>
                                    <div className="grid gap-2 px-2">
                                        {suggestedQuestions.map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => setInput(q)}
                                                className="text-xs text-left p-2 rounded-lg bg-secondary/50 hover:bg-brand/10 hover:text-brand transition-colors border border-transparent hover:border-brand/20"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={cn(
                                        "flex gap-3 max-w-[85%]",
                                        m.role === "user" ? "ml-auto flex-row-reverse" : ""
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border",
                                        m.role === "user" ? "bg-secondary border-border" : "bg-brand/10 border-brand/20"
                                    )}>
                                        {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-brand" />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-2xl text-sm",
                                        m.role === "user"
                                            ? "bg-brand text-brand-foreground rounded-tr-none"
                                            : "bg-secondary/80 text-foreground rounded-tl-none border border-border"
                                    )}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 max-w-[85%]">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border bg-brand/10 border-brand/20">
                                        <Bot className="w-4 h-4 text-brand" />
                                    </div>
                                    <div className="p-3 rounded-2xl text-sm bg-secondary/80 text-foreground rounded-tl-none border border-border flex gap-1 items-center">
                                        <span className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-background/50 backdrop-blur-sm">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Escribe tu pregunta..."
                                    className="w-full bg-secondary/50 border border-border rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all placeholder:text-muted-foreground/50"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-1 top-1 p-2 rounded-full bg-brand text-brand-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-white/10 relative overflow-hidden group",
                    isOpen ? "bg-secondary text-foreground rotate-90" : "bg-brand text-brand-foreground hover:shadow-brand/25"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Sparkles className="w-6 h-6 animate-pulse" />
                )}
            </motion.button>
        </div>
    );
}
