import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyzePage, CalendarPage, ProfilePage, RecordPage } from "./pages";
import { BnbLayout, RootLayout } from "./layouts";
import MontlyModeCalendarPage from "./components/MontlyModeCalendarPage";
import WeeklyModeCalendarPage from "./components/WeeklyModeCalendarPage";
import LoadingPage from "./pages/LoadingPage";
import { lazy, Suspense } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const TodayReportPageLazyed = lazy(async () => {
  await delay(2000);
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
        </Routes>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/today-report" element={<TodayReportPageLazyed />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RootLayout>
  );
}

export default App;
