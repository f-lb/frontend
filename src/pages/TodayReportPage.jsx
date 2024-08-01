import React, { useEffect } from "react";
import WordAnalysisDashboard from "../components/WordAnalysisDashboard";
import styled from "styled-components";
import AngryCover from "../assets/cover-angry.svg";
import Chart from "react-apexcharts";
import CommingSoon from "../assets/comming-soon.jpeg";
import { Link } from "react-router-dom";

const series = [
  {
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
  {
    data: [10, 20, 95, 40, 29, 60, 60, 91],
  },
];

const options = {
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
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
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

export default function TodayReportPage() {
  // 더미 데이터 설정
  const totalSentences = 38;
  const negativeSentences = 5;
  const positiveSentences = 2;
  const yesterdayNegativePercent = 8.7;
  const negativeVariance = -2;
  const positiveVariance = 0;

  return (
    <Container>
      <Header>
        <Cover>
          <img src={AngryCover} alt="angry_cover" />
        </Cover>
        <Headings>
          <Title>
            <span>Today</span>
            <p>마음 리포트</p>
          </Title>
          <p>2024-07-26-목 / 16:38</p>
        </Headings>
      </Header>
      <Main>
        <h2>
          민성님은 오늘
          <br />
          분노 42%
        </h2>
        <p>
          분노는 우리가 자주 느끼는 자연스러운 감정입니다. 우선, 자신의 분노를
          인정하고 그 감정을 받아들이세요. 감정을 억누르기보다는, 왜 그런 감정을
          느끼는지 이해하는 것이 중요합니다.
          <br /> 분노를 표현할 때는 공격적인 방식 대신, 차분하고 건설적인
          방식으로 표현해보세요. “나는 지금 화가 나”라고 솔직하게 말하는 것이
          좋습니다.
          <br /> 분노의 원인을 분석해보세요. 어떤 상황에서, 누구에게, 왜 화가
          났는지를 구체적으로 생각해보면 문제를 해결하는 데 도움이 됩니다.
          <br /> 마지막으로, 자신을 너무 심각하게 여기지 말고 가벼운 마음으로
          상황을 바라보세요. 유머를 통해 긴장을 풀거나, 긍정적인 면을 찾으려는
          노력이 분노를 완화하는 데 도움이 될 수 있습니다.
        </p>

        <EmotionDistribution>
          <h2>오늘의 감정 분포도</h2>
          <ul>
            <li>
              <h3>분노</h3>
              <GraphItem $percent={100} $color="#ff946d" />
            </li>
            <li>
              <h3>놀람</h3>
              <GraphItem $percent={42} $color="#faa3e0" />
            </li>
            <li>
              <h3>불쾌감</h3>
              <GraphItem $percent={42} $color="#a9eb90" />
            </li>
            <li>
              <h3>두려움</h3>
              <GraphItem $percent={42} $color="#b69ff8" />
            </li>
            <li>
              <h3>기쁨</h3>
              <GraphItem $percent={42} $color="#ffe156" />
            </li>
            <li>
              <h3>슬픔</h3>
              <GraphItem $percent={42} $color="#bdd5fa" />
            </li>
            <li>
              <h3>중립</h3>
              <GraphItem $percent={42} $color="#bdd5fa" />
            </li>
          </ul>
        </EmotionDistribution>

        <SentenceAnalysis>
          <WordAnalysisDashboard
            totalSentences={totalSentences}
            negativeSentences={negativeSentences}
            positiveSentences={positiveSentences}
            yesterdayNegativePercent={yesterdayNegativePercent}
            negativeVariance={negativeVariance}
            positiveVariance={positiveVariance}
          />

          <p>
            오늘은 날씨가 흐렸다. 그래서 그런지 나도 같이 우울해지는 느낌이었다.
            비가 왔던가? 안나가봐서 모르겠다. 오늘은 악몽을 꾸었다. 졸업작품전에
            아무 작품도 내지 못해 졸업을 못하는 꿈이었다. 요즘 졸업준비를 하면서
            불안감이 점점 커져가는데, 아직 아무것도 진행된게 없어서 큰일이다.
            악몽인거 깨닫고 일단 몸을 일으켜서 세수 하고 방을 정리하려 했지만,
            갑자기 확 무기력해져서 그냥 누워버렸다. 그 상태로 몇 시간이고 숏츠
            보면서 시간 보냈는데 어느새 자버린건지 눈떠보니 저녁이 됐다.
            저녁에는 나름 다이어트 해보겠다고 직접 요리했는데 망했다. 설탕 대신
            소금 넣은듯.. 아무튼 맛없었지만 재미는 있었다. 꾸역꾸역 먹고, 밤이
            되어서야 컴퓨터 앞에 얹았는데 뭘 해야할지 너무 막막하고 집중도 잘
            안돼서 일기부터 쓴다. 매번 후회하는 날이 반복되니, 어떻게 해야 할지
            모르겠다. 암튼 오늘의 일기 끝.
          </p>
        </SentenceAnalysis>

        <Graph>
          <Header>
            <h3>30일간의 변화</h3>
            <div>
              <span>긍정 문장</span>
              <span>부정 문장</span>
            </div>
          </Header>
          <Chart options={options} series={series} />
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

        <LinkBtn>메인으로 가기</LinkBtn>
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
  width: calc(${({ $percent }) => $percent}% - 15%);
  background: ${({ $color }) => $color};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SentenceAnalysis = styled.div`
  padding: 20px 0;
  border-top: 8px solid #e0e0e0;
  border-bottom: 8px solid #e0e0e0;
  margin: 0 -15px;

  p {
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

  ${Header} {
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
  }
`;

const LinkBtn = styled(Link)`
  background: #000000;
  color: #fff;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  margin-top: 20px;
`;
