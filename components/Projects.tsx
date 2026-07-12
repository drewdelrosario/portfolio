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
      title: "Domain Name System (DNS)",
      description:
        "Built a multi-server DNS infrastructure on Ubuntu Server using BIND9 with separate Root, Authoritative, and Recursive DNS servers. Configured zone delegation, DNS records, and end-to-end name resolution.",
      url: "https://github.com/drewdelrosario/homelab-dns-server",
      img_path: "/images/thumbnails/dns-server.svg"
    },
    {
      title: "Mail Server",
      description:
        "Built a self-hosted mail server on Ubuntu Server using Postfix. Configured local user accounts for mail delivery, and tested end-to-end email transmission within a homelab environment.",
      url: "https://github.com/drewdelrosario/homelab-mail-server",
      img_path: "/images/thumbnails/mail-server.svg"
    }
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
                scale: 0.9,
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

              className="bg-card shadow-sm border-zinc-200 h-96 rounded-2xl flex flex-col items-center p-8"
            >
              <Image
                src={p.img_path}
                alt="DNS png"
                width={125}
                height={125}
                className="mb-6"
              />

              <h2 className="font-bold text-2xl mb-auto">{p.title}</h2>
              <p className="text-center text-muted">{p.description}</p>

            </motion.div>
          </a>
          
        ))}
      </div>
    </Section>
  )
}

export default Projects