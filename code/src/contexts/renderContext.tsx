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

interface RenderContextInterface {
  render: boolean;
  setRender: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  render: false,
  setRender: (render: boolean) => {},
} as RenderContextInterface;

const RenderContext = createContext(defaultState);

export default RenderContext;

export function RenderProvider({ children }: ProviderProps) {
  const [render, setRender] = useState(false);
  console.log(render);
  

  return (
    <RenderContext.Provider
      value={{
        render,
        setRender,
      }}
    >
      {children}
    </RenderContext.Provider>
  );
}
