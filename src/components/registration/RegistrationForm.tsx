import { Box, Button, Text, TextInput, Title, Flex, Select, NumberInput } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const registrationFormSchema = z.object({
    festival_date: z.enum(['Day 1', 'Day 2', 'Day 3']),
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Enter a valid email address." }).min(1, { message: "Email is required." }),
    phone_number: z.number().min(1000000000, { message: "Enter a valid phone number." }),
    age: z.number().min(1, { message: "Age is required." }),
    gender: z.enum(["Male", "Female", "Others", "Prefer not to say"]),
    organization: z.string().min(1, { message: "College/Profession is required." })
});

export const RegistrationForm = () => {
    const form = useForm({
        initialValues: {
            festival_date: '',
            name: '',
            email: '',
            phone_number: undefined,
            age: undefined,
            gender: '',
            organization: ''
        },
        validate: zodResolver(registrationFormSchema)
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <Box my="xl">
            <Title order={2} size="3rem" pb="lg">
                DU Literature Festival 2025
            </Title>
            <Text size="lg">Join us for an unforgettable literary experience!</Text>
            <form style={{ marginTop: "2rem" }} onSubmit={form.onSubmit(handleSubmit)}>
                <Flex direction="column" w="100%" justify="space-evenly" gap="md">
                    <Select
                        label="Select Festival Date"
                        data={['Day 1', 'Day 2', 'Day 3']}
                        placeholder="Choose One..."
                        required
                        rightSection={<IconChevronDown />}
                        allowDeselect={false}
                        {...form.getInputProps('festival_date')}
                    />
                    <TextInput
                        placeholder="e.g. John Doe"
                        color="black"
                        label="Name"
                        size="md"
                        required
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        placeholder="e.g. john@xmail.com"
                        color="black"
                        label="Email"
                        size="md"
                        required
                        {...form.getInputProps('email')}
                    />
                    <NumberInput
                        placeholder="e.g. 0123456789"
                        color="black"
                        label="Phone Number"
                        size="md"
                        hideControls
                        required
                        {...form.getInputProps('phone_number')}
                    />
                    <NumberInput
                        placeholder="e.g. 18"
                        color="black"
                        label="Age"
                        size="md"
                        hideControls
                        required
                        {...form.getInputProps('age')}
                    />
                    <Select
                        label="Gender"
                        data={["Male", "Female", "Others", "Prefer not to say"]}
                        placeholder="Choose One..."
                        required
                        allowDeselect={false}
                        rightSection={<IconChevronDown />}
                        {...form.getInputProps('gender')}
                    />
                    <TextInput
                        placeholder="e.g. Delhi University"
                        color="black"
                        label="College/Profession"
                        size="md"
                        required
                        {...form.getInputProps('organization')}
                    />
                </Flex>
                <Button type="submit" color="black" my="md">
                    Register
                </Button>
            </form>
        </Box>
    );
};
