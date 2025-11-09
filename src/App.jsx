import "./App.css";
import Container from "./components/Container";
import ContentBody from "./components/ContentBody";
import Header from "./components/Header";
import Watermark from "./components/Watermark";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Watermark />
        <ContentBody />
      </Container>
    </>
  );
}

export default App;
