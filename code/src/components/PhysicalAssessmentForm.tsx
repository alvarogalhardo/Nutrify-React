import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ConfigType } from "../protocols";
import UserContext from "../contexts/userContext";
import { postPhysicalReq } from "../services/physicalApi";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Alert = withReactContent(Swal);

type PhysicalFormType = {
  patientId: number | undefined;
};

export default function PhysicalAssessmentForm({
  patientId,
}: PhysicalFormType) {
  const [physicalForm, setPhysicalForm] = useState({});
  const [skinFoldsForm, setSkinFoldsForm] = useState({});
  const [circumferenceForm, setCircumferenceForm] = useState({});
  const [boneDiameterForm, setBoneDiameterForm] = useState({});

  const { token } = useContext(UserContext);

  const navigate = useNavigate();

  const CONFIG: ConfigType = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  function handleForm(e: ChangeEvent<HTMLInputElement>, form: string) {
    const { name, value } = e.target;
    switch (form) {
      case "physical":
        setPhysicalForm({ ...physicalForm, [name]: parseInt(value) });
        break;
      case "skin-folds":
        setSkinFoldsForm({ ...skinFoldsForm, [name]: parseInt(value) });
        break;
      case "circumference":
        setCircumferenceForm({ ...circumferenceForm, [name]: parseInt(value) });
        break;
      case "bone-diameter":
        setBoneDiameterForm({ ...boneDiameterForm, [name]: parseInt(value) });
      default:
        break;
    }
  }

  async function submitForm(e: FormEvent) {
    e.preventDefault();
    const physicalFormWithPatientId = {...physicalForm,patientId}
    console.log(physicalFormWithPatientId);
    
    try {
      await postPhysicalReq(
        physicalFormWithPatientId,
        skinFoldsForm,
        circumferenceForm,
        boneDiameterForm,
        CONFIG
      );
      Alert.fire({
        icon: "success",
        background: "#dde5b6",
        timer: 2000,
        text: "Avaliação criada com sucesso!",
      });
      navigate(`/patient/${patientId}`);
    } catch (err) {
      console.log(err);
      Alert.fire({
        icon: "error",
        background: "#f0ead2",
        timer: 2000,
        text: "Algo deu errado, preencha os campos e tente novamente",
      });
    }
  }

  return (
    <StyledForm onSubmit={submitForm}>
      <h1>Dados Básicos:</h1>
      <StyledDiv>
        <label htmlFor="weight-input">
          Peso (kg)
          <StyledInput
            type="number"
            id="weight-input"
            name="weight"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "physical")}
          />
        </label>
        <label htmlFor="height-input">
          Altura (cm)
          <StyledInput
            type="number"
            id="height-input"
            name="height"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "physical")}
          />
        </label>
        <label htmlFor="sitting-height-input">
          Altura sentado (cm)
          <StyledInput
            type="number"
            id="sitting-height-input"
            name="sittingHeight"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "physical")}
          />
        </label>
        <label htmlFor="knee-height-input">
          Altura do joelho (cm)
          <StyledInput
            type="number"
            id="knee-height-input"
            name="kneeHeight"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "physical")}
          />
        </label>
      </StyledDiv>
      <h1>Dobras cutâneas (mm):</h1>
      <StyledDiv>
        <label htmlFor="triceps-input">
          Tricipital
          <StyledInput
            type="number"
            id="triceps-input"
            name="triceps"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="biceps-input">
          Bicipital
          <StyledInput
            type="number"
            id="biceps-input"
            name="biceps"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="abdominal-input">
          Abdominal
          <StyledInput
            type="number"
            id="abdominal-input"
            name="abdominal"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="subscapular-input">
          Subescapular
          <StyledInput
            type="number"
            id="subscapular-input"
            name="subscapular"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="mid-axilary-input">
          Axilar média
          <StyledInput
            type="number"
            id="mid-axilary-input"
            name="midAxillary"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="thigh-input">
          Coxa
          <StyledInput
            type="number"
            id="thigh-input"
            name="thigh"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="thoracic-input">
          Torácica
          <StyledInput
            type="number"
            id="thoracic-input"
            name="thoracic"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="suprailiac-input">
          Suprailíaca
          <StyledInput
            type="number"
            id="suprailiac-input"
            name="suprailiac"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="calf-input">
          Panturrilha
          <StyledInput
            type="number"
            id="calf-input"
            name="calf"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="waist-input">
          Cintura
          <StyledInput
            type="number"
            id="waist-input"
            name="waist"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="hip-input">
          Quadril
          <StyledInput
            type="number"
            id="hip-input"
            name="hip"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
        <label htmlFor="supraspinatus-input">
          Supraespinhal
          <StyledInput
            type="number"
            id="supraspinatus-input"
            name="supraspinatus"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "skin-folds")}
          />
        </label>
      </StyledDiv>
      <h1>Circunferências corporais (cm):</h1>
      <StyledDiv>
        <label htmlFor="neck-input">
          Pescoço
          <StyledInput
            type="number"
            id="neck-input"
            name="neckCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="chest-input">
          Tórax
          <StyledInput
            type="number"
            id="chest-input"
            name="chestCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="shoulder-input">
          Ombro
          <StyledInput
            type="number"
            id="shoulder-input"
            name="shoulderCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="waist-input">
          Cintura
          <StyledInput
            type="number"
            id="waist-input"
            name="waistCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="hip-input">
          Quadril
          <StyledInput
            type="number"
            id="hip-input"
            name="hipCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="abdomen-input">
          Abdomen
          <StyledInput
            type="number"
            id="abdomen-input"
            name="abdomenCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="relaxed-right-arm-input">
          Braço direito relaxado
          <StyledInput
            type="number"
            id="relaxed-right-arm-input"
            name="relaxed_right_armCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="contracted-right-arm-input">
          Braço direito contraído
          <StyledInput
            type="number"
            id="contracted-right-arm-input"
            name="contracted_right_armCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="relaxed-left-arm-input">
          Braço esquerdo relaxado
          <StyledInput
            type="number"
            id="relaxed-left-arm-input"
            name="relaxed_left_armCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="contracted-left-arm-input">
          Braço esquerdo contraído
          <StyledInput
            type="number"
            id="contracted-left-arm-input"
            name="contracted_left_armCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="forearm-input">
          Antebraço
          <StyledInput
            type="number"
            id="forearm-input"
            name="forearmCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="thigh-input">
          Coxa
          <StyledInput
            type="number"
            id="thigh-input"
            name="thighCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
        <label htmlFor="calf-input">
          Panturrilha
          <StyledInput
            type="number"
            id="calf-input"
            name="calfCircumference"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "circumference")}
          />
        </label>
      </StyledDiv>
      <h1>Diametro ósseo (cm):</h1>
      <StyledDiv>
        <label htmlFor="humerus-input">
          Úmero
          <StyledInput
            type="number"
            id="humerus-input"
            name="humerus"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "bone-diameter")}
          />
        </label>
        <label htmlFor="wrist-input">
          Punho
          <StyledInput
            type="number"
            id="wrist-input"
            name="wrist"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "bone-diameter")}
          />
        </label>
        <label htmlFor="femur-input">
          Fêmur
          <StyledInput
            type="number"
            id="femur-input"
            name="femur"
            maxLength={3}
            required
            onChange={(e) => handleForm(e, "bone-diameter")}
          />
        </label>
      </StyledDiv>
      <ButtonDiv>
        <SubmmitButton type="submit">Criar avaliação</SubmmitButton>
      </ButtonDiv>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    font-size: large;
    color: #283618;
    margin-bottom: 10px;
  }
  label {
    font-size: small;
    color: #283618;
    margin-right: 15px;
  }
  button {
    justify-content: center;
  }
`;

const StyledInput = styled.input`
  background-color: #fefae0;
  margin-top: 5px;
  margin-left: 5px;
  width: 50px;
  font-family: inherit;
  color: #6c584c;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const SubmmitButton = styled.button`
  cursor: pointer;
  font: inherit;
  background-color: #283618;
  border-radius: 5px;
  height: 40px;
  width: fit-content;
  color: #adc178;
  vertical-align: middle;
`;
