import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, Input, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { ButtonColorMode } from "./ButtonColorMode";
import { Logo } from "./Logo";
import { SidebarCourses } from "./SidebarCourses";

export function Sidebar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const buttonColor = useColorModeValue("purple.600", "yellow.300")
    const bgBody = useColorModeValue("gray.400", "gray.900")



    return(
        <Flex
            width="100vw" 
            height="100vh" 
            alignItems="center" 
            justifyContent="center"
            bg={bgBody}
        >
            <>
            <Button ref={btnRef} color={buttonColor} onClick={onOpen} top="70px" left="3" pos="absolute">
                <Icon as={HamburgerIcon} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader color={buttonColor}>JavaScript</DrawerHeader>

                <DrawerBody>
                    <SidebarCourses />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
            </>

            <ButtonColorMode />
            <Box pos="absolute" top="30px">
                <Logo />
            </Box>

            
            <video 
                title="O que é HTML"
                src="https://www.youtube.com/watch?v=E6CdIawPTh0&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&index=12"
                width="700px" 
                height="450px"
                controls
            >
                
            </video>
        </Flex>
    )
}