import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../assets/back.svg";
import FreeMode from "../components/FreeMode";
import TemplateMode from "../components/TemplateMode";
import { getDiaryById } from "../api/summary";
import dayjs from "dayjs";

const SummaryPage = ({ mode = "free" }) => {
  const { diaryId } = useParams();

  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [report, setReport] = useState(null);

  useEffect(() => {
    if (!diaryId) {
      console.error("diaryId is undefined");
      setError(new Error("diaryId is required"));
      setLoading(false);
      return;
    }

    console.log(`Fetching diary with ID: ${diaryId}`);

    (async () => {
      try {
        const result = await getDiaryById(diaryId);
        setDiary(result);
      } catch (error) {
        console.error("Error fetching diary:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [diaryId]);

  useEffect(() => {
    if (!diary) return;
    setReport(
      localStorage.getItem(
        `${dayjs(diary.createdDate).month() + 1}-${dayjs(
          diary.createdDate
        ).date()}`
      )
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diary]);

  if (!diaryId) {
    return <div>Error: diaryId is required</div>;
  }

  console.log("report:", report);

  return (
    <Container>
      <NavBar>
        <Arrow to="/">
          <BackIcon />
        </Arrow>
        <NavTitle>일기</NavTitle>
      </NavBar>
      <Content>
        {mode === "free" ? (
          <FreeMode
            diaryId={diaryId}
            loading={loading}
            diary={diary}
            error={error}
          />
        ) : (
          <TemplateMode />
        )}
      </Content>
      <ButtonWrapper>
        <Button to={`/today-report?data=${report}`}>
          마음 리포트 보러가기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  * {
    box-sizing: border-box;
  }
`;

const NavBar = styled.header`
  display: flex;
  width: 100%;
  max-width: 375px;
  height: 48px;
  padding: 3px 12px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  border-bottom: 2px solid var(--gray-300, #e0e0e0);
  background: #fff;
`;

const Arrow = styled(Link)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: 12px;
  top: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const NavTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.div`
  display: flex;
  width: 343px;
  padding: 16px 22px 24px 22px;
  margin-top: 33px;
  flex-direction: column;
  border-radius: 8px;
  border: 2px solid var(--gray-300, #e0e0e0);
  background: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 344px;
  margin-bottom: 65px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: auto;
`;

const Button = styled(Link)`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  background: #000;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: #fafafa;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.32px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;

export default SummaryPage;
