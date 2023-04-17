import { IoIosAddCircleOutline } from "react-icons/io";
import styled from "styled-components";
import StyledButton from "./StyledButton";

export default function PhysicalAssessmentForm() {
  return (
    <StyledForm>
      <h1>Dados Básicos:</h1>
      <StyledDiv>
        <label htmlFor="weight-input">
          Peso (kg)
          <StyledInput
            type="number"
            id="weight-input"
            name="weight"
            maxLength={3}
          />
        </label>
        <label htmlFor="height-input">
          Altura (cm)
          <StyledInput
            type="number"
            id="height-input"
            name="height"
            maxLength={3}
          />
        </label>
        <label htmlFor="sitting-height-input">
          Altura sentado (cm)
          <StyledInput
            type="number"
            id="sitting-height-input"
            name="sitting-height"
            maxLength={3}
          />
        </label>
        <label htmlFor="knee-height-input">
          Altura do joelho (cm)
          <StyledInput
            type="number"
            id="knee-height-input"
            name="knee-height"
            maxLength={3}
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
            name="triceps-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="biceps-input">
          Bicipital
          <StyledInput
            type="number"
            id="biceps-input"
            name="biceps-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="abdominal-input">
          Abdominal
          <StyledInput
            type="number"
            id="abdominal-input"
            name="abdominal-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="subscapular-input">
          Subescapular
          <StyledInput
            type="number"
            id="subscapular-input"
            name="subscapular-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="mid-axilary-input">
          Axilar média
          <StyledInput
            type="number"
            id="mid-axilary-input"
            name="mid-axilary-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="thigh-input">
          Coxa
          <StyledInput
            type="number"
            id="thigh-input"
            name="thigh-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="thoracic-input">
          Torácica
          <StyledInput
            type="number"
            id="thoracic-input"
            name="thoracic-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="suprailiac-input">
          Suprailíaca
          <StyledInput
            type="number"
            id="suprailiac-input"
            name="suprailiac-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="calf-input">
          Panturrilha
          <StyledInput
            type="number"
            id="calf-input"
            name="calf-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="waist-input">
          Cintura
          <StyledInput
            type="number"
            id="waist-input"
            name="waist-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="hip-input">
          Quadril
          <StyledInput
            type="number"
            id="hip-input"
            name="hip-skinfold"
            maxLength={3}
          />
        </label>
        <label htmlFor="supraspinatus-input">
          Supraespinhal
          <StyledInput
            type="number"
            id="supraspinatus-input"
            name="supraspinatus-skinfold"
            maxLength={3}
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
            name="neck-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="chest-input">
          Tórax
          <StyledInput
            type="number"
            id="chest-input"
            name="chest-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="shoulder-input">
          Ombro
          <StyledInput
            type="number"
            id="shoulder-input"
            name="shoulder-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="waist-input">
          Cintura
          <StyledInput
            type="number"
            id="waist-input"
            name="waist-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="hip-input">
          Quadril
          <StyledInput
            type="number"
            id="hip-input"
            name="hip-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="abdomen-input">
          Abdomen
          <StyledInput
            type="number"
            id="abdomen-input"
            name="abdomen-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="relaxed-right-arm-input">
          Braço direito relaxado
          <StyledInput
            type="number"
            id="relaxed-right-arm-input"
            name="relaxed-right-arm-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="contracted-right-arm-input">
          Braço direito contraído
          <StyledInput
            type="number"
            id="contracted-right-arm-input"
            name="contracted-right-arm-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="relaxed-left-arm-input">
          Braço esquerdo relaxado
          <StyledInput
            type="number"
            id="relaxed-left-arm-input"
            name="relaxed-left-arm-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="contracted-left-arm-input">
          Braço esqeurdo contraído
          <StyledInput
            type="number"
            id="contracted-left-arm-input"
            name="contracted-left-arm-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="forearm-input">
          Antebraço
          <StyledInput
            type="number"
            id="forearm-input"
            name="forearm-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="thigh-input">
          Coxa
          <StyledInput
            type="number"
            id="thigh-input"
            name="thigh-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="calf-input">
          Panturrilha
          <StyledInput
            type="number"
            id="calf-input"
            name="calf-circumference"
            maxLength={3}
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
            name="humerus-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="wrist-input">
          Punho
          <StyledInput
            type="number"
            id="wrist-input"
            name="wrist-circumference"
            maxLength={3}
          />
        </label>
        <label htmlFor="femur-input">
          Fêmur
          <StyledInput
            type="number"
            id="femur-input"
            name="femur-circumference"
            maxLength={3}
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
