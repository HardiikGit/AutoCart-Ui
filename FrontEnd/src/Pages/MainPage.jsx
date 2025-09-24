import BannerSection from "../components/BannerSection";
import CompaniesSlider from "../components/CompanySlider";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import LatestProducts from "../components/LatestProduct";
import AddvertismentCards from "../components/MiddleCards";
import TrendingProducts from "../components/TrendingProducts";

function MainPage() {
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

export default MainPage;