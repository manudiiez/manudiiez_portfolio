/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* ---------------------------- STYLED-COMPONENTS --------------------------- */
import styled from "styled-components";
import { GlobalStyles } from "./theme/theme";
/* ------------------------------- COMPONENTS ------------------------------- */
import NavbarContainer from "./components/navbar/NavbarContainer";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Container>
      <GlobalStyles/>
      <header>
        <NavbarContainer/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Container>
  );
}

export default App;


const Container = styled.div`

  header{
    height: 50px;
    @media (min-width: 768px) {
      height: 69px;
    }
  }
  

`