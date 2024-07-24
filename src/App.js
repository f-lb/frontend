import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyzePage, CalendarPage, ProfilePage, RecordPage } from "./pages";
import { BnbLayout, RootLayout } from "./layouts";
import MontlyModeCalendarPage from "./components/MontlyModeCalendarPage";
import WeeklyModeCalendarPage from "./components/WeeklyModeCalendarPage";

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
      </BrowserRouter>
    </RootLayout>
  );
}

export default App;
