export const Features = () => {
    return <div id="features">
        < section className="flex flex-col px-5 md:px-20" >
            <div className="text-3xl font-semibold text-neutral-600">Engineered for performance</div>
            <div className="uppercase text-sm text-neutral-500 mt-2">Production ready features out of the box</div>

            <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="w-full md:w-[400px]">
                    <div className="w-full flex flex-col h-40 border border-neutral-200 rounded-xl gap-4 px-5 justify-center">
                        <div className="text-xl font-semibold">Instant React + Go setup</div>
                        <div className="text-neutral-500">One command to scaffold a complete full-stack application with react frontend and Go backend.</div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full flex flex-col h-40 border bg-neutral-100 border-neutral-200 rounded-xl gap-4 px-5 justify-center">
                        <div className="text-xl font-semibold">Backend Hot Reloading</div>
                        <div className="text-neutral-500">Development velocity shouldn't stop at the frontend. Our go scaffold includes Air for instant server recompilation on every save.</div>
                    </div>
                </div>
            </div>
            <div className="mt-5 flex flex-col lg:flex-row items-center justify-center px-0 md:px-10 gap-2">
                <div className="w-full lg:w-1/3">
                    <div className="w-full flex flex-col h-40 border md:bg-neutral-100 border-neutral-200 rounded-xl gap-4 px-5 justify-center">
                        <div className="text-xl font-semibold">Built in docker support</div>
                        <div className="text-neutral-500">Multi-stage builds for production and optimized dev containers for local orchestration.</div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="w-full flex flex-col h-40 border md:bg-white bg-neutral-100  border-neutral-200 rounded-xl gap-4 px-5 justify-center">
                        <div className="text-xl font-semibold">Clean Architecture</div>
                        <div className="text-neutral-500">Well-organized directory layout following best practices for both React and Go.</div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3">
                    <div className="w-full flex flex-col h-40 border  border-neutral-200 rounded-xl gap-4 px-5 justify-center">
                        <div className="text-xl font-semibold">Production Ready</div>
                        <div className="text-neutral-500">Configured with enviroment variables, health checks, and secure multi-stage Dockerfiles.  </div>
                    </div>
                </div>
            </div>
        </section >
    </div >

}