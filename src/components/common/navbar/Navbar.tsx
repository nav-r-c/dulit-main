import { Link } from "react-router-dom";
import { Container, Group, Burger, Drawer, Button, Box, Flex } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  // Consider screens 768px and below as mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box
        h={60}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "#2967B1",
        }}
      >
        <Container
          size="xl"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            <img src="/logodulit.png" alt="Logo" style={{ height: "32px" }} />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Group gap="xl">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
              <Link
                to="/speakers"
                style={{ color: "white", textDecoration: "none" }}
              >
                Speakers
              </Link>
              <Link
                to="/programmes"
                style={{ color: "white", textDecoration: "none" }}
              >
                Programme
              </Link>
            </Group>
          )}

          {/* Desktop Register Button */}
          {!isMobile && (
            <Button
              component={Link}
              to="/registration"
              variant="filled"
              style={{ backgroundColor: "white", color: "#2967B1" }}
            >
              Register
            </Button>
          )}

          {/* Mobile Burger */}
          {isMobile && <Burger color="white" opened={opened} onClick={toggle} />}
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        position="right"
        padding="md"
        size="md"
        zIndex={1100}
      >
        <Flex direction="column" gap="md">
          <Link
            to="/"
            onClick={close}
            style={{
              color: "#2967B1",
              textDecoration: "none",
              fontSize: "1.125rem",
            }}
          >
            Home
          </Link>
          <Link
            to="/speakers"
            onClick={close}
            style={{
              color: "#2967B1",
              textDecoration: "none",
              fontSize: "1.125rem",
            }}
          >
            Speakers
          </Link>
          <Link
            to="/programmes"
            onClick={close}
            style={{
              color: "#2967B1",
              textDecoration: "none",
              fontSize: "1.125rem",
            }}
          >
            Programme
          </Link>
          <Button
            component={Link}
            to="/registration"
            variant="outline"
            onClick={close}
          >
            Register
          </Button>
        </Flex>
      </Drawer>
    </>
  );
}
