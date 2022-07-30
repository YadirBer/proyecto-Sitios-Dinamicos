import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Single from "./pages/Single";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/categoria" element={<Category />} />
        <Route path="/entrada" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
