import React, { useEffect, useState } from "react";
import WordAnalysisDashboard from "../components/WordAnalysisDashboard";
import styled from "styled-components";
import Chart from "react-apexcharts";
import CommingSoon from "../assets/comming-soon.jpeg";
import { Link, useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import CalendarIcon from "../assets/report-calendar-icon.svg";
import { getColors, getCover, getEmotion } from "../utils/emotionColors";
import { getDateFn } from "../utils/date";

const OPTIONS = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 350,
    stacked: false,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#ffdc72", "#ffb199"],
  stroke: {
    width: [4, 4],
  },
  plotOptions: {
    bar: {
      columnWidth: "20%",
    },
  },
  xaxis: {
    categories: [],
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: false,
        color: "#FF1654",
      },
      labels: {
        show: false,
      },
      title: {
        style: {
          color: "#FF1654",
        },
      },
      tooltip: {
        show: false,
      },
    },
  ],
  legend: {
    horizontalAlign: "left",
    offsetX: 40,
  },
};

const Day = ["일", "월", "화", "수", "목", "금", "토"];

export default function TodayReportPage() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(JSON.parse(searchParams.get("data")));
  const [options, setOptions] = useState(OPTIONS);
  const [pSeries, setPSeries] = useState({});
  const [nSeries, setNSeries] = useState({});

  useEffect(() => {
    const mData = data.monthlyEmotionResponse.sort((a, b) =>
      dayjs(a.createdDate).diff(b.createdDate)
    );

    setOptions({
      ...options,
      xaxis: {
        categories: mData.map((data) => data.createdDate),
      },
    });

    setPSeries({
      data: mData.map((data) => data.positiveEmotionPercent),
      name: "긍정",
    });
    setNSeries({
      data: mData.map((data) => data.negativeEmotionPercent),
      name: "부정",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <Cover>
          <img
            width={10}
            src={getCover(data.totalEmotionType)}
            alt="angry_cover"
          />
        </Cover>
        <Headings>
          <Title>
            <span>Today</span>
            <p>마음 리포트</p>
          </Title>
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <img src={CalendarIcon} alt="calendar icon" />
            <p style={{ marginBottom: "-4px" }}>
              2024-{dayjs(data.createdDate).month() + 1}-
              {getDateFn(data.createdDate)}-{Day[dayjs(data.createdDate).day()]}
            </p>
          </div>
        </Headings>
      </Header>
      <Main>
        <h2 style={{ margin: "15px 0" }}>
          민성님은 오늘
          <br />
          <span style={{ color: getColors(data.totalEmotionType) }}>
            {getEmotion(data.totalEmotionType)}
          </span>{" "}
          <span>{data.totalEmotionPercent}%</span>
        </h2>
        <p style={{ marginBottom: "15px" }}>{data.feedback}</p>

        <EmotionDistribution>
          <h2>오늘의 감정 분포도</h2>
          <ul>
            <li>
              <h3>분노</h3>
              <GraphItem $percent={data.emotions.anger} $color="#ff946d" />
              <Percent>{data.emotions.anger}%</Percent>
            </li>
            <li>
              <h3>놀람</h3>
              <GraphItem $percent={data.emotions.surprised} $color="#faa3e0" />
              <Percent>{data.emotions.surprised}%</Percent>
            </li>
            <li>
              <h3>불안</h3>
              <GraphItem $percent={data.emotions.anxiety} $color="#a9eb90" />
              <Percent>{data.emotions.anxiety}%</Percent>
            </li>
            <li>
              <h3>기쁨</h3>
              <GraphItem $percent={data.emotions.happiness} $color="#ffe156" />
              <Percent>{data.emotions.happiness}%</Percent>
            </li>
            <li>
              <h3>슬픔</h3>
              <GraphItem $percent={data.emotions.sadness} $color="#bdd5fa" />
              <Percent>{data.emotions.sadness}%</Percent>
            </li>
            <li>
              <h3>중립</h3>
              <GraphItem $percent={data.emotions.neutrality} $color="#bdd5fa" />
              <Percent>{data.emotions.neutrality}%</Percent>
            </li>
          </ul>
        </EmotionDistribution>

        <SentenceAnalysis>
          <WordAnalysisDashboard
            totalSentences={data.totalSentenceCount}
            negativePercent={data.negativeSentencePercent}
            positivePercent={data.positiveSentencePercent}
          />
          <Wrapper>
            {data.emotionSentences.map((item) => (
              <span
                style={{
                  backgroundColor: getColors(item.emotionType),
                }}
                key={item.sentence}
              >
                {item.sentence}{" "}
              </span>
            ))}
          </Wrapper>
        </SentenceAnalysis>

        <Graph>
          <GraphHeader>
            <h3>30일간의 변화</h3>
            <div>
              <span>긍정 문장</span>
              <span>부정 문장</span>
            </div>
          </GraphHeader>
          <Chart options={options} series={[pSeries, nSeries]} />
        </Graph>

        <div
          style={{
            padding: "20px 15px",
            backgroundColor: "#e0e0e0",
            margin: "0 -15px",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            과거에도 비슷한 감정을 느꼈어요
          </h3>
          <img
            style={{ width: "100%", display: "block" }}
            src={CommingSoon}
            alt="comming_soon"
          />
        </div>
        <Link to="/">
          <StyledLinkButton>메인으로 가기</StyledLinkButton>
        </Link>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

const Header = styled.header`
  position: relative;
  z-index: 1;
`;

const Headings = styled.div`
  padding-top: 40px;
  padding-left: 20px;
`;

const Title = styled.h1`
  span {
    font-family: stick;
    font-size: 32px;
    font-weight: 900;
    line-height: 46.34px;
    text-align: left;
  }
`;

const Cover = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Main = styled.main`
  margin-top: 230px;
  padding: 0 15px 120px;

  p {
    //styleName: body/Md;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.6px;
    letter-spacing: -0.02em;
    text-align: justified;
    margin-top: 10px;
    color: #111111;
    padding-bottom: 10px;
  }
`;

const EmotionDistribution = styled.div`
  background-color: #fff;
  margin: 0 -15px;

  padding: 24px 16px 24px 16px;

  h2 {
    //styleName: title/Md;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.6px;
    letter-spacing: -0.02em;
    text-align: left;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 90%;
    li {
      display: flex;
      h3 {
        //styleName: caption/Md;
        font-family: Pretendard;
        font-size: 12px;
        font-weight: 400;
        line-height: 14.32px;
        text-align: left;

        color: #111111;

        width: 15%;
        flex-shrink: 0;
        background: #f3f3f3;

        padding: 4px 5px 3px 7px;
      }
    }
  }
`;

const GraphItem = styled.div`
  width: calc(${({ $percent }) => $percent}%);
  background: ${({ $color }) => $color};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const Wrapper = styled.div``;

const SentenceAnalysis = styled.div`
  padding: 20px 0;
  border-top: 8px solid #e0e0e0;
  border-bottom: 8px solid #e0e0e0;
  margin: 0 -15px;

  ${Wrapper} {
    background: #dcdcdc;
    margin: 0 20px;
    padding: 10px;
    border-radius: 12px;
  }
`;

const Graph = styled.div`
  background: #fff;
  padding: 30px 0;
  margin: 0 -15px;
  padding: 20px;
`;

const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      //styleName: caption/graySm;
      font-family: Pretendard;
      font-size: 11px;
      font-weight: 400;
      line-height: 13.13px;
      text-align: left;
      display: flex;
      align-items: center;
      gap: 5px;
      &:before {
        content: " ";
        display: block;
        width: 15px;
        height: 3px;
        background: #ffdc72;
      }

      &:last-child {
        &:before {
          background: #ffb199;
        }
      }
    }
  }
`;

const StyledLinkButton = styled.div`
  background: #000000;
  color: #fff;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 20px;
`;

const Percent = styled.div`
  //styleName: body/Sm;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.03em;
  text-align: left;
  margin-left: 10px;
`;
