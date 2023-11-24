import { PropsWithChildren } from "react";
import Stack from "./Stack";

function Content({ children }: PropsWithChildren) {
  return (
    <Stack
      direction="column"
      justify={"flex-start"}
      align="center"
      style={{ maxWidth: "1024px", padding: "20px" }}
    >
      {children}
    </Stack>
  );
}

export default Content;
