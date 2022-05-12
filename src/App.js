
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Introduce from "./page/Introduce";

function App() {
  return (
    <Introduce/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/introduce" element={<Introduce />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
