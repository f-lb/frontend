import styled from "styled-components";
import BellIcon from "../assets/bell.svg";
import ArrowIcon from "../assets/arrow.svg";
import CalendarSIcon01 from "../assets/calendar_s01.svg";
import CalendarSIcon02 from "../assets/calendar_s02.svg";
import Filled_CalendarSIcon02 from "../assets/calendar_s02_filled.svg";

export default function CalendarPage() {
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
          <ToggleBtn>
            <img src={CalendarSIcon01} alt="calendar icon" />
          </ToggleBtn>
          <ToggleBtn>
            <img src={Filled_CalendarSIcon02} alt="calendar icon" />
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
        <Date>30</Date>
        <Date>31</Date>
        {new Array(31).fill(0).map((date, i) => (
          <Date>{i}</Date>
        ))}
        <Date>1</Date>
        <Date>2</Date>
        <Date>3</Date>
      </Calendar>
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
  &:nth-child(2){
    border-left: 2px solid #bfbfbf;
    overflow: clip
    background-color:red;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: #A4BFED;
  }
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
  gap: 10px;
  row-gap: 18px;
  border-bottom: 8px solid #d9d9d9;
  background-color: #fff;
`;

const Date = styled.li`
  text-align: center;
  color: #363636;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #c5d6f5;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;
