import { Avatar, Box, Text, Tooltip, useColorModeValue } from "@chakra-ui/react";


export function Profile(){
    const profile = useColorModeValue("gray.800", "gray.50")
    const emailprofile = useColorModeValue("gray.600", "gray.300")


    return(
        <Box
        pos="absolute"
        top="20px"
        right="20px"
        display="flex"
        borderLeft="1px solid gray"
       >
           <Tooltip label="Lucas Ezidro">
            <Avatar 
                name="Lucas Ezidro" 
                src="https://avatars.githubusercontent.com/u/80000943?s=400&u=b21f6c09f033777855b7f1dd44a7bcd4c024cd92&v=4"
                pos="absolute"
                top="10px"
                right="10px"
                />
            </Tooltip>

                <Text
                    pos="absolute"
                    right="168px"
                    top="10px"
                    fontSize="15"
                    color={profile}
                >
                    Lucasezidro              
                </Text>

                <Text
                    pos="absolute"
                    right="80px"
                    top="30px"
                    fontSize="15"
                    color={emailprofile}
                >
                    lucasezidro7@gmail.com
                </Text>
       </Box>
    )
}