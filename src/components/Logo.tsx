import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

export function Logo(){
    const title = useColorModeValue("yellow.600", "yellow.400")
    const subTitle = useColorModeValue("purple.700", "purple.400")


    return(
        <Flex
            flexDir="column"
            
        >
            <Text
            as="h1"
            fontSize="34"
            align="center"
            fontFamily="Poppins"
            color={title}

        >
            Yellow
        </Text>

        <Text
            as="span"
            fontSize="18px"
            color={subTitle}
            mb="8"
            align="center"
            fontFamily="Patrick Hand"
        >
            Tecnology
        </Text>
      </Flex>
    )}