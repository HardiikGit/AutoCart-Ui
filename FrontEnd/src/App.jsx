import { Routes, Route } from 'react-router'
import './style.css'
import './Responsive.css'
import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import TestPages from './Pages/TestPages';
import { CartProvider } from './Hooks/AddToCart';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/test' element={<TestPages />} />
      </Routes>
    </CartProvider>
  )
}

export default App;
