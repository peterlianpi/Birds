import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import BirdContextProvider from "./components/BirdContext/BirdContext";
import Layout from "./Layout";
import BirdDetail from "./components/BirdDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <BirdContextProvider>
          <Routes>
            <Route path="*" element={<Layout />} />
            <Route path="/:id" element={<BirdDetail />} />
          </Routes>
        </BirdContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
