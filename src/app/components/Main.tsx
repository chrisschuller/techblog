import { PropsWithChildren } from "react";
import Stack from "./Stack";

function Main({ children }: PropsWithChildren) {
  return (
    <Stack direction={"column"} justify="flex-start" align="center">
      {children}
    </Stack>
  );
}

export default Main;
