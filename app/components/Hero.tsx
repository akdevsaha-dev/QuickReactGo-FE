"use client"

import { Check, Copy } from "lucide-react"
import { useState } from "react"

export const Hero = () => {
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("npx create-reactgo-app myapp")
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }
    return <div className="min-h-screen col-center">
        <div className="flex h-8 items-center px-3 bg-black/90 rounded-full border-2 border-neutral-200 gap-2">
            <div className="w-2 h-2 animate-pulse rounded-full bg-green-500"></div>
            <div className="text-white font-light">Open Source CLI Tool</div>
        </div>
        <div className="text-5xl mt-10 md:text-6xl px-1 md:w-3xl font-bold text-center">The React + Go Starter for the <span className="text-neutral-400">Modern Web</span></div>
        <div className="text-lg text-neutral-500 w-sm md:w-2xl text-center mt-10 px-3">The fastest way to bootstrap a production-ready full-stack application with React and Go. One command. Zero config.</div>

        <div className="mt-12 w-[350px] md:w-[400px] h-24 border border-neutral-200 rounded-2xl">
            <div className="border-b flex items-center pl-3 gap-1 border-b-neutral-200 h-8">
                <div className="w-4 h-4 rounded-full bg-red-300 "></div>
                <div className="w-4 h-4 rounded-full bg-yellow-300 "></div>
                <div className="w-4 h-4 rounded-full bg-green-300 "></div>
            </div>
            <div className=" px-3 flex-between h-16 font-mono text-neutral-500">
                <div className="gap-2 flex-center">
                    <div>$</div>
                    <div >npx create-reactgo-app my-app</div>
                </div>
                {
                    isCopied ? <Check size={18} className="cursor-pointer" /> : <Copy size={18} className="cursor-pointer hover:text-black" onClick={handleCopy} />
                }

            </div>
        </div>
        <div className="flex-between gap-5 mt-6">
            <div className="px-5 py-2 rounded-md text-black border border-neutral-200 transition-all duration-300 hover:bg-neutral-100 cursor-pointer">Get Started</div>
            <div className="px-5 py-2 rounded-md bg-black text-white transition-all duration-300 hover:bg-neutral-800 cursor-pointer">View on GitHub</div>
        </div>
    </div>
}