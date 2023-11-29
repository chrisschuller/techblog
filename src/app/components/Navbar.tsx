import styled from "@emotion/styled";
import { Text } from "./Text";
import Stack from "./Stack";
import Button from "./Button";
import Link from "./Link";
import { useContext } from "react";
import ThemeSwitcherContext from "../contexts/ThemeSwitcher";

export const NavbarContainer = styled(Stack)`
  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  padding: 15px;
  gap: 15px;
  flex-wrap: wrap;
`;

export function Navbar() {
  const { theme, toggleDarkMode } = useContext(ThemeSwitcherContext);

  return (
    <NavbarContainer
      direction="row"
      justify="space-between"
      align={"center"}
      style={{ padding: "20px" }}
    >
      <Stack justify="center" align="center">
        <Link href={"/"}>
          <Text size="lg">bloggy.</Text>
          <Text size="lg" color={"primary"}>
            {theme.colorScheme === "base"
              ? "me"
              : theme.colorScheme === "technology"
              ? "dev"
              : theme.colorScheme === "food"
              ? "food"
              : theme.colorScheme === "travel"
              ? "travel"
              : "undefined"}
          </Text>
        </Link>
      </Stack>
      <Stack direction="row" gap={"7px"} justify="center" align="center">
        <Button>Login</Button>
        <Button outlined>Sign Up</Button>
        <Button variant={"secondary"} onClick={toggleDarkMode} outlined>
          <Stack justify="center" align="center">
            {theme.darkMode && (
              <svg
                height="18px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <g>
                    <path
                      d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z"
                      fill="#ffffff"
                    />
                  </g>
                </g>
              </svg>
            )}
            {!theme.darkMode && (
              <svg
                height="18px"
                viewBox="0 0 512 512"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                fill="#272626"
              >
                <title />
                <path d="M264,480A232,232,0,0,1,32,248C32,154,86,69.72,169.61,33.33a16,16,0,0,1,21.06,21.06C181.07,76.43,176,104.66,176,136c0,110.28,89.72,200,200,200,31.34,0,59.57-5.07,81.61-14.67a16,16,0,0,1,21.06,21.06C442.28,426,358,480,264,480Z" />
              </svg>
            )}
          </Stack>
        </Button>
      </Stack>
    </NavbarContainer>
  );
}
export default Navbar;
