import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Footer } from './components/common/footer/Footer';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css";

export default function App() {
    return (
        <MantineProvider>
        <RouterProvider router={router} />
        <Footer />
      </MantineProvider>
    )
}