import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";


export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}
