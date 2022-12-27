import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      m={["10px 0"]}
      flexDirection={"column"}
    >
      <Heading
        mb={["10px"]}
        fontSize={["md", "lg", "xl", "2xl"]}
        cursor={"pointer"}
      >
        LOGO
      </Heading>
      <hr style={{ width: "97%", borderColor: "#b8b5b1", height: "4px" }} />
    </Flex>
  );
}
