import BannerSection from "../components/Front/BannerSection";
import CartProducts from "../components/Front/CartProducts";
import CompaniesSlider from "../components/Front/CompanySlider";
import HeaderSection from "../components/Front/HeaderSection/HeaderSection";
import LatestProducts from "../components/Front/LatestProduct";
import AddvertismentCards from "../components/Front/MiddleCards";
import ShopbyCategory from "../components/Front/ShopByCategories";
import TrendingProductsSlider from "../components/Front/TrendingProductsSlider";
function MainPage() {
 return (
  <>
   <HeaderSection />
   <CartProducts />
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