
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthStack from "./auth/components/AuthStack";

import AuthService from "./auth/services/auth.service";
import HomeStack from "./components/HomeStack";

const App = () => {

  if(false) {
    return <AuthStack/>
  }

  return (
    <HomeStack/>
  );
};

export default App;