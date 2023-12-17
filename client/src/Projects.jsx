/** @format */
import projects from "./projects.json"
import { Card, Flex, Heading, Inset, Link, Text } from "@radix-ui/themes"

export function Projects() {
  const noroffProjects = projects.map((project) => {
    return (
      <li key={project.id} className='w-full'>
        <Card size='2' style={{ maxWidth: 400 }} className='mx-auto'>
          <Inset clip='padding-box' side='top' pb='current'>
            <img
              src={project.image}
              alt='Bold typo'
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 180,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Heading as='h3' size='4'>
            {project.title}
          </Heading>
          <Text as='p' size='3'>
            {project.description}
          </Text>
          <Flex gap='4'>
            <Link href={project.repo}>Repo_🡭</Link>
            <Link href={project.host}>Host_🡭</Link>
          </Flex>
        </Card>
      </li>
    )
  })
  return (
    <ul className='mx-auto flex flex-col justify-evenly items-center gap-4 md:flex-row '>
      {noroffProjects}
    </ul>
  )
}
