import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { postSignup } from "../api/auth";

export default function Signup() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [error, setError] = useState({
    password: "",
    passwordCheck: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, passwordCheck } = formState;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      return;
    }

    if (password.length < 8) {
      setError({ ...error, password: "8자 이상 입력해주세요." });
    }

    if (password !== passwordCheck) {
      setError({ ...error, passwordCheck: "비밀번호가 일치하지 않습니다." });
    }

    try {
      await postSignup({ name, email, password });
      localStorage.setItem("name", name);

      navigate("/signup-success");
    } catch (error) {
      alert("이미 가입된 회원입니다.");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Nav>
        <Link style={{ position: "absolute", left: "10px" }}>
          <img src={BackIcon} alt="back_icon" />
        </Link>
        회원가입
      </Nav>

      <Form onSubmit={handleSubmit}>
        <div>
          <label>닉네임</label>
          <Input
            placeholder="닉네임을 입력해주세요"
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>아이디 입력</label>
          <Input
            placeholder="이메일을 입력해주세요"
            type="email"
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
          />
        </div>
        <div>
          <label>비밀번호 입력</label>
          <Input
            placeholder="8자 이상 작성해주세요"
            type="password"
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
          />
          <p></p>
          <Error>{error.password}</Error>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <Input
            placeholder="비밀번호를 다시한번 입력해주세요"
            type="password"
            onChange={(e) =>
              setFormState({ ...formState, passwordCheck: e.target.value })
            }
          />
          <Error>{error.passwordCheck}</Error>
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
