// src/components/layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";
import { Box } from "@mantine/core";
import Navbar from "./common/navbar/Navbar";
import { Footer } from "./common/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Box pt={10} mt={50}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
