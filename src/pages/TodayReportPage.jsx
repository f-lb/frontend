import styled from "styled-components";
import AngryCover from "../assets/cover-angry.svg";

export default function TodayReportPage() {
  return (
    <>
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
      </Main>
    </>
  );
}

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
  padding: 0 15px 200px;

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
  border-bottom: 8px solid #e0e0e0;

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
      div {
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
