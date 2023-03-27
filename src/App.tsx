import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";

function App(): JSX.Element {
  return <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
