import { Folder } from "lucide-react"

export const Structure = () => {
    return <div className="col-center min-h-[60vh]">
        <div className="md:text-5xl text-3xl font-semibold">Clean project structure</div>
        <div className="text-neutral-500 tracking-wide font-mono px-4 text-center">Everything is preconfigured and organized for you.</div>
        <div className="w-[94%] md:w-[600px] mt-15 border border-neutral-100 rounded-xl shadow-md overflow-hidden group">
            <div className="px-4 py-2 flex items-center gap-1.5 border-b border-neutral-100">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <div className="p-4 flex flex-col items-center justify-between font-mono text-neutral-700 text-sm md:text-base">
                <div className="flex-between w-full">
                    <div className="flex items-center gap-2">
                        <Folder size={18} />
                        <div className="text-neutral-500">Frontend/</div>
                    </div>
                    <div className="text-xs md:block hidden">React app with Vite</div>
                </div>
                <div className="flex-between w-full mt-2">
                    <div className="flex items-center gap-2">
                        <Folder size={18} />
                        <div className="text-neutral-500">Backend/</div>
                    </div>
                    <div className="text-xs md:block hidden">Go API server
                    </div>
                </div>
                <div className="flex-between w-full mt-2">
                    <div className="flex items-center gap-2">
                        <Folder size={18} />
                        <div className="text-neutral-500">docker-compose.yml</div>
                    </div>
                    <div className="text-xs md:block hidden">Multi-service orchestration</div>
                </div>
                <div className="flex-between w-full mt-2">
                    <div className="flex items-center gap-2">
                        <Folder size={18} />
                        <div className="text-neutral-500">README.md</div>
                    </div>
                    <div className="text-xs md:block hidden">Getting started guide</div>
                </div>
            </div>
        </div>
    </div>
}