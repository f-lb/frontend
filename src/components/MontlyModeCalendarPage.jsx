import styled from "styled-components";
import RecordIcon from "../assets/record-icon.svg";
import { getDatesByMon } from "../util";
import { useRecoilValue } from "recoil";
import { selectedMonthState } from "../recoil/atom";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getDiariesByMonth } from "../api/diaries";
import { getColors } from "../utils/emotionColors";

export default function MontlyModeCalendarPage() {
  const selectedMonth = useRecoilValue(selectedMonthState);
  const [diaries, setDiaries] = useState({});
  const navigate = useNavigate();
  console.log("diaries:", diaries);
  useEffect(() => {
    setDiaries({});
    if (!localStorage.getItem("accessToken")) {
      navigate("/signin");
      return;
    }
    // (async () => {
    //   const { data } = await getDiariesByMonth({ month: selectedMonth });
    //   console.log("data:", data);
    //   data.map((item) => {
    //     setDiaries({
    //       ...diaries,
    //       [dayjs(item.createdDate).date()]: {
    //         title: item.title,
    //         contents: item.contents,
    //         diaryId: item.diaryId,
    //         color: getColors(item.totalEmotion),
    //       },
    //     });
    //   });
    // })();

    (async () => {
      try {
        const { data } = await getDiariesByMonth({ month: selectedMonth });

        // Create a new diaries object based on the fetched data
        const newDiaries = data.reduce((acc, item) => {
          acc[dayjs(item.createdDate).date()] = {
            title: item.title,
            contents: item.contents,
            diaryId: item.diaryId,
            createdDate: item.createdDate,
            color: getColors(item.totalEmotion),
          };
          return acc;
        }, {});

        // Update the state with the new diaries object
        setDiaries((prevDiaries) => ({
          ...prevDiaries,
          ...newDiaries,
        }));
      } catch (error) {
        console.error("Error fetching diaries:", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]);

  return (
    <>
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
        {getDatesByMon({ year: 2024, mon: selectedMonth }).map((data) => (
          <li style={{ position: "relative" }}>
            {data === dayjs().date() &&
              selectedMonth === dayjs().month() + 1 && <StatusBar />}
            <Date
              $isFuture={data > 0 ? true : false}
              $color={data in diaries ? diaries[data].color : ""}
            >
              {data > 0 && data}
            </Date>
          </li>
        ))}
      </Calendar>
      <RecordEmpty>
        <Guide>
          <p>
            반가워요. <br />
            오늘의 빈칸을 채워볼까요?
          </p>
          <Link to="/record">
            <button>
              <span>기록하기</span>
              <img src={RecordIcon} alt="record icon" />
            </button>
          </Link>
        </Guide>
      </RecordEmpty>
    </>
  );
}

const WeeksBar = styled.ul`
  display: flex;
  padding: 10px 0;
  color: #404040;
  background-color: #f3f3f3;
  font-size: 12px;
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
    color: white;

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
    background: #000;
    color: white;

    /* calendarItemDropShadow */
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 160px;
    padding: 7px 8px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 0;
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
