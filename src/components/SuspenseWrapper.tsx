import { Suspense } from "react";
import { Loader, Center } from "@mantine/core";

const SuspenseWrapper = ({ children } : {children : any}) => {
  return (
    <Suspense
      fallback={
        <Center style={{ height: "100vh" }}>
          <Loader size="lg" color="blue" />
        </Center>
      }
    >
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
