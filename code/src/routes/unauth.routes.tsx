import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";

export default function UnauthRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} path={"/"} />
        <Route element={<SignUp />} path={"/signup"} />
      </Routes>
    </BrowserRouter>
  );
}
