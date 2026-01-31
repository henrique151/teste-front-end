import { Banner } from "../../components/Banner/banner";
import { Categories } from "../../components/Categories/categories";
import { CategoriesMenu } from "../../components/CategoryMenu/categoriamenu";
import { Footer } from "../../components/Footer/fotter";
import { Header } from "../../components/Header/header";
import { NavigateBrands } from "../../components/NavigateBrands/navigatebrands";
import { Newsletter } from "../../components/Newsletter/newsletter";
import { Partners } from "../../components/Partners/partners";
import { Products } from "../../components/Products/products";
import { SubHeader } from "../../components/SubHeader/subheader";

export const Home = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <CategoriesMenu />
      <Banner />
      <Categories />
      <Products />
      <Partners />
      <Products subtitle="Ver todos" showTabs={false} />
      <Partners />
      <NavigateBrands />
      <Products subtitle="Ver todos" showTabs={false} />
      <Newsletter />
      <Footer />
    </>
  );
};
