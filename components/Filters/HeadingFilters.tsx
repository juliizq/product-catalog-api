import { Text } from '@chakra-ui/react'
import React from 'react'

export interface IText {
  child : string;
}

export default function HeadingFilters({child}: IText) {
  return (
    <Text
      fontWeight={'600'}
      fontSize={['xs','sm','md','lg']}
      mb={'2px'}
    >
      {child}
    </Text>
  )
}
