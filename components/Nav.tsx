import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Nav() {
  return (
    <Flex
      justifyContent={["center"]}
      flexDirection={"column"}
      alignItems={"center"}
      h={["250px", "350px", "450px"]}
    >
      <Text
        fontSize={[".4rem", ".6rem", ".8rem", "1rem"]}
        fontFamily={"Space Grotesk, sans-serif"}
      >
        *132 plants.
      </Text>
      <Heading
        fontSize={["2.25rem", "3rem", "5.5rem", "6.5rem"]}
        mb={["10px"]}
        letterSpacing={"5px"}
      >
        CATALOG
      </Heading>
      <Text
        fontSize={["xs", "sm", "md", "lg"]}
        textAlign={"center"}
        whiteSpace={"pre-line"}
        px={['30px']}
      >
        {
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam quo est? \n Atque possimus eaque hic doloremque! Vero architecto autem."
        }
      </Text>
    </Flex>
  );
}
