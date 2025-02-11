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
  import { IconChevronDown, IconCheck, IconX } from "@tabler/icons-react";
  import { useForm, zodResolver } from "@mantine/form";
  import { z } from "zod";
  import { useState } from "react";
  import { notifications } from "@mantine/notifications";
  
  const registrationFormSchema = z.object({
    festival_date: z.string().min(1, { message: "Festival date is required." }),
    name: z.string().min(1, { message: "Name is required." }),
    email: z
      .string()
      .email({ message: "Enter a valid email address." })
      .min(1, { message: "Email is required." }),
    phone_number: z.number().min(1000000000, { message: "Enter a valid phone number." }),
    age: z.number().min(1, { message: "Age is required." }),
    gender: z.enum(["Male", "Female", "Others", "Prefer not to say"]),
    organization: z.string().min(1, { message: "College/Profession is required." }),
  });
  
  const APP_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzQx57BKsnRQRxhom6eNoquOy4iXrRnnCN6PwN-bO3htRDR8XJ0k4xj2X0dtfyXCUAr2A/exec";
  
  export const RegistrationForm = () => {
    const [loading, setLoading] = useState(false);
  
    const form = useForm({
      initialValues: {
        festival_date: "",
        name: "",
        email: "",
        phone_number: undefined,
        age: undefined,
        gender: "",
        organization: "",
      },
      validate: zodResolver(registrationFormSchema),
    });
  
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
        setLoading(false);
        if (data.status === "success") {
          notifications.show({
            title: "Success",
            message: "Registration successful!",
            color: "green",
            icon: <IconCheck size={18} />,
          });
        } else {
          notifications.show({
            title: "Error",
            message: data.message || "Something went wrong.",
            color: "red",
            icon: <IconX size={18} />,
          });
        }
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
  
    return (
      <Box my="xl" style={{ position: "relative" }}>
        <LoadingOverlay visible={loading} />
  
        <Title order={2} size="3rem" pb="lg">
          DU Literature Festival 2025
        </Title>
        <Text size="lg">Join us for an unforgettable literary experience!</Text>
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
          </Flex>
          <Button loading={loading} type="submit" color="black" my="md" size="md" radius="md">
            Register
          </Button>
        </form>
      </Box>
    );
  };
  