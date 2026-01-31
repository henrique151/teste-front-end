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

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.photo} alt={product.productName} />
      </ImageContainer>

      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Description>
      <OldPrice>R$ 30,90</OldPrice>
      <Price>R$ 28,90</Price>
      <Installments>ou 2x de R$ 49,95 sem juros</Installments>
      <FreeShipping>Frete grátis</FreeShipping>

      <BuyButton>COMPRAR</BuyButton>
    </Container>
  );
};
