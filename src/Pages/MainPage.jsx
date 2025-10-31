import BannerSection from "../components/FrontEnd/BannerSection";
import CompaniesSlider from "../components/FrontEnd/CompanySlider";
import HeaderSection from "../components/FrontEnd/HeaderSection/HeaderSection";
import LatestProducts from "../components/FrontEnd/LatestProduct";
import AddvertismentCards from "../components/FrontEnd/MiddleCards";
import ShopbyCategory from "../components/FrontEnd/ShopByCategories";
import TrendingProductsSlider from "../components/FrontEnd/TrendingProductsSlider";

function MainPage() {
 return (
  <>
   <HeaderSection />
   <BannerSection />
   <CompaniesSlider />
   <TrendingProductsSlider />
   <AddvertismentCards />
   <LatestProducts />
   <ShopbyCategory />
  </>
 )
}

export default MainPage;