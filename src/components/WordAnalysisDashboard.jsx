import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import StickRegularFont from "../fonts/StickRegular.ttf";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }


  @font-face {
    font-family: 'stick';
    src: url(${StickRegularFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


`;

const WordAnalysisDashboard = ({
  totalSentences,
  negativePercent,
  positivePercent,
}) => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Title>문장 분석</Title>
      </Header>
      <DashboardContainer>
        <Grid>
          <CellHeaderTotal>총 문장 수</CellHeaderTotal>
          <CellHeader>부정 문장</CellHeader>
          <CellHeader>긍정 문장</CellHeader>
          <Cell>{totalSentences}</Cell>
          <Cell>
            <NegativeValue>{negativePercent}%</NegativeValue>
            <SubText>
              {(negativePercent * totalSentences) / 100} / {totalSentences}
            </SubText>
          </Cell>
          <Cell>
            <PositiveValue>{positivePercent}%</PositiveValue>
            <SubText>
              {(positivePercent * totalSentences) / 100} / {totalSentences}
            </SubText>
          </Cell>
        </Grid>
        <HorizontalLine />
        <VerticalLine style={{ left: "33.33%" }} />
        <VerticalLine style={{ left: "66.66%" }} />
      </DashboardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 340px;
`;

const Title = styled.div`
  color: var(--gray-800Font, #363636);
  /* title/Md */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.36px;
`;

const DashboardContainer = styled.div`
  width: 340px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  background: #fff;
  position: relative;
  padding: 0;
  box-sizing: border-box;
  margin: 0px 0 18px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const CellHeaderTotal = styled.div`
  color: var(--gray-800Font, #363636);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 12px 0;
  width: 100%;
`;

const CellHeader = styled.div`
  color: #404040;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 12px 0;
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #404040;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  width: 100%;
`;

const NegativeValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--angry-500, #ff946d);
  font-family: "Stick", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PositiveValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--happy-500, #ffe156);
  font-family: "Stick", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledSpan = styled.span`
  color: var(--fear-500, #b69ff8);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 19.2px */
  letter-spacing: -0.32px;
  margin-left: 4px;
`;

const SubText = styled.div`
  color: #8a8a8a;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 39px;
  left: 0;
  width: 100%;
  height: 0;
  border-top: 2px solid var(--gray-400Neutral, #c5c5c5);
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 2px solid var(--gray-400Neutral, #c5c5c5);
`;

export default WordAnalysisDashboard;
