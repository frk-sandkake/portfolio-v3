/** @format */

import { useEffect, useState } from "react"
import { GET_USER, baseService } from "./api"
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes"
import { AvatarIcon } from "@radix-ui/react-icons"
import timeFormat from "./utils"

export const GithubLatest = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const getData = async () => {
      let response = await baseService.get(
        `/${GET_USER}/repos?per_page=6&sort=updated_at`
      )
      setRepos(response.data)
    }
    getData()
  }, [])

  const latestUpdated = repos.map((repo) => {
    const dateForm = timeFormat(repo.updated_at)

    return (
      <li className='w-full'>
        <Card
          key={repo.id}
          size='2'
          style={{ maxWidth: 400 }}
          className='mx-auto'
        >
          <Flex direction='column' gap='2' px='2'>
            <Box className='pb-2 border-b border-cyan-700'>
              <Heading as='h3' size='4'>
                {repo.name}
              </Heading>
              <Text as='p' size='1' trim='both' weight='light' align='right'>
                Updated: {dateForm}
              </Text>
            </Box>
            <Text as='p' size='2' align='center'>
              {repo.description}
            </Text>
          </Flex>

          <Inset clip='padding-box' side='bottom' pb='0'>
            <footer className='px-6 py-2'>
              <Flex wrap='wrap'>
                {repo.topics
                  ? repo.topics.map((topic) => {
                      return (
                        <Text
                          as='span'
                          size='1'
                          mr='2'
                          color='orange'
                          highContrast
                        >
                          #{topic}
                        </Text>
                      )
                    })
                  : ""}
              </Flex>

              <Flex direction='row' justify='end' gap='3' pl='2' pt='2'>
                <Avatar
                  radius='full'
                  variant='solid'
                  src={repo.owner.avatar_url}
                  fallback={<AvatarIcon />}
                />
                <Box as='div'>
                  <Text as='p' size='1'>
                    {repo.owner.login}
                  </Text>
                  <Flex gap='4' pb='2'>
                    {repo.html_url ? (
                      <Link href={repo.html_url} size='2'>
                        Repo_🡭
                      </Link>
                    ) : (
                      ""
                    )}
                    {repo.homepage ? (
                      <Link href={repo.homepage} size='2'>
                        Host_🡭
                      </Link>
                    ) : (
                      ""
                    )}
                  </Flex>
                </Box>
              </Flex>
            </footer>
          </Inset>
        </Card>
      </li>
    )
  })
  return (
    <ul className='mx-auto flex flex-row flex-wrap justify-evenly items-center gap-4'>
      {latestUpdated}
    </ul>
  )
}
