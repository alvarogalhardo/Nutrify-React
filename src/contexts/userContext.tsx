import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type User = {
  id: number;
  email: string;
};

type ProviderProps = {
  children: ReactNode;
};

export interface UserContextInterface {
  user: User;
  token: string;
  setUser: Dispatch<SetStateAction<User>>;
  setToken: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  user: {
    id: 0,
    email: "",
  },
  token: "",
  setUser: (user: User) => {},
  setToken: (token: string) => {},
} as UserContextInterface;

const UserContext = createContext(defaultState);

export default UserContext;

export function UserProvider({ children }: ProviderProps) {
  const localData: any = localStorage.getItem("Nutrify");
  const parsedData = JSON.parse(localData);

  const [token, setToken] = useState<string>(() => {
    return parsedData?.token ? parsedData.token : null;
  });

  delete parsedData?.token;

  const [user, setUser] = useState<User>(() => {
    return parsedData ? parsedData : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
