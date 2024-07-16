import styled from "styled-components";
import { COLORS } from "../utils";

export default function RootLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background-color: ${COLORS.WHITE};
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
`;
