import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyzePage, CalendarPage, ProfilePage, RecordPage } from "./pages";
import { BnbLayout, RootLayout } from "./layouts";

function App() {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<BnbLayout />}>
            <Route path="/" element={<CalendarPage />} />
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
