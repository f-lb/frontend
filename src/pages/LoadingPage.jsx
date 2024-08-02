import styled, { keyframes } from "styled-components";

export default function LoadingPage() {
  return (
    <Container>
      <Title>
        f!lb가 당신의 감정을 <br />{" "}
        <span style={{ color: "#ff946d" }}>분석</span>중이에요
      </Title>
      <Table>
        <thead></thead>
        <Tbody>
          <Td>
            <Span1>
              <Span2></Span2>
              <Span2></Span2>
            </Span1>
          </Td>
        </Tbody>
      </Table>
      <Title>잠시만 기다려 주세요!</Title>
    </Container>
  );
}

const slide = keyframes`
	0% {
		transform: translateY(0%);
	}
	
	25% {
		transform: translateY(100%);
	}
	
	50% {
		transform: translateY(100%);
	}
	
	75% {
		transform: translateY(0%);		
	}
	
	100% {
		transform: translateY(0%);		
	}
`;

const spin = keyframes`
	0% {
		transform: rotate(0deg);
	}
	
	25% {
		transform: rotate(0deg);
	}
	
	50% {
		transform: rotate(180deg);
	}
	
	75% {
		transform: rotate(180deg);
	}
	
	100% {
		transform: rotate(360deg);
	}

`;

const Container = styled.div`
  background-color: #fafafa;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 60px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Title = styled.h2`
  text-align: center;
`;

const Table = styled.table``;
const Tbody = styled.tbody``;
const Td = styled.td`
  vertical-align: middle;
  text-align: center;
`;
const Span1 = styled.span`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 70px;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-name: ${spin};
  animation-timing-function: linear;
`;
const Span2 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #edf1f4;
  overflow: hidden;
  //   -webkit-clip-path: polygon(0 0, 80% 0, 50% 80%, 0 0);
  clip-path: polygon(0 0, 100% 0, 50% 130%, 0 0);
  border-radius: 15px;
  &:first-of-type {
    transform: translateY(-50%);
  }

  &:last-of-type {
    transform: translateY(50%) rotate(180deg);
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    // bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ff946d;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-name: ${slide};
    animation-timing-function: linear;
  }

  &:last-of-type::before {
    animation-delay: -2s;
  }
`;
