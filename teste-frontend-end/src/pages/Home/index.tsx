import { Banner } from "../../components/Banner/banner";
import { Categories } from "../../components/Categories/categories";
import { CategoriesMenu } from "../../components/CategoryMenu/categoriamenu";
import { Header } from "../../components/Header/header";
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
    </>
  );
};
