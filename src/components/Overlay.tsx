import styled from "styled-components";

type OverlayProps = {
  blurIntensity: number;
};

const Overlay = styled.div<OverlayProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(${(props) => props.blurIntensity}px);
  pointer-events: none;
`;

export default Overlay;
