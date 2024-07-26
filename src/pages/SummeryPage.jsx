import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { ReactComponent as BackIcon } from '../assets/back.svg';
import { ReactComponent as TodayIcon } from '../assets/today.svg';
import { Emotions, Emotion } from '../components/Emotion'


const SummeryPage = () => {
    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}. ${month}. ${day}`;
    };

    const date = new Date("2024-07-16T16:24:00"); // 작성 시간 포함된 날짜
    const title = "작업하면서 요아정 시켜먹기";
    const content = `냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 또 먹어야징 냠냠 냠냠 냠냠 냠냠 냠냠 냠냠냠냠 냠냠 냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 또 먹어야징 냠냠 냠냠 냠냠 냠냠 냠냠 냠냠냠냠 냠냠냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 또 먹어야징 냠냠 냠냠 냠냠 냠냠 냠냠 냠냠냠냠 냠냠냠냠 요아정 짱 맛있다.`;
    const emotions = ["#ff946d", "#FFE156"]; // 주요 두 가지 감정 색상

    return (
        <Container>
            <NavBar>
                <Arrow>
                    <BackIcon />
                </Arrow>
                <NavTitle>일기</NavTitle>
            </NavBar>
            <Content>
                <Day>
                    <DateText>{formatDate(date)} 의 기록</DateText>
                    {isToday(date) && (
                        <TodayIconWrapper>
                            <TodayIcon />
                        </TodayIconWrapper>
                    )}
                </Day>
                <Dairy date={date} title={title} content={content} emotions={emotions} />
            </Content>
            <ButtonWrapper>
                <Button>마음 리포트 보러가기</Button>
            </ButtonWrapper>
        </Container>
    );
};

const Dairy = ({ date, title, content, emotions }) => (
    <DairyWrapper>
        <DairyTitle>{title}</DairyTitle>
        <DairyContent>{content}</DairyContent>
        <DairyFooter>
            <Time>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Time>
            <Emotions>
                {emotions.map((color, index) => (
                    <Emotion key={index} $color={color} />
                ))}
            </Emotions>
        </DairyFooter>
    </DairyWrapper>
);

const Container = styled.div`
  background-color: #FFF; 
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
  padding: 3px 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  background-color: transparent;
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
  padding: 16px 16px 24px 16px;
  margin-top: 33px;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  border: 2px solid var(--gray-300, #E0E0E0);
  background: #FFF;
`;

const Day = styled.div`
  max-width: 311px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const DateText = styled.div`
  color: #404040;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  letter-spacing: -0.4px;
`;

const TodayIconWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 50px;
    height: 22px;
  }
`;

const DairyWrapper = styled.div`
  width: 311px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const DairyTitle = styled.div`
  overflow: hidden;
  color: #404040;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.32px;
`;

const DairyContent = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  color: #333;
  margin-bottom: 24px; /* DairyFooter와 24px 간격을 유지 */
`;

const DairyFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Time = styled.div`
  font-size: 12px;
  color: #888;
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 344px;
  padding: 14px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-400Neutral, #C5C5C5);
  background: var(--sad_primary-500, #BDD4FA);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  margin-top: auto; 
  margin-bottom: 65px; /* 하단 여백 */
  margin-left: 15px; /* 좌우 여백 */
  margin-right: 15px; /* 좌우 여백 */
`;

const Button = styled(Link)`
  background: none;
  border: none;
  color: var(--gray-800Font, #363636);
text-align: center;
/* title/Sm */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 120%; /* 19.2px */
letter-spacing: -0.32px;
  cursor: pointer;
  text-decoration: none; /* 링크 기본 스타일 제거 */
  text-align: center;
`;

export default SummeryPage;
