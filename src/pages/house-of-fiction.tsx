import { Container, Table, Title, Text, Paper, Image, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const schedule = [
  {
    day: "HOUSE OF FICTION - DAY 1",
    sessions: [
      { time: "11:00 AM - 12:00 PM", title: "Speaker session 1", description: "Puneet sikka" },
      { time: "12:00 PM - 02:00 PM", title: "Ostraca: Twisted Perspectives: A Battle of Narratives", description: "A battle of Narratives" },
      { time: "02:00 PM - 03:00 PM", title: "Bookmark Exchange competition" },
      { time: "03:00 PM - 04:00 PM", title: "Open mic" },
      { time: "04:00 PM - 05:00 PM", title: "Game (musical chairs)", description: "The Last Supper" },
      { time: "05:00 PM - 06:00 PM", title: "Literary Pictionary", description: "Chitrakshar" }
    ]
  },
  {
    day: "HOUSE OF FICTION - DAY 2",
    sessions: [
      { time: "11:00 AM - 1:00 PM", title: "Kavyanjali", description: "Presenting a Poet" },
      { time: "01:00 PM - 02:00 PM", title: "Shreya Punj", description: "Pitch perfect with Shreya Punj" },
      { time: "02:00 PM - 03:00 PM", title: "Poetry Circle", description: "Verse war" },
      { time: "03:00 PM - 04:00 PM", title: "Debate", description: "Prose and cons" }
    ]
  },
  {
    day: "HOUSE OF FICTION - DAY 3",
    sessions: [
      { time: "11:00 AM - 12:00 PM", title: "JAM" },
      { time: "12:00 PM - 02:00 PM", title: "Regional literature" },
      { time: "02:00 PM - 03:00 PM", title: "Ministry of culture (session on Heritage Mitra Program)" },
      { time: "03:00 PM - 04:00 PM", title: "Open Mic", description: "unkahi" }
    ]
  }
];

const ScheduleComponent = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Container size="lg" py="md">
      {/* Header Logos */}
      <Flex justify="center" gap="lg" align="center" mb="md" direction={isSmallScreen ? 'column' : 'row'} wrap="wrap">
        <Image src="/dsgroup.svg" w={isSmallScreen ? 80 : 120} />
        <Image src={isSmallScreen ? "/dulit-logo-mobile.svg" : "/dulit-logo.svg"} w={isSmallScreen ? 120 : 'auto'} />
      </Flex>

      {schedule.map((day, idx) => (
        <Paper key={idx} withBorder p="md" mt="md">
          <Title order={3} ta="center" mb="sm" fw={700}>{day.day}</Title>
          
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr style={{ backgroundColor: "#C4E86B" }}>
                <Table.Th><Text fw={600} fs="italic">Time</Text></Table.Th>
                <Table.Th><Text fw={600} fs="italic">Session</Text></Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {day.sessions.map((session, index) => (
                <Table.Tr key={index}>
                  <Table.Td><Text>{session.time}</Text></Table.Td>
                  <Table.Td>
                    <Text fw={700}>{session.title}</Text>
                    {session.description && <Text>{session.description}</Text>}
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      ))}
    </Container>
  );
};

export default ScheduleComponent;
