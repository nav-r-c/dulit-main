import {
    Box,
    Button,
    Text,
    Flex,
    Modal,
    Image,
  } from "@mantine/core";
  import { IconDownload } from "@tabler/icons-react";
  import { motion } from "framer-motion";
  import { DotLottieReact } from "@lottiefiles/dotlottie-react";
  import { DotLottie } from "@lottiefiles/dotlottie-web";
  import html2canvas from "html2canvas";
  
  interface RegistrationModalProps {
    docModalOpened: boolean;
    setDocModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
    docUrl: string | null;
    animationCompleted: boolean;
    dotLottieRefCallback: React.RefCallback<DotLottie | null>;
    generateDoc: (firstName: string, dayNumber: string) => void;
    firstName: string;
    dayNumber: string;
    loading: boolean;
  }
  
  /**
   * A small Ticket component that shows the ticket background
   * and overlays the firstName + dayNumber.
   */
  const Ticket: React.FC<{ firstName: string; dayNumber: string }> = ({
    firstName,
    dayNumber,
  }) => {
    return (
      <Box
        id="ticketToDownload"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <Image src="/ticket.svg" alt="Ticket" fit="contain" />
        {/* <img src="/ticket.svg" alt="Ticket" style={{ width: "100%" }} /> */}
  


            {/* Overlay Name */}
            <Text
                ta="center"
                style={{
                position: "absolute",
                top: "29.5%",
                left: "50%",
                transform: "translate(-50%, -50%)", // centers the text exactly at this point
                fontFamily: "Cinzel, serif", // Cinzel from Google Fonts
                fontSize: "2vw", // font size scales relative to viewport width; adjust as needed
                }}
                c="black"
            >
                {firstName.toUpperCase()}
            </Text>

            {/* Overlay Day Number */}
            <Text
                ta="center"
                style={{
                position: "absolute",
                top: "36.5%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "Roboto Condensed, sans-serif", // Roboto Condensed from Google Fonts
                fontSize: "1.5vw", // adjust as needed
                }}
                fw="bold"
                c="black"
            >
                {dayNumber.toUpperCase()}
            </Text>
      </Box>
    );
  };
  
  export const RegistrationModal: React.FC<RegistrationModalProps> = ({
    docModalOpened,
    setDocModalOpened,
    animationCompleted,
    dotLottieRefCallback,
    firstName,
    dayNumber,
  }) => {
    /**
     * Handle downloading the screenshot of the ticket
     * using html2canvas
     */
    const handleDownloadScreenshot = async () => {
      const ticketElement = document.getElementById("ticketToDownload");
      if (!ticketElement) return;
  
      try {
        const canvas = await html2canvas(ticketElement);
        const link = document.createElement("a");
        link.download = "ticket.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      } catch (error) {
        console.error("Screenshot error:", error);
      }
    };
  
    /**
     * (Optional) Handle saving the ticket as a basic HTML file
     * Note: this won't embed external images; for a truly portable HTML,
     * you'd need to inline the SVG or convert it to a data URL.
     */
  
    return (
      <Modal
        fullScreen
        withCloseButton={false}
        opened={docModalOpened}
        onClose={() => setDocModalOpened(false)}
        p={0}
        centered
      >
        <Flex h="100vh" direction="column" align="center" justify="center" p={0}>
          {/* Your DotLottie animation */}
          <Box w={{ base: "100%", lg: "50%" }}>
            <DotLottieReact
              src="/anim.lottie"
              autoplay={true}
              loop={false}
              dotLottieRefCallback={dotLottieRefCallback}
            />
          </Box>
  
          {animationCompleted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%" }}
            >
              <Flex direction="column" align="center" justify="center" px="md">
                <Text ta="center" mb="md" size="3rem" fw="bold">
                  Registration Confirmed!
                </Text>
                <Text ta="center" mb="md" size="lg">
                  Thank you for registering! Your ticket is below.
                </Text>
  
                {/* Display the Ticket */}
                <Ticket firstName={firstName} dayNumber={dayNumber} />
  
                {/* Download/Generation Buttons */}
                <Flex mt="lg" gap="md" wrap="wrap" justify="center">
                  {/* 1) Generate & Download PDF from server */}
                  {/* {!docUrl ? (
                    <Button
                      loading={loading}
                      variant="outline"
                      c="black"
                      onClick={() => generateDoc(firstName, dayNumber)}
                    >
                      Generate Festival Pass (PDF)
                    </Button>
                  ) : (
                    <Button
                      component="a"
                      href={docUrl}
                      c="black"
                      download
                    >
                      <Flex align="center" gap="sm">
                        <Text size="md">Download Festival Pass</Text>
                        <IconDownload />
                      </Flex>
                    </Button>
                  )} */}
  
                  {/* 2) Screenshot the Ticket */}
                  <Button
                    color="black"
                    onClick={handleDownloadScreenshot}
                  >
                      <Flex align="center" gap="sm">
                        <Text size="md">Download Festival Pass</Text>
                        <IconDownload />
                      </Flex>
                  </Button>
  
                  {/* 3) Save as HTML */}
                  {/* <Button
                    variant="outline"
                    c="black"
                    size="md"
                    radius="md"
                    onClick={handleDownloadHTML}
                  >
                    Download HTML
                  </Button> */}
                </Flex>
  
                {/* Warning about doc generation time
                {!docUrl && (
                  <Text mt="sm" ta="center" size="sm" c="red">
                    (*Generating the festival pass PDF may take more than a minute)
                  </Text>
                )} */}
              </Flex>
            </motion.div>
          )}
        </Flex>
      </Modal>
    );
  };
  