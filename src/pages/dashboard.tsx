import { Avatar, Badge, Box, Button, Flex, Icon, Image, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { useContext, useEffect } from "react"
import { ButtonColorMode } from "../components/ButtonColorMode"
import { AuthContext } from "../context/AuthContext"
import { setupApiClient } from "../services/api"
import { api } from "../services/apiClient"
import { WithSSRAuth } from "../utils/withSSRAuth"
import { FaSignOutAlt } from 'react-icons/fa'
import { RiAccountBoxLine } from 'react-icons/ri'
import Head from "next/head"
import { Cards } from "../components/cards"
import { Profile } from "../components/profile"
import Link from "next/link"


export default function Dashboard(){
    const { user, signOut } = useContext(AuthContext)    

    useEffect(() => {
        api.get('/me').then(response => console.log(response))
        .catch(err => console.log(err))
    }, [])

    


    const bgBody = useColorModeValue("gray.400", "gray.900")
    const title = useColorModeValue("gray.800", "purple.400")
    const icons = useColorModeValue("purple.600", "yellow.400")
    


    return(
        <>

        <Head>
            <title>Yellow | dashboard</title>
        </Head>

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

            <Tooltip label="Create Account" >
                <Button
                    pos="absolute"
                    top="130px"
                    left="3"
                >
                    <Link href="/create">
                        <Icon as={RiAccountBoxLine} color={icons}/>
                    </Link>

                </Button>
            </Tooltip>

            <Text
                as="h1"
                pos="absolute"
                top="20px"
                alignItems="center"
                fontSize="30"
                fontWeight="bold"
                color={icons}                

            >
                Welcome to Yellow!
            </Text>

            <Text
                pos="absolute"
                top="100px"
                fontSize="24"
                color={title}
            >
                What are we going to study today?
            </Text>

            <Profile />

            <Cards />


        </Flex>
        </>
        
    )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx)
    await apiClient.get('/me')
    

    return {
        props: {}
    }
})