/** @format */

import { AvatarIcon } from "@radix-ui/react-icons"
import { Avatar, Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import IntroImage from "./assets/unicorn-me-open-smile-200x200.jpg"

export function Intro() {
  return (
    <Flex wrap='wrap' justify='center' gap='4'>
      <Avatar
        radius='full'
        variant='solid'
        size='8'
        src={IntroImage}
        fallback={<AvatarIcon />}
      />
      <Box>
        <Heading as='h2' size='6'>
          Finding my digital voice
        </Heading>
        <Text>
          This portfolio's design plays with styles from the 80s & 90s
        </Text>
        <Text as='p' size='3' align='center' ml='9'>
          XOXO
        </Text>
        <Text as='p' size='3' align='right'>
          frk.Sandkake
        </Text>
      </Box>
    </Flex>
  )
}
