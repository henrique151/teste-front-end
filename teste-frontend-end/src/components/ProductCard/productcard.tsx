import type { ProductCardProps } from "../../types/ProductType";
import {
  Container,
  Description,
  OldPrice,
  Price,
  Installments,
  FreeShipping,
  BuyButton,
  ImageContainer,
  ProductImage,
} from "./styles";

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.photo} alt={product.productName} />
      </ImageContainer>

      <Description>{product.productName}</Description>

      <OldPrice>R$ 30,90</OldPrice>
      <Price>R$ {product.price.toFixed(2)}</Price>
      <Installments>ou 2x de R$ 49,95 sem juros</Installments>
      <FreeShipping>Frete grátis</FreeShipping>

      <BuyButton
        onClick={(e) => {
          e.stopPropagation();
          onClick(product);
        }}
      >
        COMPRAR
      </BuyButton>
    </Container>
  );
};
