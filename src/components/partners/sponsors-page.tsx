import { Container, Image, Flex, Text, Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const VERTICAL_MARGIN = "1rem"; // Change this value to adjust spacing

const sponsors = [
  { category: "Hosted By", logos: ["/partners/hosted.svg"] },
  { category: "Venue Partner", logos: ["/partners/venue-partner.svg"] },
  { category: "Associate Partners", logos: ["/partners/associate1.svg", "/partners/associate2.svg", "/partners/associate3.svg", "/partners/associate4.svg"] },
  { category: "Knowledge Partners", logos: ["/partners/knowledge.svg"] },
  { category: "Cultural Partner", logos: ["/partners/cultural.svg"] },
  { category: "Event Partner", logos: ["/partners/event.svg"] },
  { category: "Institutional Partners", logos: ["/partners/institution1.svg", "/partners/institution2.svg", "/partners/institution3.svg"] },
  { category: "Session Partners", logos: ["/partners/session1.svg", "/partners/session2.svg", "/partners/session3.svg", "/partners/session4.svg"] },
  { category: "Partner", logos: ["/partners/partner.svg"] },
  { category: "Multimedia Partner", logos: ["/partners/multimedia.svg"] },
  { category: "Bookstore Managed By", logos: ["/partners/bookstore.svg"] },
  { category: "Coffee Partner", logos: ["/partners/coffee.svg"] },
  { category: "Photography Partner", logos: ["/partners/photography.svg"] },
  { category: "Snacking Partner", logos: ["/partners/snacking.svg"] },
  { category: "Education Partner", logos: ["/partners/education.svg"] },
  { category: "Beverage Partner", logos: ["/partners/beverage.svg"] }
];

const SponsorPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Container size="lg" mt={20}>
      {/* Header Logos */}
      <Flex direction="column" justify="center" align="center" gap="md">
        <Image src="/dsgroup.svg" w="120px" />
        <Image src="/dulit-logo-mobile.svg" w="120px" />
      </Flex>

      {/* Sponsors Layout */}
      <Flex direction="column" gap="md" mt="xl">

        {/* Hosted By & Venue Partner */}
        <Flex direction={isSmallScreen ? "column" : "row"} gap="md" wrap="wrap" my={VERTICAL_MARGIN}>
          {["Hosted By", "Venue Partner"].map((category) => (
            <Paper key={category} p="md" style={{ flex: isSmallScreen ? "1 1 100%" : "1 1 50%" }}>
              <Text ta="center" fw={500}>{category}</Text>
              <Flex justify="center">
                {sponsors.find(s => s.category === category)?.logos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    width={isSmallScreen ? 100 : 150}
                    fit="contain"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                ))}
              </Flex>
            </Paper>
          ))}
        </Flex>

        {/* Associate Partners */}
        <Paper p="md" my={VERTICAL_MARGIN}>
          <Text ta="center" fw={500}>Associate Partners</Text>
          <Flex
            justify="center"
            direction={isSmallScreen ? "column" : "row"}
            align="center"
            gap="md"
            wrap="wrap"
          >
            {sponsors[2].logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                width={isSmallScreen ? 100 : 150}
                fit="contain"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            ))}
          </Flex>
        </Paper>

        {/* Knowledge, Cultural, Event Partners */}
        <Flex direction={isSmallScreen ? "column" : "row"} gap="md" wrap="wrap" my={VERTICAL_MARGIN}>
          {["Knowledge Partners", "Cultural Partner", "Event Partner"].map((category) => (
            <Paper key={category} p="md" style={{ flex: isSmallScreen ? "1 1 100%" : "1 1 33%" }}>
              <Text ta="center" fw={500}>{category}</Text>
              <Flex justify="center">
                {sponsors.find(s => s.category === category)?.logos.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo}
                    width={isSmallScreen ? 100 : 150}
                    fit="contain"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                  />
                ))}
              </Flex>
            </Paper>
          ))}
        </Flex>

        {/* Institutional Partners */}
        <Paper p="md" my={VERTICAL_MARGIN}>
          <Text ta="center" fw={500}>Institutional Partners</Text>
          <Flex justify="center" wrap="wrap" gap="md" direction={isSmallScreen ? "column" : "row"}>
            {sponsors[6].logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                width={isSmallScreen ? 100 : 150}
                fit="contain"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            ))}
          </Flex>
        </Paper>

        {/* Session Partners */}
        <Paper p="md" my={VERTICAL_MARGIN}>
          <Text ta="center" fw={500}>Session Partners</Text>
          <Flex justify="center" wrap="wrap" gap="md" direction={isSmallScreen ? "column" : "row"}>
            {sponsors[7].logos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                width={isSmallScreen ? 100 : 150}
                fit="contain"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            ))}
          </Flex>
        </Paper>

        {/* Paired Partners */}
        {[
          ["Partner", "Multimedia Partner"],
          ["Bookstore Managed By", "Coffee Partner"],
          ["Photography Partner", "Snacking Partner"],
          ["Education Partner", "Beverage Partner"]
        ].map((pair, index) => (
          <Flex key={index} direction={isSmallScreen ? "column" : "row"} gap="md" wrap="wrap" my={VERTICAL_MARGIN}>
            {pair.map((category) => (
              <Paper key={category} p="md" style={{ flex: isSmallScreen ? "1 1 100%" : "1 1 50%" }}>
                <Text ta="center" fw={500}>{category}</Text>
                <Flex justify="center">
                  {sponsors.find(s => s.category === category)?.logos.map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      width={isSmallScreen ? 100 : 150}
                      fit="contain"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  ))}
                </Flex>
              </Paper>
            ))}
          </Flex>
        ))}

      </Flex>
    </Container>
  );
};

export default SponsorPage;
