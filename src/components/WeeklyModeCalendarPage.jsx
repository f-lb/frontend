import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedMonthState } from "../recoil/atom";
import { getDatesByMon } from "../util";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { getDiariesByMonth } from "../api/diaries";
import { getColors } from "../utils/emotionColors";

const Dayarr = ["일", "월", "화", "수", "목", "금", "토"];

export default function WeeklyModeCalendarPage() {
  const selectedMonth = useRecoilValue(selectedMonthState);
  const [diaries, setDiaries] = useState({});
  const scroll = useRef(null);

  useEffect(() => {
    if (selectedMonth !== dayjs().month() + 1) return;
    scroll.current.scrollTop = (dayjs().date() - 1) * 100;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDiaries({});
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
  }, [selectedMonth]);

  return (
    <DateWithDiaries ref={scroll}>
      {getDatesByMon({ year: 2024, mon: selectedMonth }).map((date) => {
        if (date < 0) return <></>;

        if (date in diaries) {
          return (
            <DateWithDiary>
              <DateAndDay>
                <Day>
                  {Dayarr[dayjs(`${2024}-${selectedMonth}-${date}`).day()]}
                </Day>
                <Date $color={diaries[date].color}>{date}</Date>
              </DateAndDay>
              <Diary>
                <DiaryWrapper>
                  <h2>{diaries[date].title}</h2>
                  <p>{diaries[date].contents}</p>
                  <div>
                    <span>16:24 PM</span>
                    <Emotions>{/* <Emotion $color={"#ff946d"} /> */}</Emotions>
                  </div>
                </DiaryWrapper>
              </Diary>
            </DateWithDiary>
          );
        } else {
          return (
            <DateWithDiary>
              <DateAndDay>
                <Day>
                  {Dayarr[dayjs(`${2024}-${selectedMonth}-${date}`).day()]}
                </Day>
                <Date $color={"#fff"}>{date}</Date>
              </DateAndDay>
              <Diary>
                <DiaryWrapper>
                  <h2>
                    반가워요!
                    <br />
                    오늘의 빈칸을 채워볼까요?
                  </h2>
                  <LinkToPostContainer>
                    <LinkToPost>일기 작성하고 분석받기 {">"}</LinkToPost>
                  </LinkToPostContainer>
                </DiaryWrapper>
              </Diary>
            </DateWithDiary>
          );
        }
      })}
    </DateWithDiaries>
  );
}

const DateWithDiaries = styled.ul`
  padding-bottom: 60px;
  height: 80vh;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const DateAndDay = styled.div`
  width: 88px;
  flex-shrink: 0;
`;

const Diary = styled.div`
  height: 100px;
  padding: 10px 10px 0px 0;
  flex-grow: 1;

  border-bottom: 1px solid #c5c5c5;
`;

const DateWithDiary = styled.li`
  display: flex;
  gap: 20px;

  &:first-child {
    ${Diary} {
      // margin-top: 10px;
    }
  }

  &:not(:first-child) {
    ${DateAndDay} {
      margin-top: -20px;
    }

    ${Diary} {
      transform: translateY(-15%);
    }
  }
`;

const Date = styled.div`
  background-color: ${({ $color }) => $color};
  //styleName: headline/Lg;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.64px;
  text-align: left;
  padding-top: 10px;
  padding-left: 20px;
  height: 96px;
`;
const Day = styled.div`
  border-top-right-radius: 12px;
  background-color: #fff;
  padding-left: 20px;
  padding: 5px 0 5px 20px;

  border-top: 1px solid #c5c5c5;

  // &:first-child {
  //   border: none;
  // }
`;

const DiaryWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    //styleName: subtitle/Sm;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
    line-height: 18.2px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 10px;
  }

  p {
    //styleName: caption/graySm;
    font-family: Pretendard;
    font-size: 11px;
    font-weight: 400;
    line-height: 13.13px;
    text-align: justified;
    color: #363636;
    margin-bottom: 15px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  div {
    display: flex;
    justify-content: space-between;
    span {
      color: #828282;
      //styleName: caption/graySm;
      font-family: Pretendard;
      font-size: 11px;
      font-weight: 400;
      line-height: 13.13px;
      text-align: left;
    }
  }
`;
const Emotions = styled.div`
  display: flex;
  gap: 3px;
`;

const LinkToPost = styled.div`
  text-decoration: underline;
  //styleName: caption/graySm;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  line-height: 13.13px;
  text-align: left;
  color: #363636;
  margin-top: auto;
  padding-bottom: 10px;
`;

const LinkToPostContainer = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
  flex-grow: 1;
  margin-top: auto;
  a {
    margin-top: 20px;
    margin-bottom: 0;
    margin-tight: 20px;
    text-align: right;
  }
  width: 100%;
`;
