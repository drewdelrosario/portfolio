import Image from "next/image"
import Section from "@/components/Section"
import Link from "next/link"

const Hero = () => {
	return (
		<Section className="flex flex-col-reverse lg:flex-row lg:h-185 lg:box-content relative mt-0 max-w-7xl gap-12 lg:gap-0 py-16 lg:py-0">
			<div className="flex flex-1 px-4 items-stretch lg:items-center">
				<div className="flex flex-col space-y-4 items-center lg:items-start">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-pixel">Andrew Del Rosario</h1>

					<p className="text-lg sm:text-xl text-muted">Cybersecurity Enthusiast</p>
					
					<p className="text-base text-muted text-center lg:text-left">
						Passionate about cybersecurity, networking, and hands-on problem solving. I explore Linux and infrastructure, document my projects,
						and keep leveling up my skills. Currently immersed in self-study and homelab experiments — turning curiosity into real ability.
					</p>

					<div className="flex flex-wrap gap-3 sm:gap-4">
						<Link href={"#projects"}
							className="bg-primary text-secondary px-4 py-2 rounded-lg border-primary border"
						>View Projects</Link>
						<a href={"mailto:drew.delrosario@outlook.com"}
							className="bg-background text-primary px-4 py-2 rounded-lg border-primary border"
						>Contact Me</a>
					</div>
				</div>
			</div>

			<div className="flex w-auto px-4 justify-center items-center">
				<div className="relative">
					<Image 
						loading="eager"
						src={"/images/me/me-01-transparent.png"}
						alt="me"
						width={592}
						height={740}
						draggable={false}
						className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none lg:w-[592px] h-auto"
					/>
					<div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 w-40 h-48 sm:w-60 sm:h-72 md:w-80 md:h-96 lg:w-125 lg:h-150 rounded-full bg-primary/10 blur-3xl -z-10" />
					<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
				</div>
			</div>
		</Section>
	)
}

export default Hero