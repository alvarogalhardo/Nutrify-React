import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../protocols";

type ProviderProps = {
  children: ReactNode;
};

type UserContext = Pick<User, "id" | "email">;

export interface UserContextInterface {
  user: UserContext;
  token: string;
  setUser: Dispatch<SetStateAction<UserContext>>;
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
  console.log(localData,'local');
  
  const [token, setToken] = useState<string>(() => {
    return parsedData?.token ? parsedData.token : null;
  });

  delete parsedData?.token;

  const [user, setUser] = useState<UserContext>(() => {
    return parsedData ? parsedData : null;
  });

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
