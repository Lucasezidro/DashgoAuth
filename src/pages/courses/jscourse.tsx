import { Flex } from "@chakra-ui/react";
import Head from 'next/head'
import { Sidebar } from "../../components/Sidebar";

interface CursoProps {
    name: string;

}

export default function JsCourse({name}: CursoProps){
    return(
        <>
        <Head>
            <title>Yellow | JavaScript course</title>
        </Head>

        <Flex>
            <Sidebar />
        </Flex>
        </>
    )
}