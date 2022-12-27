import { Box, Center, Link } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
  return (
    <Center p={['.4rem','.6rem','.8rem','1rem']} flexDirection={'column'}>
      <Box>
        Developed with ♥ by&nbsp;
        <Link href='https://portfolio-juliana-izquierdo.vercel.app/' isExternal fontFamily={'detail'}>
          Juliana Izquierdo
        </Link>
        .&nbsp;        
      </Box>
      <Box>
          Watch design in&nbsp;
        <Link href='https://dribbble.com/shots/19274487-Potland-Catalog' isExternal fontFamily={'detail'}>
          Dribble
        </Link>
        .        
      </Box>
    </Center>
  )
}
