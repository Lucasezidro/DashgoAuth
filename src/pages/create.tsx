import { Button, Flex, Icon, Input, InputGroup, InputRightElement, Stack, Tooltip, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import { FormEvent, useContext, useState } from "react"
import { ButtonColorMode } from "../components/ButtonColorMode"
import { Profile } from "../components/profile"
import { AuthContext } from "../context/AuthContext"
import { setupApiClient } from "../services/api"
import { FaSignOutAlt } from 'react-icons/fa'
import { WithSSRAuth } from "../utils/withSSRAuth"
import { Logo } from "../components/Logo"
import { RepeatClockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

export default function CreateAccount(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const { user, signOut, signIn } = useContext(AuthContext)    
    
    const bgBody = useColorModeValue("gray.400", "gray.900")
    const icons = useColorModeValue("purple.600", "yellow.400")
    const bg = useColorModeValue("gray.300", "gray.800")
    const placehoder = useColorModeValue("gray.700", "gray.400")  
    const inputColor = useColorModeValue("gray.500", "gray.900")
    const hover = useColorModeValue("gray.400", "gray.700")
    const buttonColor = useColorModeValue("yellow.600", "yellow.400")
    const showButton = useColorModeValue("gray.900", "gray.50")

    async function backDashboard() {
            await router.push('/dashboard')
        
    }

    async function createAccount(){
        if(user) {
            await router.push('/')
        }
    }


    async function handleSubmit(event: FormEvent) {

        event.preventDefault()
    
        const data = {
          email,
          password,
          username,
        }
    
        await signIn(data)
    
      }
        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)

    return(
        <>
            <Head>
                <title>Create your account</title>
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

            <Tooltip label="Back Dashboard">
                <Button
                    pos="absolute"
                    top="130px"
                    left="3"
                    onClick={backDashboard}
                >
                    <Icon as={RepeatClockIcon} color={icons} />
                </Button>
            </Tooltip>


            <Flex
                as="form" 
                width="100%" 
                maxWidth={360}
                bg={bg}
                p="8"
                borderRadius={8}
                flexDir="column"
                onSubmit={handleSubmit}
        >

          <Stack spacing="4">

           <Logo />

           <Input 
                name="name"
                type="text"
                focusBorderColor="yellow.600"
                bg={inputColor}
                transition="0.4s"
                placeholder="Choose a username"
                _placeholder={{
                  color: placehoder
                }}
                _hover={{
                  bg: hover
                }}
                size="lg"
                variant="filled"
                value={username}
                onChange={e => setUsername(e.target.value)}
                

              />
           
              <Input 
                name="email"
                type="email"
                focusBorderColor="yellow.600"
                bg={inputColor}
                transition="0.4s"
                placeholder="Your best e-mail"
                _placeholder={{
                  color: placehoder
                }}
                _hover={{
                  bg: hover
                }}
                size="lg"
                variant="filled"
                value={email}
                onChange={e => setEmail(e.target.value)}
                

              />
            <InputGroup flexDir="column">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                bg={inputColor}
                focusBorderColor="yellow.600"
                variant="filled"
                placeholder="Password"
                transition="0.4s"
                _placeholder={{
                  color: placehoder
                }}
                _hover={{
                  bg: hover
                }}
                size="lg"
                value={password}
                onChange={e => setPassword(e.target.value)}
                

              />

                
                  <InputRightElement width="4.5rem">
                    <Button mt="1" h="1.75rem" size="sm" onClick={handleClick} bg={inputColor} _hover={{bg: hover}}>
                      {show ? <Icon 
                                as={ViewOffIcon} 
                                color={showButton}

                                /> 
                                
                                : 
                                
                                <Icon 
                                  as={ViewIcon} 
                                  color={showButton}
                                  
                                  />}
                    </Button>
                  </InputRightElement>

              </InputGroup>

              <Button
                 type="submit" 
                 bg={buttonColor}
                 colorScheme="yellow.600" 
                 size="lg "
                 p="3"
                 transition="0.6s"
                 _hover={{
                   bg: "yellow.500"
                 }}
                 onClick={createAccount}
              >
                  Create Account
                
              </Button>

            </Stack>

        </Flex>

            </Flex>


        </>
    )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx)
    const response = await apiClient.get('/me')

    return {
        props: {}
    }
})