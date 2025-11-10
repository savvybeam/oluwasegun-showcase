import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import ContentBody from "./components/ContentBody";
import Header from "./components/Header";
import Watermark from "./components/Watermark";

//pages
import Bio from "./pages/Bio";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import Works from "./pages/Works";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Watermark />

        <Routes>
          <Route path="/" element={<ContentBody />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
