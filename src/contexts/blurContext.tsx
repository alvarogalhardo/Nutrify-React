import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type ProviderProps = {
  children: ReactNode;
};

interface BlurContextInterface {
  blurIntensity: number;
  setBlurIntensity: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  blurIntensity: 0,
  setBlurIntensity: (blurIntensity: number) => {},
} as BlurContextInterface;

const BlurContext = createContext(defaultState);

export default BlurContext;

export function BlurProvider({ children }: ProviderProps) {
  const [blurIntensity, setBlurIntensity] = useState(0);

  return (
    <BlurContext.Provider value={{ blurIntensity, setBlurIntensity }}>
      {children}
    </BlurContext.Provider>
  );
}
