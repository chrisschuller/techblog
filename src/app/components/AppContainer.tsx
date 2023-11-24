import styled from "@emotion/styled";

const AppContainer = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export default AppContainer;
