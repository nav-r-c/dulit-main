import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { Footer } from './components/common/footer/Footer';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <MantineProvider>
      <Notifications position="top-center" zIndex={10000} />
      <div>
          <main>
            <RouterProvider router={router} />
          </main>
          <Footer />
      </div>
    </MantineProvider>
  );
}
