import SpeakerCarousel from "../components/speakers/speaker-carousel";
import { Box, Text } from "@mantine/core";


export default function Speaker() {
        return (
        <Box my={'20vh'}>
            <Text fw={'bold'} ta={'center'} size="5vw" w={'50%'} m={'auto'} my={'3rem'}>
                Meet Our Inspiring Speakers at the Literature Festival
            </Text>
            <SpeakerCarousel />
        </Box>
    )
}