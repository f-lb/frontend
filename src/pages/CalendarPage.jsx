import styled from "styled-components";
import BellIcon from "../assets/bell.svg";
import ArrowIcon from "../assets/arrow.svg";
import CalendarSIcon01 from "../assets/calendar_s01.svg";
import CalendarSIcon02 from "../assets/calendar_s02.svg";
import Filled_CalendarSIcon01 from "../assets/calendar_s01_filled.svg";
import Filled_CalendarSIcon02 from "../assets/calendar_s02_filled.svg";
import { useState } from "react";

const mockDatas = [
  {
    id: 0,
    date: 30,
    outOfDate: true,
    color: "#c5d6f5",
    future: false,
    today: false,
  },
  {
    id: 1,
    date: 31,
    outOfDate: true,
    color: "#ffe976",
    future: false,
    today: false,
  },
  {
    id: 2,
    date: 1,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 3,
    date: 2,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 4,
    date: 3,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 5,
    date: 4,
    outOfDate: false,
    color: "#c5d6f5",
    future: false,
    today: false,
  },
  {
    id: 6,
    date: 5,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 7,
    date: 6,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 8,
    date: 7,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 9,
    date: 8,
    outOfDate: false,
    color: "#c5d6f5",
    future: false,
    today: false,
  },
  {
    id: 10,
    date: 9,
    outOfDate: false,
    color: "#ffe976",
    future: false,
    today: false,
  },
  {
    id: 11,
    date: 10,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 12,
    date: 11,
    outOfDate: false,
    color: "#c5d6f5",
    future: false,
    today: false,
  },
  {
    id: 13,
    date: 12,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 14,
    date: 13,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 15,
    date: 14,
    outOfDate: false,
    color: "#ffe976",
    future: false,
    today: false,
  },
  {
    id: 16,
    date: 15,
    outOfDate: false,
    color: "#ffe976",
    future: false,
    today: false,
  },
  {
    id: 17,
    date: 16,
    outOfDate: false,
    color: "#ffbbec",
    future: false,
    today: false,
  },
  {
    id: 18,
    date: 17,
    outOfDate: false,
    color: "#ffbbec",
    future: false,
    today: false,
  },
  {
    id: 19,
    date: 18,
    outOfDate: false,
    color: "#b8eda5",
    future: false,
    today: true,
  },
  {
    id: 20,
    date: 19,
    outOfDate: false,
    color: null,
    future: false,
    today: false,
  },
  {
    id: 21,
    date: 20,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 22,
    date: 21,
    outOfDate: false,
    color: null,
    future: true,
  },
  {
    id: 23,
    date: 22,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 24,
    date: 23,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 25,
    date: 24,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 26,
    date: 25,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 27,
    date: 26,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 28,
    date: 27,
    outOfDate: true,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 29,
    date: 28,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 30,
    date: 29,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 31,
    date: 30,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 32,
    date: 31,
    outOfDate: false,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 33,
    date: 1,
    outOfDate: true,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 34,
    date: 2,
    outOfDate: true,
    color: null,
    future: true,
    today: false,
  },
  {
    id: 35,
    date: 3,
    outOfDate: true,
    color: null,
    future: true,
    today: false,
  },
];

