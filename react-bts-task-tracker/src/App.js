
import './App.css';
import Header from './components/header/Header';
import Home from './page/Home'
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="App">
     <Header/>
    <Home/>
    </Container>
  );
}

export default App;
