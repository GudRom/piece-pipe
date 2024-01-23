import { Suspense, useState, lazy } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import LoadingFallback from "components/LoadingFallback";
import Header from "components/Header";
import Menu from "components/Menu";
import BigScreenFallback from "components/BigScreenFallback";
const StartPage = lazy(() => import("pages/StartPage"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const AllWigwamsPage = lazy(() => import("pages/AllWigwamsPage"));
const WigwamPage = lazy(() => import("pages/WigwamPage"));
const DefendPage = lazy(() => import("pages/DefendPage"));
const RequireAuth = lazy(() => import("components/RequireAuth"));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (window.innerWidth > 500) return <BigScreenFallback />;
  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
      <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </>
  );
}

export default App;
