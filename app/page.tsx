import Button from "@/components/Button"
import clsx from "clsx"
import { GeistPixelSquare } from "geist/font/pixel"
import Image from "next/image"

const Section = ({
	className,
	children
} : {
	className?: string,
	children?: React.ReactNode
}) => {
	return (
		<section className={clsx(
			"max-w-7xl w-full mx-auto px-6 py-8",
			className
		)}>
			{children}
		</section>
	)
}

const Home = () => {

  return (
		<>
			<Section className="flex h-185 box-content relative">
				<div className="flex flex-1 px-4 items-center">
					<div className="flex flex-col space-y-4">
						<h1 className={`text-5xl ${GeistPixelSquare.className}`}>Andrew Del Rosario</h1>

						<p className="text-xl text-muted">Cybersecurity Enthusiast</p>
						
						<p className="text-base text-muted">
							Passionate about cybersecurity and building practical solutions through hands-on learning. I enjoy exploring Linux, networking, and infrastructure while documenting my projects and continuously expanding my technical skills.
						</p>

						<div className="flex gap-x-4">
							<Button primary>View Projects</Button>
							<Button>Contact Me</Button>
						</div>
					</div>
				</div>

				<div className="flex flex-1 px-4 justify-center items-center">
					<div className="relative ">
						<Image 
							loading="eager"
							src={"/images/me-01-transparent.png"}
							alt="me"
							width={592}
							height={740}
							draggable={false}
						/>
						<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-primary/10 blur-3xl -z-10" />
						<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-background" />
					</div>
				</div>
			</Section>
		</>
  )
}

export default Home