import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserRouter from "./Routers/index";


import AOS from "aos";
import "aos/dist/aos.css";
import 'react-toastify/dist/ReactToastify.css';


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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
