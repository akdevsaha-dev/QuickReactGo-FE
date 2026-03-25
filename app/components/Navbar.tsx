import Image from "next/image"

export const Navbar = () => {
    return <header>
        <nav>
            <div className="flex items-center gap-3 md:text-xl text-md font-semibold">
                <Image src="/icon.png" alt="Logo" width={32} height={32} />
                create-reactgo-app
            </div>
            <div className="flex gap-5">
                <a href="#features" className="md:block hidden">Features</a>
                <a href="https://github.com/akdevsaha-dev/QuickReactGO#readme" className="md:block hidden">Docs</a>
                <a href="https://github.com/akdevsaha-dev/QuickReactGO" className="flex gap-2 ">
                    <img src="https://cdn.simpleicons.org/github?viewbox=auto&size=20" alt="GitHub" />
                </a>
            </div>
        </nav>
    </header >
}