export default function CalendarPage() {
  const [calendarType, setCalendarType] = useState("monthlyMode");

  return (
    <Container>
      <Header>
        <h1>Fl!B</h1>
        <img src={BellIcon} alt="bell icon" />
      </Header>
      <CalendarCtrl>
        <DateCtrl>
          <YearCtrl>
            <div>2024</div>
            <button>
              <img src={ArrowIcon} alt="arrow icon" />
            </button>
          </YearCtrl>
          <YearCtrl>
            <div>07</div>
            <button>
              <img src={ArrowIcon} alt="arrow icon" />
            </button>
          </YearCtrl>
        </DateCtrl>
        <CalendarToggle>
          <ToggleBtn
            onClick={() => setCalendarType("monthlyMode")}
            $isActive={calendarType === "monthlyMode"}
            $isMonthlyMode
          >
            {calendarType === "monthlyMode" ? (
              <img src={Filled_CalendarSIcon01} alt="calendar icon filled" />
            ) : (
              <img src={CalendarSIcon01} alt="calendar icon" />
            )}
          </ToggleBtn>
          <ToggleBtn
            onClick={() => setCalendarType("weeklyMode")}
            $isActive={calendarType === "weeklyMode"}
            $isMonthlyMode={false}
          >
            {calendarType === "weeklyMode" ? (
              <img src={Filled_CalendarSIcon02} alt="calendar icon filled" />
            ) : (
              <img src={CalendarSIcon02} alt="calendar icon" />
            )}
          </ToggleBtn>
        </CalendarToggle>
      </CalendarCtrl>
      <WeeksBar>
        <li>일</li>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
      </WeeksBar>
      <Calendar>
        {mockDatas.map((data) => (
          <li style={{ position: "relative" }}>
            {data.today && <StatusBar />}
            <Date
              $isOutOfDate={data.outOfDate}
              $isFuture={data.future}
              $color={data.color}
            >
              {data.date}
            </Date>
          </li>
        ))}
      </Calendar>
      <RecordEmpty>
        <span>2024-07-17</span>
        <Guide>
          <p>
            반가워요. <br />
            오늘의 빈칸을 채워볼까요?
          </p>
          <button>기록하기</button>
        </Guide>
      </RecordEmpty>
    </Container>
  );
}

const Container = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 24px;
  background-color: #fff;
`;

const CalendarCtrl = styled.div`
  padding: 0 16px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;

const DateCtrl = styled.div`
  display: flex;
  gap: 10px;
  color: #404040;

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.36px;
`;

const YearCtrl = styled.div`
  display: flex;
  align-items: center;
`;

const CalendarToggle = styled.div`
  border: 2px solid #bfbfbf;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #f3f3f3;
  height: 30px;
`;

const ToggleBtn = styled.button`
  padding: 3px 7px;
  height: 31px;

  ${({ $isActive, $isMonthlyMode }) =>
    $isActive &&
    ($isMonthlyMode
      ? "background-color: #a4bfed; border-right: 3px solid #bfbfbf; border-top-right-radius: 7px;border-bottom-right-radius: 7px;"
      : "background-color: #a4bfed; border-left: 3px solid #bfbfbf; border-top-left-radius: 7px; border-bottom-left-radius: 7px")}
`;

const WeeksBar = styled.ul`
  display: flex;
  padding: 10px 0;
  color: #404040;
  background-color: #f3f3f3;
  font-size: 12px;
  border-top: 2px solid #c5c5c5;
  li {
    flex-grow: 1;
    text-align: center;
  }
`;

const Calendar = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 24px 10px;
  text-align: center;
  gap: 7px;
  row-gap: 16px;
  border-bottom: 8px solid #d9d9d9;
  background-color: #fff;
`;

const Date = styled.div`
  cursor: pointer;
  text-align: center;
  color: #363636;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: ${({ $color }) => $color};
  opacity: ${({ $isOutOfDate }) => ($isOutOfDate ? "0.42" : "1")};
  border: ${({ $isFuture }) => ($isFuture ? "2px dashed #e0e0e0" : "")};
`;

const RecordEmpty = styled.div`
  padding: 10px 10px 100px;
  span {
    color: #8a8a8a;

    /* caption/Md */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    color: var(--gray-800Font, #363636);
    text-align: center;
    /* subtitle/Sm */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.28px;

    border-radius: 8px;
    border: 1px solid var(--gray-400Neutral, #c5c5c5);
    background: var(--sad_primary-500, #a4bfed);

    /* calendarItemDropShadow */
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 160px;
    padding: 7px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Guide = styled.div`
  width: fit-content;
  text-align: center;
  margin: 20px auto 0;

  color: #404040;
  p {
    text-align: center;
    /* title/Sm */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 19.2px */
    letter-spacing: -0.32px;
    margin-bottom: 16px;
  }
`;

const StatusBar = styled.div`
  width: 22px;
  height: 4px;
  background: #ffdb72;
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  top: -8px;
`;
