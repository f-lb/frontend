import styled from "styled-components";
import BellIcon from "../assets/bell.svg";
import ArrowIcon from "../assets/arrow.svg";
import CalendarSIcon01 from "../assets/calendar_s01.svg";
import CalendarSIcon02 from "../assets/calendar_s02.svg";

export default function CalendarPage() {
  return (
    <>
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
          <button>
            <img src={CalendarSIcon01} alt="calendar icon" />
          </button>
          <button>
            <img src={CalendarSIcon02} alt="calendar icon" />
          </button>
        </CalendarToggle>
      </CalendarCtrl>
    </>
  );
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 24px;
`;

const CalendarCtrl = styled.div`
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
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
`;
