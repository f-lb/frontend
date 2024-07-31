import React from "react";
import styled from "styled-components";
import { ReactComponent as TodayIcon } from "../assets/today.svg";

const FreeMode = () => {
  const date = new Date("2024-07-16");
  const title = "작업하면서 요아정 시켜먹기";
  const subtitle = "놀람 가득했던";
  const dayofweek = "토요일";
  const content = `냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 또 먹어야징 냠냠 냠냠 냠냠 냠냠 냠냠 냠냠냠냠 냠냠 냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 또 먹어야징 냠냠 냠냠 냠냠 냠냠 냠냠 냠냠냠냠 냠냠냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘, 그래놀라, 미쯔 토핑 추가해서 먹었다.  우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일 우하하 정신놓고 먹다가 다 먹을뻔! 배부르당 >.0 내일`;
  const emotions = ["놀라운", "행복한"];

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <FreeModeWrapper>
      <Day>
        <DateText>
          {formatDate(date)}
          <SubTitle>{subtitle} {dayofweek}</SubTitle>
        </DateText>
        {isToday(date) && (
          <TodayIconWrapper>
            <TodayIcon />
          </TodayIconWrapper>
        )}
      </Day>
      <Dairy>
        <DairyTitle>{title}</DairyTitle>
        <DairyContentWrapper>
          <DairyContent>{content}</DairyContent>
        </DairyContentWrapper>
        <DairyFooter>
          <Time>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</Time>
          <Emotions>
            {emotions.map((emotion, index) => (
              <Emotion key={index}>#{emotion}</Emotion>
            ))}
          </Emotions>
        </DairyFooter>
      </Dairy>
    </FreeModeWrapper>
  );
};

const FreeModeWrapper = styled.div`
  width: 100%;
`;

const Day = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #c5c5c5;
  margin-bottom: 8px;
`;

const DateText = styled.div`
  color: var(--gray-700, #545454);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.32px;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.div`
  margin-top: 4px;
  margin-bottom: 16px;
  color: var(--gray-600, #828282);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.28px;
`;

const TodayIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  svg {
    width: 50px;
    height: 22px;
  }
`;

const Dairy = styled.div`
  width: 100%;
`;

const DairyTitle = styled.div`
  margin-bottom:10px;
  margin-top:16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  overflow: hidden;
  color: var(--gray-800Font, #111);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -0.36px;
`;

const DairyContentWrapper = styled.div`
  max-height: 330px;
  overflow-y: auto;
  padding-right: 10px; /* 패딩을 추가하여 스크롤 바가 본문을 가리지 않도록 조정 */
  box-sizing: content-box; /* 패딩이 포함되지 않도록 조정 */
`;

const DairyContent = styled.div`
  color: var(--gray-800Font, #111);
  text-align: justify;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: -0.32px;
`;

const DairyFooter = styled.div`
 margin-top: 18px;  
 display: flex;
 flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Time = styled.div`
  font-size: 12px;
  color: #888;
  text-align: left;
`;

const Emotions = styled.div`
  display: flex;
  gap: 8px;
`;

const Emotion = styled.div`
  color: var(--gray-700, #545454);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.28px;
`;

export default FreeMode;
