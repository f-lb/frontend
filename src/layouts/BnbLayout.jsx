import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import SmileIcon from "../assets/smile.svg";
import FilledSmileIcon from "../assets/smile_filled.svg";
import CalendarIcon from "../assets/calendar.svg";
import Filled_CalendarIcon from "../assets/calendar_filled.svg";
import AnalyzeIcon from "../assets/analyze.svg";
import Filled_AnalyzeIcon from "../assets/chart_filled.svg";
import PostIcon from "../assets/post.svg";
import Filled_PostIcon from "../assets/post_filled.svg";
import { useLocation } from "react-router-dom";

export default function BnbLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Outlet />

      <BnB>
        <BnbItem to="/">
          {pathname !== "/" && pathname !== "/weeklyMode" ? (
            <img src={CalendarIcon} alt="calendar icon" />
          ) : (
            <img
              src={Filled_CalendarIcon}
              style={{ marginTop: "-1.3px" }}
              alt="filled canlendar icon"
            />
          )}
          <span>캘린더</span>
        </BnbItem>
        <BnbItem to="/record">
          {pathname !== "/record" ? (
            <img src={PostIcon} alt="calendar icon" />
          ) : (
            <img
              src={Filled_PostIcon}
              style={{ marginTop: "-1.3px" }}
              alt="filled canlendar icon"
            />
          )}
          <span>기록하기</span>
        </BnbItem>
        <BnbItem to="analyze">
          {pathname !== "/analyze" ? (
            <img src={AnalyzeIcon} alt="calendar icon" />
          ) : (
            <img
              src={Filled_AnalyzeIcon}
              style={{ marginTop: "-1.3px" }}
              alt="filled canlendar icon"
            />
          )}
          <span>분석하기</span>
        </BnbItem>
        <BnbItem to="profile">
          {pathname !== "/profile" ? (
            <img src={SmileIcon} alt="calendar icon" />
          ) : (
            <img
              style={{ marginTop: "-1.3px" }}
              src={FilledSmileIcon}
              alt="filled canlendar icon"
            />
          )}
          <span>프로필</span>
        </BnbItem>
      </BnB>
    </>
  );
}

const BnB = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: inherit;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px 50px;
  // box-shadow: 0px -2px 10px 0px #00000026;
  -webkit-box-shadow: 0px -0.5px 1.8px #00000026;
  -moz-box-shadow: 0px -2px 4.5px #00000026;
  background-color: #fff;
`;

const BnbItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  span {
    font-size: 8px;
  }
`;
