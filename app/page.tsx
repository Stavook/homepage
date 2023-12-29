import Intro from "@/components/intro";
import SectionDivider from '@/components/section-divider';
import About from '@/components/about'
import Projects from '@/components/projects'
import Work from '@/components/work'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="">
      <Intro />
      <SectionDivider/>
      <About />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}
