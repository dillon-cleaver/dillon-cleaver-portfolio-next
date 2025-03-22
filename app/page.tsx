import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  )
}

