import { useState } from "react";
import type { Product, ProductsProps } from "../../types/ProductType";
import { ProductCard } from "../ProductCard/productcard";
import { ProductModal } from "../ProductModal/productmodal";
import {
  Container,
  Grid,
  NavRight,
  NavLeft,
  ProductsWrapper,
  EmptyState,
} from "./styles";
import data from "../../data/produtos.json";
import { ProductTabs } from "../ProductTabs/producttabs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionTitle } from "../SectionTitle/sectiontitle";

export const Products = ({
  title = "Produtos relacionados",
  subtitle,
  showTabs = true,
}: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("CELULAR");

  const filteredProducts =
    activeTab === "CELULAR" || activeTab === "VER TODOS" ? data.products : [];

  return (
    <Container>
      <SectionTitle title={title} subtitle={subtitle} />

      {/* Tabs */}
      {showTabs && <ProductTabs active={activeTab} onChange={setActiveTab} />}

      <ProductsWrapper>
        {filteredProducts.length > 0 ? (
          <>
            <NavLeft>
              <FiChevronLeft size={19} />
            </NavLeft>

            <Grid>
              {filteredProducts.slice(0, 4).map((product) => (
                <ProductCard key={product.productName} product={product} />
              ))}
            </Grid>

            <NavRight>
              <FiChevronRight size={19} />
            </NavRight>
          </>
        ) : (
          <EmptyState>Não temos esse produto no momento</EmptyState>
        )}
      </ProductsWrapper>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Container>
  );
};
