import { useContext } from "react";
import UserContext from "./contexts/userContext";
import AuthRoutes from "./routes/auth.routes";
import UnauthRoutes from "./routes/unauth.routes";

function App(): JSX.Element {
  const { user, setUser, token, setToken } = useContext(UserContext);

  return <div className="App">{token ? <AuthRoutes /> : <UnauthRoutes />}</div>;
}

export default App;
