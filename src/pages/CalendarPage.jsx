import styled from "styled-components";
import BellIcon from "../assets/bell.svg";
import ArrowIcon from "../assets/arrow.svg";
import CalendarSIcon01 from "../assets/calendar_s01.svg";
import CalendarSIcon02 from "../assets/calendar_s02.svg";
import Filled_CalendarSIcon01 from "../assets/calendar_s01_filled.svg";
import Filled_CalendarSIcon02 from "../assets/calendar_s02_filled.svg";
import { useState } from "react";
import MontlyModeCalendarPage from "../components/MontlyModeCalendarPage";
import { Link, NavLink, Outlet } from "react-router-dom";

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
            to="/"
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
            to="/weeklyMode"
          >
            {calendarType === "weeklyMode" ? (
              <img src={Filled_CalendarSIcon02} alt="calendar icon filled" />
            ) : (
              <img src={CalendarSIcon02} alt="calendar icon" />
            )}
          </ToggleBtn>
        </CalendarToggle>
      </CalendarCtrl>

      <Outlet />
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
  border-bottom: 2px solid #c5c5c5;
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

const ToggleBtn = styled(NavLink)`
  padding: 3px 7px;
  height: 31px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $isActive, $isMonthlyMode }) =>
    $isActive &&
    ($isMonthlyMode
      ? "background-color: #a4bfed; border-right: 3px solid #bfbfbf; border-top-right-radius: 7px;border-bottom-right-radius: 7px;"
      : "background-color: #a4bfed; border-left: 3px solid #bfbfbf; border-top-left-radius: 7px; border-bottom-left-radius: 7px")}
`;
