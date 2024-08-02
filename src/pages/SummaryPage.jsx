import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import FreeMode from "../components/FreeMode";
import TemplateMode from "../components/TemplateMode";
// import { getReports } from "../api/reports";

const SummaryPage = ({ mode = "free" }) => {
  const { diaryId } = useParams();
  console.log("SummaryPage diaryId:", diaryId); // diaryId를 로그로 출력해 확인

  useEffect(() => {
    // (async () => {
    //   const { data } = await getReports({ diaryId });
    //   console.log(data);
    // })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!diaryId) {
    return <div>Error: diaryId is required</div>;
  }

  return (
    <Container>
      <NavBar>
        <Arrow>
          <BackIcon />
        </Arrow>
        <NavTitle>일기</NavTitle>
      </NavBar>
      <Content>
        {mode === "free" ? <FreeMode diaryId={diaryId} /> : <TemplateMode />}
      </Content>
      <ButtonWrapper>
        <Button to="/today-report">마음 리포트 보러가기</Button>
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
  margin-top: 10px;
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

export default SummaryPage;
