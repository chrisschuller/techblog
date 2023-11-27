import styled from "@emotion/styled";

const AppContainer = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

export default AppContainer;
