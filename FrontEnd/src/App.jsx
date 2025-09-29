import { Routes, Route } from 'react-router'
import './style.css'
import './Responsive.css'
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import TestPages from './Pages/TestPages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/test' element={<TestPages />} />
      </Routes>
    </>
  )
}

export default App;
