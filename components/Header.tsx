"use client"

import Link from "next/link"
import Button from "@/components/Button"
import { usePathname } from "next/navigation"
import { GeistPixelSquare } from "geist/font/pixel"


export default function Header() {
	const pathname = usePathname()
	const navs = [
		{ name: "About", path: "/about" },
		{ name: "Projects", path: "/projects" },
		{ name: "Skills", path: "/skills" },
		{ name: "Contact", path: "/contact" }
	]

	return (
		<header className="h-16 sticky top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-1000 border-b border-black/5">
			<div className="max-w-7xl w-full h-full mx-auto px-6 flex items-center justify-between relative">
				<Link href="/" className={`text-xl tracking-tight ${GeistPixelSquare.className}`}>Andrew Del Rosario</Link>
				<nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<ul className="h-full flex gap-9">
						{navs.map((nav) => (
							<li key={nav.name}>
								<Link 
									href={nav.path}
									className={pathname === nav.path ? "text-primary" : ""}
								>
									{nav.name}
								</Link>

								{pathname === nav.path && (
									<div className="border-t border-primary"></div>
								)}
							</li>
						))}
					</ul>
				</nav>
				<Button primary>Let's Talk</Button>
			</div>
		</header>
	)
}