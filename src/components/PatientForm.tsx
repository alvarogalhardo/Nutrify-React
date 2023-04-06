import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import BlurContext from "../contexts/blurContext";

interface PatientFormProps {
  setPatientForm: Dispatch<SetStateAction<boolean>>;
}

export default function PatientForm({ setPatientForm }: PatientFormProps) {
  const { setBlurIntensity } = useContext(BlurContext);

  function handleBlur() {
    setBlurIntensity(0);
    setPatientForm(false);
  }

  function handleFocus() {
    setBlurIntensity(10);
  }
  return (
    <Form id="patient-form" onBlur={handleBlur} onFocus={handleFocus}>
      <input type="text" placeholder="texto"/>
    </Form>
  );
}

const Form = styled.form`
  background-color: aliceblue;
  position: absolute;
  z-index: 1;
`;
