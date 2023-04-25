import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PhysicalAssessmentDashboard from "../components/dashboards/PhysicalAssessmentDashboard";
import StyledScreen from "../components/StyledScreen";
import UserContext from "../contexts/userContext";
import { ConfigType, ParamsType, Patient } from "../protocols";
import { getPatientByIdReq } from "../services/patientApi";

export default function PhysicalAssessmentFormPage() {
  const { id } = useParams<keyof ParamsType>() as ParamsType;
  const [data, setData] = useState<Patient>();
  const { token } = useContext(UserContext);

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  async function getData(id: number) {
    const patient = await getPatientByIdReq(CONFIG, id);
    setData(patient);
  }

  useEffect(() => {
    getData(parseInt(id));
  }, []);
  return (
    <>
      <Header />
      <StyledScreen>
        <PhysicalAssessmentDashboard data={data} />
      </StyledScreen>
    </>
  );
}
