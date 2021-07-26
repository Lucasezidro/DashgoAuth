import { Box, Flex, Heading, Icon, LinkOverlay, Text, useColorModeValue } from "@chakra-ui/react";
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import Link from 'next/link'


export function Cards(){

    const bgCard = useColorModeValue("gray.600", "gray.800")
    const colorCard = useColorModeValue("gray.200", "gray.700")
    const txtColor = useColorModeValue("gray.800", "gray.300")
    const linkColor = useColorModeValue("gray.600", "gray.100")
    

    return(
    <Flex>
        <Box
            w="350px"
            h="300px"
            bg={bgCard}
            display="flex"
            mt="100px"
            mr="800px"
            borderRadius="10"
        >
            <Icon 
                as={FaHtml5}
                fontSize="80"
                pos="absolute"
                top="270px"
                left="170px"
                color="orange.500"
                />

            <Icon 
                as={FaCss3Alt}
                fontSize="80"
                pos="absolute"
                top="270px"
                left="310px"
                color="blue.500"
            />

            <Box
                pos="absolute"
                h="120px"
                w="350px"
                bottom="100px"
                bg={colorCard}
                borderRadius="0 0 10px 10px"
            >
                <Text
                    ml="4"
                    mt="4"
                    color={txtColor}
                >
                    <Link href="/courses/htmlcourse">
                        Html5 e CSS3 
                    </Link>
                </Text>

                    <Heading size="sm" my="2" fontSize="13" ml="2" color={linkColor}>
                        <LinkOverlay href="/courses/htmlcourse">
                            O curso de HTML5 e CSS3 é um curso para quem quer entrar no mundo do front-end,
                            um curso que será o ponta pé inicial!
                        </LinkOverlay>
                    </Heading>
            </Box>



        </Box>

        <Box
            w="350px"
            h="300px"
            bg={bgCard}
            display="flex"
            pos="absolute"
            top="200px"
            left="510px"
            borderRadius="10"
        >
            <Icon 
                as={DiJavascript1}
                fontSize="80"
                pos="absolute"
                top="50px"
                left="140px"
                color="yellow.500"
                />

            <Box
                pos="absolute"
                h="120px"
                w="350px"
                bottom="0px"
                bg={colorCard}
                borderRadius="0 0 10px 10px"
            >
                <Text
                    ml="4"
                    mt="4"
                    color={txtColor}
                >
                    <Link href="/courses/jscourse">
                        JavaScript
                    </Link>
                </Text>

                    <Heading size="sm" my="2" fontSize="13" ml="2" color={linkColor}>
                        <LinkOverlay href="/courses/jscourse">
                            Agora que você aprendeu a montar layouts diversos com HTML e CSS esta na hora de aprimorar os conhecimentos e avançar para as animações
                            ultilizando funções, DOM e muito mais!
                        </LinkOverlay>
                    </Heading>
            </Box>



        </Box>

        <Box
            w="350px"
            h="300px"
            bg={bgCard}
            display="flex"
            pos="absolute"
            top="200px"
            left="900px"
            borderRadius="10"
        >
            <Icon 
                as={FaReact}
                fontSize="80"
                pos="absolute"
                top="50px"
                left="140px"
                color="blue.400"
                />

            <Box
                pos="absolute"
                h="120px"
                w="350px"
                bottom="0px"
                bg={colorCard}
                borderRadius="0 0 10px 10px"
            >
                <Text
                    ml="4"
                    mt="4"
                    color={txtColor}
                >
                    <Link href="/reactcourse">
                        ReactJS
                    </Link>
                </Text>

                    <Heading size="sm" my="2" fontSize="13" ml="2" color={linkColor}>
                        <LinkOverlay href="/courses/reactcourse">
                            Vamos encaminhar seus estudos para o proximo level, onde vamos aprender ReactJS, todos os conceitos, ultilizando react hooks, nextJS entre outros!
                        </LinkOverlay>
                    </Heading>
            </Box>



        </Box>
       
    </Flex>
    )
}