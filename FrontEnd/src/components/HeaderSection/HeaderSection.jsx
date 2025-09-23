import NavigationBarSection from './NavigationBar';
import TopHeaderSection from './TopHeader';

function HeaderSection() {
   return (
      <header className="MainHeaderSection">
         <>
            <TopHeaderSection />
            <NavigationBarSection />
         </>

      </header>
   )
}

export default HeaderSection;