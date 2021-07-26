import { useColorMode, Button, Icon, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"


export function ButtonColorMode(){
    const { colorMode, toggleColorMode } = useColorMode()

    const buttonColor = useColorModeValue("purple.600", "yellow.300")

    return(
      <Tooltip label={colorMode === "dark" ? "Light theme" : "Dark theme"}>
        <Button
          pos="absolute"
          left="10px"
          top="10px"
          onClick={toggleColorMode}
          opacity="0.8"
          color={buttonColor}
          _hover={{opacity: "1"}}
        >
          { colorMode === "light" ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />  }
        </Button>
      </Tooltip>
    )   
}
