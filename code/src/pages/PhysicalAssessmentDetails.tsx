import Header from "../components/Header";
import StyledScreen from "../components/StyledScreen";
import PhysicalDetailsDashboard from "../components/dashboards/PhysicalDetailsDashboard";

export default function PhysicalAssessmentDetails() {
  return (
    <>
      <Header />
      <StyledScreen>
        <PhysicalDetailsDashboard />
      </StyledScreen>
    </>
  );
}
