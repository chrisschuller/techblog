"use client";

import { PropsWithChildren, useContext, useEffect } from "react";
import ThemeSwitcherContext from "./contexts/ThemeSwitcher";
import Stack from "./components/Stack";
import { Text } from "./components/Text";
import CategoryLink from "./components/CategoryLink";

function HomePageClient({ children }: PropsWithChildren) {
  const { toggleColorScheme } = useContext(ThemeSwitcherContext);
  useEffect(() => {
    toggleColorScheme("base");
  }, []);
  return (
    <>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        gap="10px"
        style={{ width: "100%", padding: "15px" }}
      >
        <Text size="lg" bold>
          Browse Categories
        </Text>
      </Stack>
      <Stack
        direction="row"
        justify="flex-start"
        align="center"
        gap="10px"
        style={{ width: "100%", padding: "15px" }}
      >
        <CategoryLink category="technology" href={"/articles/technology"}>
          Technology
        </CategoryLink>
        <CategoryLink category="food" href={"/articles/food"}>
          Food
        </CategoryLink>
      </Stack>
      {children}
    </>
  );
}

export default HomePageClient;
