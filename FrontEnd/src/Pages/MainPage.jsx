import BannerSection from "../components/BannerSection";
import CompaniesSlider from "../components/CompanySlider";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import LatestProducts from "../components/LatestProduct";
import AddvertismentCards from "../components/MiddleCards";
import ShopbyCategory from "../components/ShopByCategories";
import TrendingProductsSlider from "../components/TrendingProductsSlider";

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