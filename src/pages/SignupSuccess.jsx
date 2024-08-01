import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignupSuccess() {
  return (
    <Container>
      <h2>환영해요!</h2>
      <p>
        가입이 완료되었어요
        <br /> f!lb와 함께 감정을 채워보아요
      </p>
      <Btn to="/">일기쓰고 내 감정 확인하기</Btn>
    </Container>
  );
}

const Container = styled.div`
  background: #fafafa;
  height: 100vh;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  justify-content: center;
`;

const Btn = styled(Link)`
  background: #000000;
  color: #fff;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 60px;
`;
