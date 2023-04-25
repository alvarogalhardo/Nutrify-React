import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overlay from "../components/Overlay";
import BlurContext from "../contexts/blurContext";
import Home from "../pages/Home";
import PatientPage from "../pages/PatientPage";
import PhysicalAssessmentDetails from "../pages/PhysicalAssessmentDetails";
import PhysicalAssessmentFormPage from "../pages/PhysicalAssesmentFormPage";

export default function AuthRoutes() {
  const { blurIntensity } = useContext(BlurContext);

  return (
    <BrowserRouter>
      <Overlay blurIntensity={blurIntensity} />
      <Routes>
        <Route index element={<Home />} path={"/"} />
        <Route element={<PatientPage />} path={"/patient/:id"} />
        <Route
          element={<PhysicalAssessmentFormPage />}
          path={"/physical/:id"}
        />
        <Route
          element={<PhysicalAssessmentDetails />}
          path={"/physical/details/:physicalId"}
        />
      </Routes>
    </BrowserRouter>
  );
}
