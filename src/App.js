import { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserRouter from "./Routers/index";

import AOS from "aos";
import "aos/dist/aos.css";


import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 300,
    });
  }, []);
  return (
    <>
      <UserRouter />
    </>
  );
}

export default App;
