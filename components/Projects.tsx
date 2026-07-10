"use client"

import Section from "@/components/Section"
import { motion } from "framer-motion"
import Image from "next/image"

const Projects = ({ id }: { id: string }) => {

  const projects: {
    title: string,
    description: string,
    url: string,
    img_path: string
  }[] = [
    { 
      title: "Domain Name Server (DNS)",
      description: "Configured an authoritative DNS server using BIND9 on Ubuntu Server with custom zones, records, and name resolution.",
      url: "https://github.com/drewdelrosario/homelab-dns-recursive-server",
      img_path: "/images/dns-server.png"
    },
  ]


  return (
    <Section
      id={id}
      title="Projects"
      hook="What I've Built"
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {projects.map((p) => (
          <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              initial = {{
                scale: 0.8,
                opacity: 0
              }}

              whileInView={{
                scale: 1,
                opacity: 1
              }}

              transition={{
                duration: 0.6,
              }}

              viewport={{
                once: true,
                amount: 0.3
              }}

              className="bg-background shadow-2xl h-90 rounded-2xl flex flex-col items-center p-8"
            >
              <Image
                src={p.img_path}
                alt="DNS png"
                width={125}
                height={125}
                className="mb-6"
              />

              <h2 className="font-bold text-2xl mb-4">{p.title}</h2>
              <p className="text-center text-muted">{p.description}</p>

            </motion.div>
          </a>
          
        ))}
      </div>
    </Section>
  )
}

export default Projects