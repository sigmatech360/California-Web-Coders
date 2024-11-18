import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screen/Home'
import About from "../Screen/about";
 import Webdesignservices from '../Screen/webdesignservices'
 
 

export default function UserRouter() {
  return (
    <BrowserRouter basename="/californiawebcoders">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
         
        <Route path="/services/wordpress-webdesignservices" element={<Webdesignservices/>} />
 
         
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}