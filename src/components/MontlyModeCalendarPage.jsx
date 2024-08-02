import styled from "styled-components";
import RecordIcon from "../assets/record-icon.svg";
import { getDatesByMon } from "../util";
import { useRecoilValue } from "recoil";
import { selectedMonthState } from "../recoil/atom";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { getDiariesByMonth } from "../api/diaries";
import emotionColors, { getColors } from "../utils/emotionColors";
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
        console.log("data:", data);

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
