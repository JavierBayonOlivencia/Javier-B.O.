import "./App.css"
import { ReactLenis } from 'lenis/react'
import { lazy } from "react"

import Brief from "./components/Brief"
import Header from "./components/Header"
import Navbar from "./components/Navbar"

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Works = lazy(() => import("./components/Works"));
const Section = lazy(() => import("./components/Section"));

function App() {

  return (
    <>
      <ReactLenis root />
      <Navbar />

      <main className="h-min p-s pb-l flex gap-10 direction-col">
        <Section id="home">
          <Header isBorders={false}>
            <h1>Front end developer and UX/UI designer</h1>
            <Brief />
          </Header>
        </Section>

        <Section id="skill">
          <Header isBorders={true}>
            <h2>What I Can do</h2>
          </Header>
          <Skills />
        </Section>

        <Section id="work">
          <Header isBorders={true}>
            <h2>My Work</h2>
          </Header>
          <Works />
        </Section>

        <Section id="about">
          <Header isBorders={true}>
            <h2>A little bit about me</h2>
          </Header>
          <About />
        </Section>
      </main>
    </>
  )
}

export default App