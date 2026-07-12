"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

const Section = ({
	className,
	children,
	id,
	title,
	hook
} : {
	className?: string,
	children?: React.ReactNode,
	id?: string,
	title?: string,
	hook?: string
}) => {
	return (
		<motion.section
			initial={{
				opacity: 0,
				y: 40
			}}

			whileInView={{
				opacity: 1,
				y: 0
			}}

			transition={{
				duration: 0.6,
			}}

			viewport={{
				once: true,
				amount: 0.3
			}}

			id={id}
			className={clsx(
			"max-w-7xl w-full mx-auto px-6 py-8 my-18 scroll-mt-20",
			className
		)}>
			{title && hook && (
				<div className="flex flex-col items-center text-center mb-16">
					<span className="font-pixel text-primary font-bold">
						{title.toUpperCase()}
					</span>
					<h2 className="my-4 font-bold text-5xl">{hook}</h2>
					<div className="border-t-6 border-primary w-16 rounded-full"/>
				</div>
			)}
			{children}
		</motion.section>
	)
}

export default Section