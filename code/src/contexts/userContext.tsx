import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { User } from "../protocols";

type ProviderProps = {
  children: ReactNode;
};

type UserContextType = Pick<User, "id" | "email">;

export interface UserContextInterface {
  user: UserContextType;
  token: string;
  setUser: Dispatch<SetStateAction<UserContextType>>;
  setToken: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  user: {
    id: 0,
    email: "",
  },
  token: "",
  setUser: (user: UserContextType) => {},
  setToken: (token: string) => {},
} as UserContextInterface;

const UserContext = createContext(defaultState);

export default UserContext;

export function UserProvider({ children }: ProviderProps) {
  let localData: any = localStorage.getItem("Nutrify");
  let parsedData = JSON.parse(localData);

  const [token, setToken] = useState<string>(() => {
    return parsedData?.token ? parsedData.token : null;
  });

  const [user, setUser] = useState<UserContextType>(() => {
    return parsedData?.user ? parsedData.user : null;
  });

  useEffect(() => {
    localData = localStorage.getItem("Nutrify");
    parsedData = JSON.parse(localData);
  }, [token]);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
