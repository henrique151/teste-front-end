import { useState } from "react";
import type { Product, ProductsProps } from "../../types/ProductType";
import { ProductCard } from "../ProductCard/productcard";
import ProductModal from "../ProductPopup/productpopup";
import {
  Container,
  Grid,
  ProductsWrapper,
  EmptyState,
  NavButton,
  TabsWrapper,
} from "./styles";
import data from "../../data/produtos.json";
import { ProductTabs } from "../ProductTabs/producttabs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SectionTitle } from "../SectionTitle/sectiontitle";
import { motion } from "framer-motion";

export const Products = ({
  title = "Produtos relacionados",
  subtitle,
  showTabs = true,
}: ProductsProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState("CELULAR");
  const ITEMS_PER_PAGE = 4;
  const [startIndex, setStartIndex] = useState(0);

  const filteredProducts =
    activeTab === "CELULAR" || activeTab === "VER TODOS" ? data.products : [];

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < filteredProducts.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  const handlePrev = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <Container>
      <SectionTitle title={title} subtitle={subtitle} />

      {showTabs && (
        <TabsWrapper>
          <ProductTabs active={activeTab} onChange={setActiveTab} />
        </TabsWrapper>
      )}

      <ProductsWrapper>
        {filteredProducts.length > 0 ? (
          <>
            <NavButton
              side="left"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <FiChevronLeft size={19} />
            </NavButton>

            <Grid>
              {filteredProducts
                .slice(startIndex, startIndex + ITEMS_PER_PAGE)
                .map((product, index) => (
                  <motion.div
                    key={product.productName}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                    }}
                  >
                    <ProductCard
                      product={product}
                      onClick={setSelectedProduct}
                    />
                  </motion.div>
                ))}
            </Grid>

            <NavButton
              side="right"
              onClick={handleNext}
              disabled={startIndex + ITEMS_PER_PAGE >= filteredProducts.length}
            >
              <FiChevronRight size={19} />
            </NavButton>
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
