
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import Introduce from "./page/Introduce";
import Scars from "./page/Scars";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/scars" element={<Scars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
