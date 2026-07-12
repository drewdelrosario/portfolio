"use client"

import Section from "@/components/Section"
import { motion } from "framer-motion"
import Image from "next/image"

const Skills = ({ id }: { id: string }) => {

  const skills: {
    title: string,
    img_path: string
  }[] = [
    {
      title: "HTML",
      img_path: "/images/icons/html5.svg"
    },
    {
      title: "CSS",
      img_path: "/images/icons/css.svg"
    },
    {
      title: "Tailwind",
      img_path: "/images/icons/tailwindcss.svg"
    },
    {
      title: "JavaScript",
      img_path: "/images/icons/javascript.svg"
    },
    {
      title: "TypeScript",
      img_path: "/images/icons/typescript.svg"
    },
    {
      title: "Node.js",
      img_path: "/images/icons/nodedotjs.svg"
    },
    {
      title: "React.js",
      img_path: "/images/icons/react.svg"
    },
    {
      title: "Next.js",
      img_path: "/images/icons/nextdotjs.svg"
    },
    {
      title: "Express.js",
      img_path: "/images/icons/express.svg"
    },
    {
      title: "PostgreSQL",
      img_path: "/images/icons/postgresql.svg"
    },
    {
      title: "BIND9",
      img_path: "/images/icons/bind9.svg"
    },
    {
      title: "Postfix",
      img_path: "/images/icons/postfix.svg"
    },
  ]

  return (
    <Section
      id={id}
      title="Skills"
      hook="What I Work With"
    >
      <motion.div
        className="h-auto flex flex-wrap gap-6"
      >
        {skills.map((s) => (
          <div 
            key={s.title}
            className="flex py-2 px-4 items-center justify-between bg-card shadow-sm border-zinc-200 rounded-full"
          >
            <Image src={s.img_path}
              alt={s.img_path}
              width={25}
              height={25}
              className="mr-3"
            />

            <h2 className="text-lg">{s.title}</h2>
          </div>
        ))}
      </motion.div>
    </Section>
  )
}

export default Skills