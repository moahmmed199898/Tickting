import {Routes, BrowserRouter, Route} from "react-router-dom"
import { DashboardPage } from "./Pages/DashboardPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
