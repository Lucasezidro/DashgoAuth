import { Flex, useColorModeValue, Link } from '@chakra-ui/react'

export function SidebarCourses(){
    const txtColor = useColorModeValue("gray.800", "gray.100")

    return(
        <Flex display="flex" flexDir="column">
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>O que é HTML</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>O que é CSS</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>Principais Tags</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>Construindo o primeiro esqueleto da pagina</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>Adicionando estilos</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>Classes vs Id</Link>
            <Link href="#" color={txtColor} textDecoration="underline" mt="4" _hover={{filter: "brightness(0.8)"}}>Margin e Padding</Link>
        </Flex>
    )
}