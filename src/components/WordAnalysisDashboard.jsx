import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SeoulNamsanEBFont from '../fonts/SeoulNamsanEB.otf'; // Ensure the path and extension are correct
import TvNEnjoystoriesBoldFont from '../fonts/tvNEnjoystoriesMedium.ttf'; // Adjust path as needed
import StickRegularFont from '../fonts/StickRegular.ttf';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'SeoulNamsanEB';
    src: url(${SeoulNamsanEBFont}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'tvNEnjoystoriesBold';
    src: url(${TvNEnjoystoriesBoldFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'stick';
    src: url(${StickRegularFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'SeoulNamsanEB', sans-serif;
  }
`;

const WordAnalysisDashboard = ({ totalWords, negativeWords, positiveWords, yesterdayNegativePercent }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDashboard = () => {
        setIsOpen(!isOpen);
    };

    const negativePercent = ((negativeWords / totalWords) * 100).toFixed(1);
    const positivePercent = ((positiveWords / totalWords) * 100).toFixed(1);
    const decreasePercent = (yesterdayNegativePercent - negativePercent).toFixed(1);

    return (
        <Container>
            <GlobalStyle />
            <Header onClick={toggleDashboard}>
                <Title>어휘 분석</Title>
                <Arrow>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                            <path d="M1 11L11 1L21 11" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 22 12" fill="none">
                            <path d="M1 1L11 11L21 1" stroke="#404040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </Arrow>
            </Header>
            {isOpen && (
                <>
                    <DashboardContainer>
                        <Grid>
                            <CellHeader>총 단어 수</CellHeader>
                            <CellHeader2>부정 어휘</CellHeader2>
                            <CellHeader3>긍정 어휘</CellHeader3>
                            <CellWithPadding>{totalWords}</CellWithPadding>
                            <Cell>
                                <NegativeValue>{negativePercent}%</NegativeValue>
                                <SubText>{negativeWords} / {totalWords}</SubText>
                            </Cell>
                            <Cell>
                                <PositiveValue>{positivePercent}%</PositiveValue>
                                <SubText>{positiveWords} / {totalWords}</SubText>
                            </Cell>
                        </Grid>
                        <HorizontalLine />
                        <VerticalLine style={{ left: '33.33%' }} />
                        <VerticalLine style={{ left: '66.66%' }} />
                    </DashboardContainer>
                    <FooterText>
                        <span></span> 어제보다 부정어휘가 {decreasePercent}% 감소했어요!
                    </FooterText>
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 340px;
  cursor: pointer; /* Add cursor pointer */
`;

const Title = styled.div`
  color: #404040;
  font-family: 'SeoulNamsanEB', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Arrow = styled.div`
  width: 22px;
  height: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
    stroke: #404040;
    stroke-width: 2;
  }
`;

const DashboardContainer = styled.div`
  width: 340px;
  height: 106px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  position: relative;
  padding: 0;
  box-sizing: border-box;
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

const CellHeader = styled.div`
  color: #404040;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 12px 20px;
  margin-left: 10px;
  width: 100%;
  position: relative;
`;

const CellHeader2 = styled.div`
  color: #404040;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  padding: 12px 20px;
  width: 100%;
  position: relative;
`;

const CellHeader3 = styled.div`
  color: #404040;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-right: 10px;
  width: 100%;
  position: relative;
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
  box-sizing: border-box;
`;

const CellWithPadding = styled(Cell)`
  padding-top: 10px; 
  padding-bottom: 10px;
`;

const NegativeValue = styled.div`
  color: #FFB199;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #FFB199;
  font-family: 'Stick', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PositiveValue = styled.div`
  color: #FFDB72;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #FFDB72;
  font-family: 'Stick', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SubText = styled.div`
  color: #8A8A8A;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FooterText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #404040;
  font-family: 'tvNEnjoystoriesBold', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
  text-align: left;
  width: 340px;

  span {
    width: 4px;
    height: 4px;
    flex-shrink: 0;
    display: inline-block;
    background: #404040;
    border-radius: 50%;
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  top: 39px; 
  left: 15px;
  width: 310px;
  height: 0;
  border-top: 1px solid #8A8A8A;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid #8A8A8A;
`;

export default WordAnalysisDashboard;
