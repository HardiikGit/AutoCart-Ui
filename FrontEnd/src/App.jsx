import './style.css'
import HeaderSection from "./components/HeaderSection/HeaderSection"
import BannerSection from "./components/BannerSection"
import CompaniesSlider from "./components/CompanySlider"
import TrendingProducts from "./components/TrendingProducts";
import AddvertismentCards from './components/MiddleCards';
import LatestProducts from './components/LatestProduct';

function App() {
  return (
    <>
      <HeaderSection />
      <BannerSection />
      <CompaniesSlider />
      <TrendingProducts />
      <AddvertismentCards />
      <LatestProducts />
    </>
  )
}

export default App;
