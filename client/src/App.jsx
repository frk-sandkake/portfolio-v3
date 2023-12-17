/** @format */
import "@radix-ui/themes/styles.css"
import "./theme-config.css"

import { Container, Section, Theme } from "@radix-ui/themes"
import { Heading } from "@radix-ui/themes"
import { Projects } from "./Projects"
import { GithubLatest } from "./GithubLatest"
import { Intro } from "./Intro"

function App() {
  return (
    <Theme accentColor='mint' grayColor='sand' radius='large' scaling='95%'>
      <>
        <Container className='mx-auto max-w-7xl p-2 min-h-screen'>
          <Heading as='h1' size='9'>
            Portfolio v3
          </Heading>
          <Section size='1' width='auto' p='4'>
            <Intro />
          </Section>
          <Section size='1' width='auto' p='4'>
            <Heading as='h2' mb='4'>
              My Noroff Projects
            </Heading>
            <Projects />
          </Section>
          <Section size='1' width='auto' p='4'>
            <Heading as='h2' mb='4'>
              Latest updated repos
            </Heading>
            <GithubLatest />
          </Section>
        </Container>
      </>
    </Theme>
  )
}

export default App
