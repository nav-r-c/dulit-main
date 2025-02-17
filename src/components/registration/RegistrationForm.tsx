import {
  Box,
  Button,
  Text,
  TextInput,
  Title,
  Flex,
  Select,
  NumberInput,
  LoadingOverlay,
} from "@mantine/core";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { RegistrationModal } from "./Ticket";
import { DotLottie } from "@lottiefiles/dotlottie-web"; // Import the correct type

const referralCodeRegex = /^(0[1-9]|[1-9][0-9])@dulit$/;

const registrationFormSchema = z.object({
  festival_date: z.string().min(1, { message: "Festival date is required." }),
  name: z.string().min(1, { message: "Please enter your full name." }),
  email: z
    .string()
    .email({ message: "Enter a valid email address." })
    .min(1, { message: "Please enter your email address." }),
  phone_number: z
    .number()
    .min(1000000000, { message: "Please enter a valid phone number." }),
  age: z
    .number()
    .min(1, { message: "Please enter your age." })
    .max(120, { message: "Please enter a valid age." }),
  gender: z.string().min(1, { message: "Please enter your gender." }),
  organization: z.string().min(1, { message: "College/Profession is required." }),
  referral_code: z
    .string()
    .optional()
    .refine((code) => !code || referralCodeRegex.test(code), {
      message: "Invalid referral code.",
    }),
});

const APP_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwgoWB2x3Uo1aLoux0HBnalbEKJhKRvb-TphJwtK17LjL2nm-nVsUl3EBXX7ESFF9kyWQ/exec";

  
export const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [docModalOpened, setDocModalOpened] = useState(false);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const [firstNameState, setFirstNameState] = useState("");
  const [dayNumberState, setDayNumberState] = useState("");
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);


  useEffect(() => {

    function onFrameChange({currentFrame} : {currentFrame : number}) {
      if (currentFrame === 93) {
        setAnimationCompleted(true);
      }
    }

    if (dotLottie) {
      dotLottie.addEventListener('frame', onFrameChange);
    }

    return () => {
      if (dotLottie) {
        dotLottie.addEventListener('frame', onFrameChange);
      }
    };
  }, [dotLottie]);

  const dotLottieRefCallback: React.RefCallback<DotLottie | null> = (ref) => {
    if (ref) {
      console.log("DotLottie instance:", ref);
    }
    setDotLottie(ref);
  };

  const form = useForm({
    initialValues: {
      festival_date: "",
      name: "",
      email: "",
      phone_number: undefined,
      age: undefined,
      gender: "",
      organization: "",
      referral_code: "",
    },
    validate: zodResolver(registrationFormSchema),
  });

  const generateDoc = async (firstName : string, dayNumber : string) => {
    setIsGeneratingDoc(true)
    try {

    const docResponse = await fetch("https://dulit-server.onrender.com/generate-doc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, dayNumber }),
    });

    if (!docResponse.ok) {
      throw new Error(`Doc generation error! Status: ${docResponse.status}`);
    }

    const docData = await docResponse.json();

    // Open the modal with the returned URL.
    setDocUrl(docData.pdfUrl);
    setIsGeneratingDoc(false);
  }
  catch (error) {
    notifications.show({
      title: "Error",
      message: "Something went wrong.",
      color: "red",
      icon: <IconX size={18} />,
    });
  }

  }

  const handleSubmit = async (values: typeof form.values) => {
    try {
      setLoading(true);

      const response = await fetch(APP_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data.status !== "success") {
        setLoading(false);
        notifications.show({
          title: "Error",
          message: data.message || "Something went wrong.",
          color: "red",
          icon: <IconX size={18} />,
        });
        return;
      }

      // Extract the first name and day number.
      const firstName = values.name.split(" ")[0];
      const dayNumber = values.festival_date.split(" - ")[0]; // e.g. "Day 1"

      setFirstNameState(firstName);
      setDayNumberState(dayNumber);

      setDocModalOpened(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      notifications.show({
        title: "Error",
        message: "Failed to submit data. Please try again.",
        color: "red",
        icon: <IconX size={18} />,
      });
      console.error(error);
    }
  };
  
  useEffect(() => {
    console.log("Animation Completed=>", animationCompleted)
  }, [animationCompleted])

  return (
    <>
    <RegistrationModal 
      docModalOpened={docModalOpened}
      setDocModalOpened={setDocModalOpened}
      docUrl={docUrl}
      animationCompleted={animationCompleted} 
      dotLottieRefCallback={dotLottieRefCallback}
      firstName={firstNameState}
      dayNumber={dayNumberState}
      generateDoc={generateDoc}
      loading={isGeneratingDoc}
    />
      <Box my="xl" style={{ position: "relative" }}>
        <LoadingOverlay visible={loading} />
        <Title order={2} size="3rem" pb="lg">
          Welcome to the #DSGroup DU Literature Festival 2025!
        </Title>
        <Text size="lg">Join us for our grandest edition yet! Open for all. Free for all. Accessibility to Literature and Readership for all!</Text>
        <form style={{ marginTop: "2rem" }} onSubmit={form.onSubmit(handleSubmit)}>
          <Flex direction="column" w={{ base: "100%", lg: "50vw" }} gap="md">
            <Select
              label="Select Festival Date"
              data={[
                "Day 1 - 21st February 2025",
                "Day 2 - 22nd February 2025",
                "Day 3 - 23rd February 2025",
              ]}
              placeholder="Choose One..."
              required
              size="lg"
              rightSection={<IconChevronDown />}
              allowDeselect={false}
              {...form.getInputProps("festival_date")}
              disabled={loading}
            />
            <TextInput
              placeholder="e.g. John Doe"
              label="Name"
              size="lg"
              required
              {...form.getInputProps("name")}
              disabled={loading}
            />
            <TextInput
              placeholder="e.g. john@xmail.com"
              label="Email"
              size="lg"
              required
              {...form.getInputProps("email")}
              disabled={loading}
            />
            <NumberInput
              placeholder="e.g. 0123456789"
              label="Phone Number"
              size="lg"
              hideControls
              required
              disabled={loading}
              {...form.getInputProps("phone_number")}
            />
            <NumberInput
              placeholder="e.g. 18"
              label="Age"
              size="lg"
              hideControls
              required
              disabled={loading}
              {...form.getInputProps("age")}
            />
            <Select
              label="Gender"
              data={["Male", "Female", "Others", "Prefer not to say"]}
              placeholder="Choose One..."
              required
              size="lg"
              allowDeselect={false}
              rightSection={<IconChevronDown />}
              disabled={loading}
              {...form.getInputProps("gender")}
            />
            <TextInput
              placeholder="e.g. Delhi University"
              label="College/Profession"
              size="lg"
              required
              disabled={loading}
              {...form.getInputProps("organization")}
            />
            <TextInput
              label="Referral Code (Optional)"
              size="lg"
              disabled={loading}
              {...form.getInputProps("referral_code")}
            />
          </Flex>
          <Button loading={loading} type="submit" color="black" my="md" size="md" radius="md">
            Register
          </Button>
        </form>
      </Box>
    </>
  );
};
