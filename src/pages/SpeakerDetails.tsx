import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Center, Stack, Text, Loader, Flex, Box } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { getSpeakerById, getProgrammes } from "../apiClient";
import SpeakerCard from "../components/common/speaker-card";
import ProgrammeCard from "../components/programmes/programmeCard";

export default function SpeakerDetails() {
  const { id } = useParams(); // Get speaker ID from URL params
  const isMobile = useMediaQuery("(max-width: 768px)"); // Detect mobile screens

  // Fetch Speaker Details
  const { data: speaker, isLoading: isSpeakerLoading, isError: isSpeakerError } = useQuery({
    queryKey: ["speaker", id],
    queryFn: () => getSpeakerById(id!),
    enabled: !!id, // Only fetch if ID exists
  });

  // Fetch All Programmes
  const { data: programmes = [], isLoading: isProgrammesLoading } = useQuery({
    queryKey: ["programmes"],
    queryFn: getProgrammes,
  });

  // Filter programmes that belong to this speaker
  const speakerProgrammes = programmes.filter((programme: any) =>
    speaker?.programmes.includes(programme._id)
  );

  if (isSpeakerLoading || isProgrammesLoading) {
    return <Center><Loader size="lg" /></Center>;
  }

  if (isSpeakerError) {
    return <Center><Text>Error fetching speaker details</Text></Center>;
  }

  return (
    <Stack w="90%" mx="auto" py="xl" gap="xl">
      {/* Speaker Info - Responsive Layout */}
      <Flex
        direction={isMobile ? "column" : "row-reverse"}
        align="center"
        justify={isMobile ? 'space-between' : 'center'}
        gap="xl"
      >
        {/* Speaker Image - Takes 40% width on larger screens */}
        <Box>
        <SpeakerCard 
          maskUrl="/mask.svg"
          bgUrl="/speaker-mask.svg"
          name={speaker.name}
          imageUrl={speaker.imageUrl}
        />
        </Box>

        {/* Bio & Programmes - Takes 60% width on larger screens */}
        <Stack gap="lg" style={{ flex: isMobile ? "none" : "0 0 55%" }}>
          {/* Speaker Bio */}
          <Stack gap="md">
            <Text size="xl" fw={700} c="#2162AE">
              About {speaker.name}
            </Text>
            <Text size="lg" fw={500} style={{ fontFamily: "Lora, serif" }}>
              {speaker.bio}
            </Text>
          </Stack>

          {/* Speaker's Programmes */}
          {speakerProgrammes.length > 0 ? (
            <Stack gap="lg">
              <Text size="xl" fw={700} c="#2162AE">
                Sessions with {speaker.name}
              </Text>
              <Flex wrap="wrap" justify="flex-start" gap="md">
                {speakerProgrammes.map((programme: any, index: number) => (
                  <ProgrammeCard key={programme._id} programme={programme} isVariantOne={index % 2 === 0} />
                ))}
              </Flex>
            </Stack>
          ) : (
            <Text size="md" c="gray">
              No scheduled sessions for this speaker.
            </Text>
          )}
        </Stack>
      </Flex>
    </Stack>
  );
}
