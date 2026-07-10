import Image from "next/image"
import Button from "@/components/Button"
import { GeistPixelSquare } from "geist/font/pixel"
import Section from "@/components/Section"

const Hero = () => {
	return (
		<Section className="flex h-185 box-content relative mt-0 max-w-7xl">
			<div className="flex flex-1 px-4 items-center">
				<div className="flex flex-col space-y-4">
					<h1 className="text-5xl md:text-6xl font-pixel">Andrew Del Rosario</h1>

					<p className="text-xl text-muted">Cybersecurity Enthusiast</p>
					
					<p className="text-base text-muted">
						Passionate about cybersecurity, networking, and hands-on problem solving. I explore Linux and infrastructure, document my projects,
						and keep leveling up my skills. Currently immersed in self-study and homelab experiments — turning curiosity into real ability.
					</p>

					<div className="flex gap-x-4">
						<Button primary>View Projects</Button>
						<Button>Contact Me</Button>
					</div>
				</div>
			</div>

			<div className="flex w-auto px-4 justify-center items-center">
				<div className="relative ">
					<Image 
						loading="eager"
						src={"/images/me-01-transparent.png"}
						alt="me"
						width={592}
						height={740}
						draggable={false}
					/>
					<div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/3 w-125 h-150 rounded-full bg-primary/10 blur-3xl -z-10" />
					<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
				</div>
			</div>
		</Section>
	)
}

export default Hero