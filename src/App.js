import Main from './components/Main';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
