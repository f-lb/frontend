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
          느끼는지 이해하는 것이 중요합니다. 분노를 표현할 때는 공격적인 방식
          대신, 차분하고 건설적인 방식으로 표현해보세요. “나는 지금 화가 나”라고
          솔직하게 말하는 것이 좋습니다. 분노의 원인을 분석해보세요. 어떤
          상황에서, 누구에게, 왜 화가 났는지를 구체적으로 생각해보면 문제를
          해결하는 데 도움이 됩니다. 마지막으로, 자신을 너무 심각하게 여기지
          말고 가벼운 마음으로 상황을 바라보세요. 유머를 통해 긴장을 풀거나,
          긍정적인 면을 찾으려는 노력이 분노를 완화하는 데 도움이 될 수
          있습니다.
        </p>
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
    font-weight: 400;
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
  padding: 0 10px;
`;
