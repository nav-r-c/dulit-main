import { Image, Flex } from "@mantine/core";
import { RegistrationForm } from "../components/registration/RegistrationForm";
import { Footer } from '../components/common/footer/Footer';


const Registration = () => {
    return (
        <Flex w={'100%'} justify={'center'} align={'start'} direction={'column'} p={{base: '1.5rem', lg: '5rem'}}>
            <Image 
                src = {"/dulit-fest-logo.svg"}
                w={'300px'}
            />
            <RegistrationForm />
            <Footer />
        </Flex>
    )
}

export default Registration;