import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { GetServerSideProps } from "next"
import { WithSsrGuest } from "../utils/withSSRGuest"
import { Button, Flex, Icon, Input, InputGroup, InputRightElement, Link, Stack, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import { Logo } from "../components/Logo"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { ButtonColorMode } from "../components/ButtonColorMode"



export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')


  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password,
      username,
    }

    await signIn(data)

  }

  const bgBody = useColorModeValue("gray.400", "gray.900")
  const bg = useColorModeValue("gray.300", "gray.800")
  const linkColor = useColorModeValue("purple.800", "purple.400")
  const buttonColor = useColorModeValue("yellow.600", "yellow.400")
  const placehoder = useColorModeValue("gray.700", "gray.400")  
  const inputColor = useColorModeValue("gray.500", "gray.900")
  const hover = useColorModeValue("gray.400", "gray.700")
  const showButton = useColorModeValue("gray.900", "gray.50")


  return (
    <>
    <Head>
      <title>Yellow | Home</title>
    </Head>

    <Flex 
      width="100vw" 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
      bg={bgBody}
    >


        <ButtonColorMode />

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
                placeholder="Username"
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
                placeholder="E-mail"
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
                placeholder="Enter password"
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
              >
                  Sign in
                
              </Button>

              <Link
                href="/create"
                color={linkColor}
                align="center"
                transition="0.3s"
                _hover={{
                  textDecoration: "underline"
                }}
              >
                 Or create your account
              </Link>

            </Stack>

        </Flex>

    </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = WithSsrGuest(async (ctx) => { 
  return {
    props: {}
  }
})
