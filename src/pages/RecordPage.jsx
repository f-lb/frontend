import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import { Link } from "react-router-dom";

export default function RecordPage() {
  return (
    <>
      <Nav>
        <Link style={{ position: "absolute", left: "15px" }}>
          <img src={BackIcon} alt="back_icon" />
        </Link>
        일기
      </Nav>
    </>
  );
}

const Nav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
  background: #fff;
`;
