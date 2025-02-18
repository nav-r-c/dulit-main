import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications position="top-center" zIndex={10000} />
        <main>
          <RouterProvider router={router} />
        </main>
      </MantineProvider>
    </QueryClientProvider>
  );
}
