import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { postLogin } from "../api/auth";
import { useEffect, useState } from "react";

export default function Signin() {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.email === "" || formState.password === "") return;

    try {
      const response = await postLogin({
        email: formState.email,
        password: formState.password,
      });

      console.log(response.headers.authorization);
      localStorage.setItem("accessToken", response.headers.authorization);

      navigate("/");
    } catch (error) {
      setErrorMessage("존재하지 않는 아이디 혹은 비밀번호입니다.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <div></div>
      <form onSubmit={handleSubmit}>
        <Input
          style={{ marginBottom: "20px" }}
          type="email"
          placeholder="이메일을 입력해주세요"
          onChange={(e) => {
            setErrorMessage("");
            setFormState({ ...formState, email: e.target.value });
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={(e) => {
            setErrorMessage("");
            setFormState({ ...formState, password: e.target.value });
          }}
        />

        <Error>{errorMessage}</Error>
        <Btn>로그인</Btn>
      </form>

      <Footer>
        <Link to="#">아이디 / 비밀번호 찾기</Link>
        <Link to="/signup">회원가입</Link>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background: #fff;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Footer = styled.div`
  //styleName: caption/Md;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.32px;
  text-align: left;
  color: #c5c5c5;
  margin-top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
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

const Error = styled.div`
  color: #ff946d;
  margin-top: 10px;
`;
