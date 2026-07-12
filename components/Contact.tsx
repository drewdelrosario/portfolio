
import Section from "@/components/Section"
import Image from "next/image"

const Contact = ({ id }: { id: string }) => {

  const contacts: {
    url: string,
    name: string,
    img_path: string
  }[] = [
    { url: "mailto:drew.delrosario@outlook.com", name: "drew.delrosario@outlook.com", img_path: "/images/icons/email.svg"},
    { url: "https://github.com/drewdelrosario", name: "drewdelrosario", img_path: "/images/icons/github.svg"},
    { url: "https://linkedin.com/in/drewdelrosario", name: "drewdelrosario", img_path: "/images/icons/linkedin.svg"}
  ]

  return (
    <Section
      id={id}
      title="Contact"
      hook="Get in Touch"
    >
      <div className="flex flex-col items-center">
        <p className="max-w-5xl text-center text-muted mb-16">
          I'm currently building homelab projects and looking for opportunities to learn, collaborate, and gain experience in cybersecurity and IT infrastructure.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((c) => (
            <a
              key={c.url}
              href={c.url}
              className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900"
              target="_blank"
              rel="noopener noreferrer" 
            >
              <Image
                src={c.img_path}
                alt={c.img_path}
                width={25}
                height={25}
              >
                
              </Image>
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact