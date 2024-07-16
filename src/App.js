import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnalyzePage, CalendarPage } from "./pages";
import { BnbLayout, RootLayout } from "./layouts";

function App() {
  return (
    <RootLayout>
      <BrowserRouter>
        <Routes>
            <Route element={<BnbLayout />}>
              <Route path="/" element={<CalendarPage />} />
              <Route path="/analyze" element={<AnalyzePage />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </RootLayout>
  );
}

export default App;
