import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import StartPage from "pages/StartPage";
import Header from "components/Header";
import SearchPage from "pages/SearchPage";
import AllWigwamsPage from "pages/AllWigwamsPage";
import WigwamPage from "pages/WigwamPage";
import { useState } from "react";
import Menu from "components/Menu";
import DefendPage from "pages/DefendPage";
import RequireAuth from "components/RequireAuth";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/" element={<RequireAuth element={<Outlet />} />}>
          <Route path="/wigwams">
            <Route index element={<AllWigwamsPage />} />
            <Route path=":id" element={<WigwamPage />} />
          </Route>
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/defend" element={<DefendPage />} />
      </Routes>
      <Menu isOpen={isMenuOpen} />
    </>
  );
}

export default App;
