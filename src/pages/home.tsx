import { Flex, Box, Image } from "@mantine/core"
import Header from "../components/header"
import RegisterCTA from "../components/home/register-cta"
import { useMediaQuery } from "@mantine/hooks"


export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box mt={isMobile? '30vh' : '100vh'}>
            
            <RegisterCTA />

            <Flex 
                direction={isMobile ? "column" : "row"} // Switches to column on mobile
                h={isMobile? '60vh' :"100vh"} 
                gap="md" 
                justify="center" 
                align="center" 
                w="75%" 
                m="auto"
            >
                <Image src="/dsgroup.svg" w={isMobile ? '40%' : '100%'} />
                <Image src={isMobile ? '/dulit-logo-mobile.svg' : '/dulit-logo.svg'} w={isMobile ? '50%' : '100%'} />
            </Flex>
          </Box>
        </div>
    )
}