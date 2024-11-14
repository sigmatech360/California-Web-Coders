import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screen/Home'
 
 
 

export default function UserRouter() {
  return (
    <BrowserRouter basename="/californiawebcoders">
      <Routes>
        <Route path="/" element={<Home/>} />
 

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}