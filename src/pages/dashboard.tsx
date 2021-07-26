import { Button, Flex, Icon, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { ButtonColorMode } from "../components/ButtonColorMode"
import { AuthContext } from "../context/AuthContext"
import { setupApiClient } from "../services/api"
import { api } from "../services/apiClient"
import { WithSSRAuth } from "../utils/withSSRAuth"
import { FaSignOutAlt } from 'react-icons/fa'

export default function Dashboard(){
    const { user, signOut } = useContext(AuthContext)

    useEffect(() => {
        api.get('/me').then(response => console.log(response))
        .catch(err => console.log(err))
    }, [])


    const bgBody = useColorModeValue("gray.400", "gray.900")
    const title = useColorModeValue("gray.800", "gray.100")
    const icons = useColorModeValue("purple.600", "yellow.400")


    return(
        <Flex
        width="100vw" 
        height="100vh" 
        alignItems="center" 
        justifyContent="center"
        bg={bgBody}
        >

            <ButtonColorMode />

            <Tooltip label="Sign Out">
                <Button
                    pos="absolute"
                    top="70px"
                    left="3"
                    onClick={signOut}
                >
                    <Icon as={FaSignOutAlt} color={icons} />
                </Button>
            </Tooltip>

            <Text
                as="h1"
                pos="absolute"
                top="20px"
                alignItems="center"
                fontSize="30"
                fontWeight="bold"
                color={title}                

            >
                Welcome {user.username}!
            </Text>

        </Flex>
    )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx)
    await apiClient.get('/me')

    return {
        props: {}
    }
})