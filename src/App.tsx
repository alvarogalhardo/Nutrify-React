import { useContext } from "react";
import { BlurProvider } from "./contexts/blurContext";
import UserContext from "./contexts/userContext";
import AuthRoutes from "./routes/auth.routes";
import UnauthRoutes from "./routes/unauth.routes";

function App(): JSX.Element {
  const { token } = useContext(UserContext);

  return (
    <div className="App">
      {token ? (
        <BlurProvider>
          <AuthRoutes />
        </BlurProvider>
      ) : (
        <UnauthRoutes />
      )}
    </div>
  );
}

export default App;
