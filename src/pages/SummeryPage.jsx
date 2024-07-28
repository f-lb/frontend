import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import { ReactComponent as CorrectIcon } from "../assets/kebap.svg";
import FreeMode from "../components/FreeMode";
import TemplateMode from "../components/TemplateMode";

const SummeryPage = ({ mode = "template" }) => {
    return (
        <Container>
            <NavBar>
                <Arrow>
                    <BackIcon />
                </Arrow>
                <NavTitle>일기</NavTitle>
                <Correction>
                    <CorrectIcon />
                </Correction>
            </NavBar>
            <Content>
                {mode === "free" ? (
                    <FreeMode />
                ) : (
                    <TemplateMode />
                )}
            </Content>
            <ButtonWrapper>
                <Button>마음 리포트 보러가기</Button>
            </ButtonWrapper>
        </Container>
    );
};

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    box-sizing: border-box;
  }
`;

const NavBar = styled.header`
  display: flex;
  width: 100%;
  max-width: 375px;
  height: 48px;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  border-bottom: 2px solid var(--gray-300, #e0e0e0);
  background: #fff;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 12px;
  top: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Correction = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  right: 12px;
  top: 4px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const NavTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  width: 343px;
  padding: 16px 22px 24px 22px;
  margin-top: 33px;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid var(--gray-300, #e0e0e0);
  background: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 344px;
  margin-bottom: 65px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: auto;
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  background: #000;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: #fafafa;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.32px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

export default SummeryPage;
