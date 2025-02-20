import { Flex, Box, Image, Text } from "@mantine/core"
import Header from "../components/header"
import RegisterCTA from "../components/home/register-cta"
import { useMediaQuery } from "@mantine/hooks"
import SpeakersGrid from "../components/home/speaker-grid";
import CircularCarousel from "../components/home/nav-carousel";

export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");

    const titleFontSize = isMobile ? "2rem" : "2.5rem";
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box mt={isMobile? '50vh' : '80vh'} mb={'20vh'}>
            <SpeakersGrid />
            <Flex direction={'column'} gap={'3rem'} justify={'center'} align={'center'} h={ isMobile ? '50vh' :'100vh'} my={'5rem'}>
              <Text
                fw="bold"
                c="#FF9C82"
                size={titleFontSize}
                w={'80%'}
                ta="center"
                style={{ fontFamily: "'Cinzel Decorative', cursive" }}
              >
                Explore our festival
              </Text>
              <CircularCarousel />
            </Flex>
            <RegisterCTA />
            <Box mt={'5rem'}>

            {(isMobile || isTablet) ? (
            <Flex
              direction={isMobile ? "column" : "row"}
              gap="md"
              justify="center"
              align="center"
              style={{
                minHeight: isMobile ? "auto" : "100vh",
              }}
            >
              <Image
                src="/dsgroup.svg"
                style={{
                  width: isMobile ? "50%" : "45%",
                  maxWidth: "100%",
                }}
              />
              <Image
                src={isMobile ? "/dulit-logo-mobile.svg" : "/dulit-logo.svg"}
                style={{
                  width: isMobile ? "50%" : "45%",
                  maxWidth: "100%",
                }}
              />
            </Flex>
          ) : (
            <Image
              src="/dulit-fest-logo.svg" // or replace with your desired desktop image
              style={{
                width: "60%",
                maxWidth: "100%",
                display: "block",
                margin: "0 auto",
              }}
            />
          )}
            </Box>

          </Box>
        </div>
    )
}