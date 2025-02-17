import { Flex, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RegisterCTA() {
    const navigate = useNavigate();

    // Intersection Observer Hook (Triggers only once)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    // Framer Motion Variants (Down to Up)
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
        >
            <Flex direction="column" justify="center" align="center" h="100vh">
                <Text
                    fw="bold"
                    c="#FF9C82"
                    size="2.5rem"
                    ta="center"
                    style={{ fontFamily: "'Cinzel Decorative', cursive" }}
                >
                    REGISTRATION
                </Text>
                <Text
                    size="2.5rem"
                    w="80%"
                    ta="center"
                    my="xl"
                    style={{
                        fontFamily: "'Roboto', 'sans-serif'",
                        lineHeight: "4rem", // Adjust for better readability
                        letterSpacing: "0.05rem", // Slightly increase spacing
                    }}
                >
                    Come join us for a three-day literary extravaganza! Click on the register button, fill in your details, download your pass, and you're all set to be a part of our grandest edition yet!
                </Text>
                <Button size="xl" onClick={() => navigate('/registration')} color="#2967B1" style={{ fontFamily: "'Lora', 'serif'" }}>
                    Register to attend
                </Button>
            </Flex>
        </motion.div>
    );
}
