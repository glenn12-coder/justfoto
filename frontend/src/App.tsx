import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Photobooth from "./pages/Photobooth";
import Template from "./pages/Template";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/photobooth" element={<Photobooth />} />
          <Route path="/tentang" element={<Template />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
