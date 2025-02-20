import { Box, Flex, Image, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Header() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 768px)");

    // Intersection Observer Hook (Triggers only once)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Framer Motion Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <Box>
            {/* Background Image */}
            <Image
                pos="absolute"
                src={isMobile ? "/landing-page-mobile.svg" : "/landing-page.svg"}
                w="100vw"
                h={{ base: "100vh", md: "auto" }}
                fit="cover"
            />

            {/* Wrap the entire content in motion.div */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
            >
                {/* Animated Content */}
                <Flex
                    direction="column"
                    py={isMobile ? "7.5%" : "5%"}
                    pos="relative"
                    align="center"
                    justify="center"
                >
                    {/* Logos */}
                    <Flex direction={{ base: "column", lg: "row" }} justify="space-between" gap="md" align="center">
                        <Image src="/dsgroup.svg" w={{ base: "75px", lg: "auto" }} />
                        <Image src={isMobile ? "/dulit-logo-mobile.svg" : "/dulit-logo.svg"} w={{ base: "100px", lg: "auto" }} />
                    </Flex>

                    {/* Date */}
                    <Flex mt={{ base: "2rem", lg: "4rem" }} align="baseline" gap="0.25rem">
                        <Text size={isMobile ? "1.25rem" : "2rem"} className="roboto-condensed" fw="bold" c="#231F20">FEB</Text>
                        <Text c="#135EB7" size={isMobile ? "1.75rem" : "3rem"} fw="bold" className="amiri">21-22-23</Text>
                        <Text size={isMobile ? "1.25rem" : "2rem"} className="roboto-condensed" fw="bold" c="#231F20">2025</Text>
                    </Flex>

                    {/* Divider */}
                    <Image my={isMobile ? "xs" : "sm"} src="/custom-divider.svg" w={isMobile ? "50%" : "25%"} />

                    {/* College Name */}
                    <Flex direction="column" align="center" gap={isMobile ? "" : "xs"} my={isMobile ? "" : "sm"}>
                        <Text className="playfair-stroke" ta="center" size={isMobile ? "sm" : "1.75rem"} fw="bold" c="#231F20">
                            SHRI RAM COLLEGE OF COMMERCE
                        </Text>
                        <Text className="playfair-stroke" ta="center" size={isMobile ? "xs" : "1.75rem"} c="#135EB7">
                            UNIVERSITY OF DELHI
                        </Text>
                    </Flex>

                    {/* Register Button */}
                    <Button my="lg" radius="lg" color="#135EB7" size={isMobile ? "md" : "xl"} onClick={() => navigate('/registration')}>
                        <Text fw="bold" size={isMobile ? "1.25rem" : "2rem"} className="cinzel">Register</Text>
                    </Button>
                </Flex>
            </motion.div>
        </Box>
    );
}
