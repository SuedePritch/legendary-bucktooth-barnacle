import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path="/project" element={<Project />}></Route>
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
