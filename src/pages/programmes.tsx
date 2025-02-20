import Header from "../components/header";
import ProgrammePage from "../components/programmes/programmesPage";
import { Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks"

export default function Programmes () {
        const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <Box>
        <Header />
        <Box mt={isMobile? '50vh' : '80vh'} mb={'20vh'}>
            <ProgrammePage />
        </Box>
        </Box>

    )
}