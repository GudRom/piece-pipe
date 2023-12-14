import { Route, Routes } from "react-router-dom";
import "./App.scss";
import StartPage from "pages/StartPage";
import Header from "components/Header";
import SearchPage from "pages/SearchPage";
import AllWigwamsPage from "pages/AllWigwamsPage";
import WigwamPage from "pages/WigwamPage";
import { useState } from "react";
import Menu from "components/Menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/wigwams" element={<AllWigwamsPage />} />
        <Route path="/:wigwamId" element={<WigwamPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
