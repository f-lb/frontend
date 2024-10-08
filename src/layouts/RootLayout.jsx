import styled from "styled-components";

export default function RootLayout({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  background-color: #f3f3f3;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
`;
