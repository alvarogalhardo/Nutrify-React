import { useContext } from "react";
import { BlurProvider } from "./contexts/blurContext";
import { RenderProvider } from "./contexts/renderContext";
import UserContext from "./contexts/userContext";
import AuthRoutes from "./routes/auth.routes";
import UnauthRoutes from "./routes/unauth.routes";

function App() {
  const { token } = useContext(UserContext);

  return (
    <div className="App">
      {token ? (
        <BlurProvider>
          <RenderProvider>
            <AuthRoutes />
          </RenderProvider>
        </BlurProvider>
      ) : (
        <UnauthRoutes />
      )}
    </div>
  );
}

export default App;
