import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { selectedMonthState } from "../recoil/atom";
import { getDatesByMon } from "../util";
import { useEffect, useRef } from "react";
import dayjs from "dayjs";

export default function WeeklyModeCalendarPage() {
  const selectedMonth = useRecoilValue(selectedMonthState);
  const scroll = useRef(null);

  useEffect(() => {
    if (selectedMonth !== dayjs().month() + 1) return;
    scroll.current.scrollTop = (dayjs().date() - 1) * 100;
  }, []);

  return (
    <DateWithDiaries ref={scroll}>
      {getDatesByMon({ year: 2024, mon: selectedMonth }).map((date) => {
        if (date < 0) return <></>;
        return (
          <DateWithDiary>
            <DateAndDay>
              <Day>일</Day>
              <Date $color={"#ffb193"}>{date}</Date>
            </DateAndDay>
            <Diary>
              <DiaryWrapper style={{ borderBottom: "1px solid #c5c5c5" }}>
                <h2>작업하면서 요아정 시켜먹기</h2>
                <p>
                  냠냠 요아정 짱 맛있다. 혼자서 아이스크림 2인분에 초코쉘,
                  그래놀라, 미쯔 토핑 추가해서 먹었다. 우하하 정신놓고 먹었어
                  맛이 있었어
                </p>
                <div>
                  <span>16:24 PM</span>
                  <Emotions>{/* <Emotion $color={"#ff946d"} /> */}</Emotions>
                </div>
              </DiaryWrapper>
            </Diary>
          </DateWithDiary>
        );
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
`;

const DiaryWrapper = styled.div`
  padding-bottom: 15px;
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

const Emotion = styled.div`
  background-color: ${({ $color }) => $color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const LinkToPostWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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
`;

const LinkToPostContainer = styled.div`
  display: flex !important;
  justify-content: flex-end !important;
  flex-grow: 1;
  a {
    margin-top: 20px;
    margin-bottom: 0;
    margin-tight: 20px;
    text-align: right;
  }
  width: 100%;
`;
