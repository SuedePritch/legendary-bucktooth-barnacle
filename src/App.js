
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content'
import { useState } from 'react';
//App sets up page state and passes it through as props into header and content
function App() {
  const [page ,setPage] = useState('Home')
  return (
    <div className="App">
      <Header state={{page, setPage}}/>
      <Content state={{page, setPage}} />
      <Footer/>
    </div>
  );
}

export default App;
