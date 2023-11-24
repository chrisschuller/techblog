import styled from "@emotion/styled";
import Text from "./Text";
import Stack from "./Stack";
import Button from "./Button";
import Link from "./Link";

export const NavbarContainer = styled(Stack)`
  height: 8vh;
  background-color: ${({ theme }) => theme.colors.lightBlack};
`;

export function Navbar() {
  return (
    <NavbarContainer
      direction="row"
      justify="space-between"
      align={"center"}
      style={{ padding: "20px" }}
    >
      <Stack justify="center" align="center">
        <Link href={"/"}>
          <Text size="lg">reactor.</Text>
          <Text size="lg" color={"primary"}>
            dev
          </Text>
        </Link>
      </Stack>
      <Stack gap={"7px"} justify="center" align="center">
        <Button>Login</Button>
        <Button outlined>Sign Up</Button>
      </Stack>
    </NavbarContainer>
  );
}
export default Navbar;
