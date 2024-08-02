import styled from "styled-components";
import BellIcon from "../assets/bell.svg";
import CalendarSIcon01 from "../assets/calendar_s01.svg";
import CalendarSIcon02 from "../assets/calendar_s02.svg";
import Filled_CalendarSIcon01 from "../assets/calendar_s01_filled.svg";
import Filled_CalendarSIcon02 from "../assets/calendar_s02_filled.svg";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedMonthState } from "../recoil/atom";

export default function CalendarPage() {
  const [calendarType, setCalendarType] = useState("monthlyMode");
  const [selectedMonth, setSelectedMonth] = useRecoilState(selectedMonthState);
  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    setSelectedMonth(+e.target.value);
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  return (
    <Container>
      <Header>
        <h1>Fl!B</h1>
        <img src={BellIcon} alt="bell icon" />
      </Header>
      <CalendarCtrl>
        <DateCtrl>
          <YearCtrl>
            <h3>2024</h3>
          </YearCtrl>
          <YearCtrl>
            <Select onChange={handleMonthChange} value={String(selectedMonth)}>
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </Select>
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
  h3 {
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    line-height: 23.6px;
    letter-spacing: -0.02em;
    text-align: left;
    color: #111111;
  }
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

const Select = styled.select`
  border: none;
  //styleName: title/Md;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  letter-spacing: -0.02em;
  text-align: left;

  &:focus {
    outline: none;
  }
`;
