import styled from "styled-components";

type ContainerProps = {
  blurIntensity: number;
};

export default function Overlay({
  blurIntensity,
}: ContainerProps) {
  return (
    <>
      <Container blurIntensity={blurIntensity} />
    </>
  );
}

const Container = styled.div<ContainerProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(${(props) => props.blurIntensity}px);
  pointer-events: none;
`;
