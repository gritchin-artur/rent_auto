import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import Layout from "./pages/layout/layout";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import FindCarPage from "./pages/findCarPage/findCarPage";
import FavoritePage from "./pages/favoritePage/favoritePage";
import GlobalStyled from "./createGlobalStyle/createGlobalStyle.styled";
import { useDispatch } from "react-redux";
import { carsApi } from "./redux/cars-operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carsApi());
    console.log();
  }, [dispatch]);
  return (
    <>
      <GlobalStyled />
      <Suspense fallback={<p>Загружаем...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<HomePage />} />
            <Route path="catalog" element={<FindCarPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <Toaster />
    </>
  );
}

export default App;
