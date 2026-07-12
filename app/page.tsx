import Button from "@/components/Button"
import clsx from "clsx"
import { GeistPixelSquare } from "geist/font/pixel"
import Image from "next/image"
import { motion } from "framer-motion"

import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"


const Home = () => {
  return (
		<>
			<Hero />
			<Projects id="projects"/>
			<Skills id="skills"/>
			<Contact id="contact"/>
		</>
  )
}

export default Home