import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overlay from "../components/Overlay";
import BlurContext from "../contexts/blurContext";
import Home from "../pages/Home";

export default function AuthRoutes() {
  const { blurIntensity } = useContext(BlurContext);

  return (
    <BrowserRouter>
      <Overlay blurIntensity={blurIntensity} />
      <Routes>
        <Route index element={<Home />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}
