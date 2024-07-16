import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import SmileIcon from "../assets/smile.svg";
import CalendarIcon from "../assets/calendar.svg";
import AnalyzeIcon from "../assets/analyze.svg";
import PostIcon from "../assets/post.svg";

export default function BnbLayout() {
  return (
    <>
      <Outlet />

      <BnB>
        <BnbItem to="/">
          <img src={CalendarIcon} alt="smile icon" />
          <span>캘린더</span>
        </BnbItem>
        <BnbItem>
          <img src={PostIcon} alt="post icon" />
          <span>기록하기</span>
        </BnbItem>
        <BnbItem to="analyze">
          <img src={AnalyzeIcon} alt="smile icon" />
          <span>분석하기</span>
        </BnbItem>
        <BnbItem>
          <img src={SmileIcon} alt="smile icon" />
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
  max-width: 375px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 16px 60px;
  box-shadow: -1px -1px 1px 2px rgba(0, 0, 0, 0.15);
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
