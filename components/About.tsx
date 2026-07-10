
import Section from "@/components/Section"

const About = ({ id }: { id: string }) => {
  return (
    <Section id={id}>
      <h2 className="text-3xl font-pixel text-center mb-4">About Me</h2>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quidem nostrum ipsa maxime et vero minus nam neque voluptatibus quas doloribus, recusandae odio obcaecati excepturi animi repellat qui corrupti itaque?</p>
    </Section>
  )
}

export default About