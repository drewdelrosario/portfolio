
import Section from "@/components/Section"
import Image from "next/image"

const contacts: {
    url: string,
    name: string,
    img_path: string
  }[] = [
    { url: "mailto:drew.delrosario@outlook.com", name: "drew.delrosario@outlook.com", img_path: "/images/icons/email.svg"},
    { url: "tel:+639930781784", name: "+639930781784", img_path: "/images/icons/telephone.svg"},
    { url: "https://github.com/drewdelrosario", name: "drewdelrosario", img_path: "/images/icons/github.svg"},
    { url: "https://linkedin.com/in/drewdelrosario", name: "drewdelrosario", img_path: "/images/icons/linkedin.svg"}
    
  ]

function getLabel(url: string) {
  if (url.startsWith("mailto:")) return "email";
  if (url.startsWith("tel:")) return "phone";
  if (url.includes("github.com")) return "github";
  if (url.includes("linkedin.com")) return "linkedin";
  return "link";
}

const Contact = ({ id }: { id: string }) => {

  return (
    <Section
      id={id}
      title="Contact"
      hook="Let&apos;s Connect"
      className="max-w-4xl!"
    >
      <div className="overflow-hidden rounded-lg border border-(--border) bg-card shadow-sm">
        {/* terminal chrome */}
        <div className="flex items-center gap-2 border-b border-(--border) bg-secondary px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-(--border)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--border)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--border)" />
          <span className="ml-2 font-mono text-xs text-muted">~/contact</span>
        </div>

        {/* rows */}
        <div>
          {contacts.map((contact, i) => (
            <a
              key={contact.url}
              href={contact.url}
              target={contact.url.startsWith("http") ? "_blank" : undefined}
              rel={contact.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 px-5 py-4 transition-colors motion-reduce:transition-none hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                i !== contacts.length - 1 ? "border-b border-(--border)" : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-secondary transition-colors group-hover:bg-primary/20">
                <Image
                  src={contact.img_path}
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-70 transition group-hover:opacity-100"
                />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {getLabel(contact.url)}
                </span>
                <span className="truncate text-sm text-foreground transition-colors group-hover:text-primary sm:text-base">
                  {contact.name}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact