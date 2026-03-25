"use client"
import { LucideCopy } from "lucide-react"

export const Howitwork = () => {
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    return <section id="works" className="mt-20 flex flex-col bg-neutral-50 items-center px-5 md:px-20 gap-16">
        <div className="text-center max-w-2xl mt-10">
            <h2 className="text-3xl md:text-4xl font-bold">
                Up and running in <span className="text-teal-500">3 steps</span>
            </h2>
            <p className="text-neutral-500 mt-4 text-lg">
                From zero to full-stack in under a minute.
            </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full md:w-1/2">
                    <span className="text-4xl md:text-5xl font-bold text-teal-600/30 shrink-0">01</span>
                    <h3 className="text-xl md:text-lg font-bold text-neutral-800">Run the CLI</h3>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full border border-neutral-100 rounded-xl shadow-md overflow-hidden group">
                        <div className="px-4 py-2 flex items-center gap-1.5 border-b border-neutral-100">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="p-4 flex items-center justify-between font-mono text-neutral-700 text-sm md:text-base">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="text-neutral-500 shrink-0">$</span>
                                <span className="truncate">npx create-reactgo-app my-app</span>
                            </div>
                            <button
                                onClick={() => handleCopy("npx create-reactgo-app my-app")}
                                className="text-neutral-500 hover:text-white transition-colors ml-4 shrink-0"
                                title="Copy command"
                            >
                                <LucideCopy size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full md:w-1/2">
                    <span className="text-4xl md:text-5xl font-bold text-teal-600/30 shrink-0">02</span>
                    <div className="text-xl md:text-lg font-bold w-full md:w-[150px] text-neutral-800 ">Navigate to the project</div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full border border-neutral-100 rounded-xl shadow-md overflow-hidden group">
                        <div className="px-4 py-2 flex items-center gap-1.5 border-b border-neutral-100">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="p-4 flex items-center justify-between font-mono text-neutral-700 text-sm md:text-base">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="text-neutral-500 shrink-0">$</span>
                                <span className="truncate">cd my-app</span>
                            </div>
                            <button
                                onClick={() => handleCopy("cd my-app")}
                                className="text-neutral-500 hover:text-white transition-colors ml-4 shrink-0"
                                title="Copy command"
                            >
                                <LucideCopy size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6 w-full md:w-1/2">
                    <span className="text-4xl md:text-5xl font-bold text-teal-600/30 shrink-0">03</span>
                    <h3 className="text-xl md:text-lg font-bold w-full md:w-[180px] text-neutral-800 ">Start everything with Docker</h3>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full border border-neutral-100 rounded-xl shadow-md overflow-hidden group">
                        <div className="px-4 py-2 flex items-center gap-1.5 border-b border-neutral-100">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="p-4 flex items-center justify-between font-mono text-neutral-700 text-sm md:text-base">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="text-neutral-500 shrink-0">$</span>
                                <span className="truncate">docker compose up</span>
                            </div>
                            <button
                                onClick={() => handleCopy("docker compose up")}
                                className="text-neutral-500 hover:text-white transition-colors ml-4 shrink-0"
                                title="Copy command"
                            >
                                <LucideCopy size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
