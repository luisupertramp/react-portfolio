import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';

import Home from './components/Home';
import BlogsList from './components/BlogsList';
import { ThemeProvider } from './ThemeContext';

function App() {
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/blog' element={<BlogsList/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
