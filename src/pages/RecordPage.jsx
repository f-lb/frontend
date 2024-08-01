import styled from "styled-components";
import BackIcon from "../assets/back.svg";
import { Link } from "react-router-dom";
import ArrowRightIcon from "../assets/arrowRight.svg";

const Day = ["", "월", "화", "수", "목", "금", "토", "일"];

export default function RecordPage() {
  return (
    <>
      <Nav>
        <Link style={{ position: "absolute", left: "15px" }}>
          <Link to="/">
            <img src={BackIcon} alt="back_icon" />
          </Link>
        </Link>
        일기
      </Nav>

      <div>
        <Datepick>
          <h2>
            <span>2024년 7월</span>
            <img
              style={{ color: "#fff" }}
              src={ArrowRightIcon}
              alt="arrow_right"
            />
          </h2>
          <DateList>
            {new Array(31).fill().map((item, date) => (
              <Date $isActive={date === 6} $isToday={date + 1 === 10}>
                <p>{date + 1}</p>
                <span>월</span>
              </Date>
            ))}
          </DateList>
        </Datepick>

        <RecordField>
          <input placeholder="제목을 입력해주세요" />
          <textarea placeholder="내용을 입력해주세요"></textarea>

          <Btn>일기 작성하기</Btn>
        </RecordField>
      </div>
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

const Datepick = styled.div`
  background: #222222;
  color: #fff;
  padding: 15px;
  padding-bottom: 70px;

  h2 {
    display: flex;
    align-items: center;
    //styleName: title/Lg;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: left;
  }
`;

const DateList = styled.ul`
  display: flex;
  margin-top: 20px;
  overflow: scroll;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Date = styled.li`
  p {
    //styleName: title/Lg;
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${({ $isActive }) => ($isActive ? "#000" : "")};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 30px;
  &:first-child {
    padding-left: 0;
  }
  background: ${({ $isActive }) => ($isActive ? "#8cb1ed" : "")};
  color: ${({ $isActive }) => ($isActive ? "#000" : "")};

  border: ${({ $isToday }) => ($isToday ? "2px solid #b4b4b4" : "")};
  border: ${({ $isActive }) => ($isActive ? "2px solid #8cb1ed" : "")};

  span {
    //styleName: subtitle/Md;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
    letter-spacing: -0.02em;
    text-align: center;
    color: ${({ $isActive }) => ($isActive ? "#000" : "")};
  }
`;

const RecordField = styled.div`
  background: #fff;
  padding: 50px 20px;
  margin-top: -50px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid #bdbdbd;

    &:placeholder {
      color: #bdbdbd;
    }

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: none;
    border-radius: 10px;
    border: 1px solid #bdbdbd;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    height: 370px;

    &:focus {
      outline: none;
    }
  }
`;

const Btn = styled.button`
  background: #000000;
  color: #fff;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 20px;
`;
