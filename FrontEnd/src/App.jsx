import { Routes, Route } from 'react-router'
import './style.css'
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App;
