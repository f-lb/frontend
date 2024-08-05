import styled from "styled-components";
import Frame from "../assets/Frame 550.svg";
import TodayCard from "../assets/todayCard.svg";
import WeeklyCard from "../assets/weeklyCard.svg";
import MonthlyCard from "../assets/monthlyCard.svg";
import QuarterlyCard from "../assets/quarterlyCard.svg";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function AnalyzePage() {
  const navigate = useNavigate();

  const handleNavigateClick = (e) => {
    e.preventDefault();
    const data = localStorage.getItem(
      `${dayjs().month() + 1}-${dayjs().date()}`
    );

    if (!data) {
      alert("아직 오늘의 일기를 작성하지 않으셨습니다.");
      return;
    }

    navigate(`/today-report?data=${data}`);
  };

  return (
    <Wrapper>
      <Nav>리포트</Nav>
      <FrameWrapper>
        <img src={Frame} alt="Frame" />
      </FrameWrapper>
      <ReportWrapper>
        <ReportLink onClick={handleNavigateClick}>
          <ReportButton background={TodayCard}>
            <ReportTitle>하루 리포트</ReportTitle>
            <ReportDesc>나의 하루는 어떤 감정으로 채워졌을까?</ReportDesc>
          </ReportButton>
        </ReportLink>
        <Line />
        <ReportButton background={WeeklyCard}>
          <ReportTitle>일주일 리포트</ReportTitle>
          <ReportDesc>일주일 동안의 감정 동향이 궁금하다면?</ReportDesc>
        </ReportButton>
        <ReportButton background={MonthlyCard}>
          <ReportTitle>30일 리포트</ReportTitle>
          <ReportDesc>매달 30일, 한달 감정 리포트를 보내드려요.</ReportDesc>
        </ReportButton>
        <ReportButton background={QuarterlyCard}>
          <ReportTitle>3달 리포트</ReportTitle>
          <ReportDesc>나의 감정에 대해 보다 완.벽.히. 알고 싶다면?</ReportDesc>
        </ReportButton>
      </ReportWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 100vh;
  margin: 0 auto;
  font-family: Pretendard, sans-serif;
  background: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  overflow: hidden;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  background: white;
  border-bottom: 2px solid var(--gray-300, #e0e0e0);
  color: black;
`;

const FrameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 22px;
  width: 100%;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  box-sizing: border-box;
`;

const ReportLink = styled(Link)`
  display: block;
  width: 100%;
  max-width: 331px;
`;

const ReportButton = styled.button`
  display: flex;
  width: 100%;
  height: 122px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: ${({ background }) =>
    `url(${background}) lightgray 50% / cover no-repeat`};
  background-blend-mode: plus-lighter, normal;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
`;

const ReportTitle = styled.div`
  color: var(--gray-800Font, #111);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  letter-spacing: -0.4px;
`;

const ReportDesc = styled.div`
  color: var(--gray-700, #545454);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.28px;
`;

const Line = styled.div`
  width: 331px;
  height: 2px;
  background-color: var(--gray-600, #828282);
  align-self: center;
`;
