import { useState } from "react";
import type { Product } from "../../types/ProductType";
import { ProductCard } from "../ProductCard/productcard";
import { ProductModal } from "../ProductModal/productmodal";
import {
  Container,
  TitleWrapper,
  Line,
  Title,
  Grid,
  NavRight,
  NavLeft,
  ProductsWrapper,
} from "./styles";
import ArrowLeft from "../../assets/images/Group 2411.png";
import ArrowRight from "../../assets/images/Group 2412.png";
import data from "../../../public/data/produtos.json";
import { ProductTabs } from "../ProductTabs/producttabs";

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Container>
      {/* TÍTULO */}
      <TitleWrapper>
        <Line />
        <Title>Produtos relacionados</Title>
        <Line />
      </TitleWrapper>

      {/* TIPOS DE PRODUTOS */}
      <ProductTabs />

      {/* GRID */}
      <ProductsWrapper>
        <NavLeft>
          <img src={ArrowLeft} alt="Anterior" />
        </NavLeft>
        <Grid>
          {data.products.slice(0, 4).map((product) => (
            <ProductCard key={product.productName} product={product} />
          ))}
        </Grid>
        <NavRight>
          <img src={ArrowRight} alt="Próximo" />
        </NavRight>
      </ProductsWrapper>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Container>
  );
};
