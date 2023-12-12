import { Route, Routes } from "react-router-dom";
import "./App.scss";
import StartPage from "pages/StartPage";
import Header from "components/Header";
import SearchPage from "pages/SearchPage";
import AllWigwamsPage from "pages/AllWigwamsPage";
import WigwamPage from "pages/WigwamPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/wigwam" element={<AllWigwamsPage />} />
        <Route path="/:wigwamId" element={<WigwamPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
