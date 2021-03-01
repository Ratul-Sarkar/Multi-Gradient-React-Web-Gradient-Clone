import logo from './logo.svg';
import './App.css';
import  Header from './Header.js';
import  About from './About.js';
import  Gradients from './Gradients.js';
import  Contact from './Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Gradients/>
      <Contact/>
    </div>
  );
}

export default App;
