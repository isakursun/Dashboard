
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Header from './Components/Header';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<MainPage/>} />
  <Route path='/login' element={<LoginPage/>} />
 </Routes>
 </BrowserRouter>
 </>)
}

export default App;

