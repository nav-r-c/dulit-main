import { Flex, Text, Button } from "@mantine/core";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@mantine/hooks";

export default function RegisterCTA() {
  const navigate = useNavigate();

  // Intersection Observer Hook (Triggers only once)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Framer Motion Variants (Down to Up)
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Use media query for responsiveness
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Set font sizes based on device width
  const titleFontSize = isMobile ? "2rem" : "2.5rem";
  const bodyFontSize = isMobile ? "1.25rem" : "2rem";
  const lineHeight = isMobile ? "2rem" : "4rem";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
    >
      <Flex direction="column" justify="center" align="center" h="80vh">
        <Text
          fw="bold"
          c="#FF9C82"
          size={titleFontSize}
          ta="center"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          REGISTRATION
        </Text>
        <Text
          size={bodyFontSize}
          w="80%"
          ta="center"
          my="xl"
          style={{
            fontFamily: "'Roboto', sans-serif",
            lineHeight: lineHeight,
            letterSpacing: "0.05rem",
          }}
        >
          Come join us for a three-day literary extravaganza! Click on the register button, fill in your details, download your pass, and you're all set to be a part of our grandest edition yet!
        </Text>
        <Button
          size="xl"
          onClick={() => navigate("/registration")}
          color="#2967B1"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Register to attend
        </Button>
      </Flex>
    </motion.div>
  );
}

