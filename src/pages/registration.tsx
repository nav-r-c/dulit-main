import { Image, Flex } from "@mantine/core";
import { RegistrationForm } from "../components/registration/RegistrationForm";

const Registration = () => {
    return (
        <Flex w={'100%'} justify={'center'} align={'start'} direction={'column'} p={'5rem'}>
            <Image 
                src = {"/dulit-fest-logo.svg"}
                w={'40%'}
            />
            <RegistrationForm />
        </Flex>
    )
}

export default Registration;