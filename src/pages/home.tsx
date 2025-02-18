import { Flex, Box, Image } from "@mantine/core"
import Header from "../components/header"
import RegisterCTA from "../components/home/register-cta"
import { useMediaQuery } from "@mantine/hooks"
import SpeakersGrid from "../components/home/speaker-grid";


export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box mt={isMobile? '50vh' : '80vh'} mb={'20vh'}>
            <SpeakersGrid />
            <RegisterCTA />
            <Flex
      direction={isMobile ? "column" : "row"}
      gap="md"
      justify="center"
      align="center"
      w="90%"
      m="auto"
      style={{
        minHeight: isMobile ? "auto" : "100vh",
      }}
    >
      <Image
        src="/dsgroup.svg"
        style={{
          width: isMobile ? "50%" : isTablet ? "45%" : "80%",
          maxWidth: "100%",
        }}
      />
      <Image
        src={isMobile ? "/dulit-logo-mobile.svg" : "/dulit-logo.svg"}
        style={{
          width: isMobile ? "50%" : isTablet ? "45%" : "80%",
          maxWidth: "100%",
        }}
      />
    </Flex>
          </Box>
        </div>
    )
}