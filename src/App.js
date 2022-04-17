// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Navbar />
          <Carousel />
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
