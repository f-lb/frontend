import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyzePage, CalendarPage, ProfilePage, RecordPage } from "./pages";
import { BnbLayout, RootLayout } from "./layouts";
import MontlyModeCalendarPage from "./components/MontlyModeCalendarPage";
import WeeklyModeCalendarPage from "./components/WeeklyModeCalendarPage";
import LoadingPage from "./pages/LoadingPage";
import SummaryPage from "./pages/SummaryPage"; // SummaryPage 가져오기
import { lazy, Suspense } from "react";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";

const delay = new Promise((resolve) => setTimeout(resolve, 2000));

const TodayReportPageLazyed = lazy(async () => {
  await delay;
  return import("./pages/TodayReportPage");
});

function App() {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<BnbLayout />}>
            <Route element={<CalendarPage />}>
              <Route index path="/" element={<MontlyModeCalendarPage />} />
              <Route path="/weeklyMode" element={<WeeklyModeCalendarPage />} />
            </Route>
            <Route path="/analyze" element={<AnalyzePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/record" element={<RecordPage />} />
          </Route>
          <Route path="/summary/:diaryId" element={<SummaryPage />} />{" "}
          {/* SummaryPage 경로 수정 */}
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup-success" element={<SignupSuccess />} />
        </Routes>
        {/* <Suspense fallback={<LoadingPage />}> */}
        <Routes>
          <Route path="/today-report" element={<TodayReportPageLazyed />} />
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </RootLayout>
  );
}

export default App;
