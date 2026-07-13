"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function Header() {
	const pathname = usePathname()

	const navs = [
		// { name: "About", path: "/#about" },
		{ name: "Projects", path: "/#projects" },
		{ name: "Skills", path: "/#skills" },
		{ name: "Contact", path: "/#contact" }
	]

	return (
		<header className="sticky top-0 left-0 right-0 z-20 bg-background/80 backdrop-blur-lg border-b border-black/5">
			<div className="max-w-7xl w-full h-16 mx-auto px-4 sm:px-6 flex items-center justify-between relative">
				<Link href="/" className="text-lg sm:text-xl tracking-tight font-pixel shrink-0">
					Andrew Del Rosario
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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

				{/* Desktop resume button */}
				<a
					href="/resume.pdf"
					download="Andrew_Del_Rosario_Resume.pdf"
					className="hidden md:inline-flex bg-primary text-secondary px-4 py-2 rounded-lg border-primary border"
				>
					Download Resume
				</a>

				{/* Mobile nav drawer */}
				<Drawer swipeDirection="right">
					<DrawerTrigger
						render={
							<button
								type="button"
								aria-label="Open menu"
								className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 hover:cursor-pointer"
							>
								<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
									<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						}
					/>
					<DrawerContent className="z-100">
						<DrawerHeader className="flex flex-row items-center justify-between border-b pb-4">
							<DrawerTitle className="font-pixel">Menu</DrawerTitle>
							<DrawerClose
								render={
									<button
										type="button"
										aria-label="Close menu"
										className="right-5 top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full hover:cursor-pointer"
									>
										<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								}
							/>
						</DrawerHeader>

						<nav className="flex-1 overflow-y-auto p-4">
							<ul className="flex flex-col gap-1">
								{navs.map((nav) => (
									<li key={nav.name}>
										<DrawerClose
											nativeButton={false}
											render={
												<Link
													href={nav.path}
													className={`block py-3 text-base ${pathname === nav.path ? "text-primary" : ""}`}
												>
													{nav.name}
												</Link>
											}
										/>
									</li>
								))}
							</ul>
						</nav>

						<div className="p-4 border-t border-black/5">
							<DrawerClose
								nativeButton={false}
								render={
									<a
										href="/resume.pdf"
										download="Andrew_Del_Rosario_Resume.pdf"
										className="inline-flex w-full items-center justify-center bg-primary text-secondary px-4 py-2 rounded-lg border-primary border"
									>
										Download Resume
									</a>
								}
							/>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	)
}