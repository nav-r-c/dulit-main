import SpeakerCarousel from "../components/speakers/speaker-carousel";
import { Box, Text } from "@mantine/core";


export default function Speaker() {
        return (
        <Box my={'20vh'}>
            <Text fw={'bold'} ta={'center'} size="4vw" w={'60%'} m={'auto'} my={'3rem'}>
                Meet Our Inspiring Speakers at the Literature Festival
            </Text>
            <SpeakerCarousel />
        </Box>
    )
}