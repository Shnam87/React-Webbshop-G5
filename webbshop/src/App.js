import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
