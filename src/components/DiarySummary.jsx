import styled from "styled-components";
import dayjs from "dayjs";

const DairySummary = ({ title, createdDate, color }) => {
  return (
    <Summary>
      <Wrapper2>
        <DateContainer>
          <Day>
            2024-{dayjs(createdDate).month() + 1}-
            {dayjs(createdDate).date() + 1}
          </Day>
        </DateContainer>
      </Wrapper2>
      <p>{title}</p>
      <Point>
        <Ellipse1 style={{ backgroundColor: color }}></Ellipse1>
      </Point>
    </Summary>
  );
};

const Summary = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 343px;
  padding: 12px 16px;
  margin: 30px auto;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  border: 2px solid var(--gray-400Neutral, #c5c5c5);
  background: #fff;

  p {
    overflow: hidden;
    color: #404040;
    text-overflow: ellipsis;
    white-space: nowrap; // 텍스트가 한 줄에 표시되도록 설정
    width: 100%; // p 태그에 넓이를 할당
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: -0.32px;
  }
`;

const Wrapper2 = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DateContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 88px;
  align-items: center;
`;

const Day = styled.span`
  box-sizing: border-box;
  color: #000 !important;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 900;
  line-height: 120%;
  letter-spacing: -0.32px;
  margin-right: 4px;
`;

const Time = styled.span`
  box-sizing: border-box;
  color: #8a8a8a;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Today = styled.span`
  box-sizing: border-box;
  color: #404040;
  background-color: #ffe156;
  font-family: Stick;
  font-size: 12px; /* 폰트 크기 조정 */
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 8px;
  padding: 2px 4px; /* 패딩 추가 */
`;

const Point = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

const Ellipse1 = styled.span`
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  background-color: #ffb0df;
  border-radius: 50%;
`;

export default DairySummary;
