import { GitFork, Star } from "lucide-react"

export const Community = () => {
    return (
        <section className="w-full py-24 col-center px-6 md:px-10">
            <div className="w-full max-w-3xl col-center gap-6 px-8 md:px-16 py-16 rounded-2xl border border-neutral-200 shadow-sm bg-linear-to-b from-neutral-50 to-white relative overflow-hidden">

                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-neutral-100 blur-3xl opacity-70 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-neutral-100 blur-3xl opacity-70 pointer-events-none" />

                <div className="relative flex h-7 items-center px-3 bg-black/90 rounded-full border-2 border-neutral-200 gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="text-white text-xs font-light tracking-wide">Open Source</div>
                </div>

                <div className="relative text-3xl md:text-5xl font-semibold text-center leading-tight">
                    Built for the <span className="text-neutral-400">community</span>
                </div>

                <p className="relative text-neutral-500 text-center max-w-xl text-base leading-relaxed">
                    create-reactgo-app is fully open source. Whether you want to star the project, report a bug, or contribute a feature — every bit helps make the ecosystem better for everyone.
                </p>

                <div className="relative flex items-center gap-4 mt-2 flex-wrap justify-center">
                    <a
                        href="https://github.com/akdevsaha-dev/QuickReactGO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-neutral-200 bg-white text-black text-sm font-medium hover:bg-neutral-100 transition-all duration-300 shadow-xs"
                    >
                        <GitFork size={16} />
                        Contribute
                    </a>
                    <a
                        href="https://github.com/akdevsaha-dev/QuickReactGO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-300"
                    >
                        <Star size={16} />
                        Star on GitHub
                    </a>
                </div>

            </div>
        </section>
    )
}
