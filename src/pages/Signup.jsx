import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Container>
      <Nav>
        <Link style={{ position: "absolute", left: "10px" }}>
          <img src={BackIcon} alt="back_icon" />
        </Link>
        회원가입
      </Nav>

      <Form>
        <div>
          <label>아이디 입력</label>
          <Input placeholder="이메일을 입력해주세요" type="email" />
          <Error>error message</Error>
        </div>
        <div>
          <label>비밀번호 입력</label>
          <Input placeholder="비밀번호를 입력해주세요" type="password" />
          <Error>error message</Error>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <Input
            placeholder="비밀번호를 다시한번 입력해주세요"
            type="password"
          />
          <Error>error message</Error>
        </div>

        <Btn>회원가입</Btn>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: #fff;
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
  &::placeholder {
    //styleName: subtitle/Md;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    letter-spacing: -0.02em;
    text-align: left;

    color: #e0e0e0;
  }
`;

const Form = styled.form`
  margin-top: 40px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Error = styled.div`
  color: #ff946d;
  margin-top: 5px;
`;

const Btn = styled.button`
  background: #000000;
  color: #fff;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 20px;
`;
