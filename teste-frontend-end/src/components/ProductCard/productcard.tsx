import type { Product } from "../../types/ProductType";
import {
  Container,
  ImageWrapper,
  Info,
  Description,
  OldPrice,
  Price,
  Installments,
  FreeShipping,
  BuyButton,
} from "./styles";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <img src={product.photo} alt={product.productName} />
      </ImageWrapper>
      <Info>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>
        <OldPrice>R$ 30,90</OldPrice>
        <Price>R$ 28,90</Price>
        <Installments>ou 2x de R$ 49,95 sem juros</Installments>
        <FreeShipping>Frete grátis</FreeShipping>
      </Info>
      <BuyButton>COMPRAR</BuyButton>
    </Container>
  );
};
