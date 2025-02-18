import { Grid, Center, Button, Text, Box, Group, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getSpeakers } from "../../apiClient";
import SpeakerCard from "../common/speaker-card";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";


export default function SpeakersGrid() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["speakers"],
    queryFn: getSpeakers,
  });

    const isMobile = useMediaQuery("(max-width: 768px)");
    
    const titleFontSize = isMobile ? "2rem" : "2.5rem";
    const subtTitleFontSize = isMobile ? "2.5rem" : "3rem";

  if (isLoading) return <Center>Loading...</Center>;
  if (isError) return <Center>Error fetching speakers</Center>;


  return (
    <div style={{ width: "90%", margin: "auto", overflowX: "hidden", textAlign: "center", minHeight: '100vh'}}>

      {/* 🎤 Section Title */}
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }} // Only animate once when in view
            >
      <Flex direction={'column'} justify={'center'} align={'center'} gap={'md'} my={'xl'}>
        <Text
          c="#FF9C82"
          size={titleFontSize}
          ta="center"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          Delhi University
        </Text>
        <Text
          c="#FF9C82"
          size={titleFontSize}
          ta="center"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          Literature Festival
        </Text>
        <Text
            fw={900}
          c="#FF9C82"
          size={subtTitleFontSize}
          ta="center"
          style={{ fontFamily: "'Cinzel Decorative', cursive" }}
        >
          Speakers 2025
        </Text>
      </Flex>
      </motion.div>

      {/* 🧑‍🎤 Speaker Cards */}
      <Grid justify="center">
        {data.slice(0, isMobile ? 3 : 8).map((speaker: any, index: number) => (
          <Grid.Col 
            key={speaker.id} 
            span={{ base: 12, sm: 6, md: 4, lg: 3 }} // Fully responsive grid
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }} // Only animate once when in view
            >
              <SpeakerCard 
                maskUrl="/mask.svg"
                bgUrl="/speaker-mask.svg"
                name={speaker.name}
                imageUrl={speaker.imageUrl}
              />
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
      
      {/* 🔵 View All Button */}
      <Center mt="md">
        <Button
          size="xl"
          onClick={() => navigate("/speakers")}
          color="#2967B1"
          style={{ fontFamily: "'Lora', serif" }}
        >
          View all
        </Button>
      </Center>
    </div>
  );
}
