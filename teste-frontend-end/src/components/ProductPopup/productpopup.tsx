import { useState } from "react";
import {
  ActionsContainer,
  BuyButton,
  CloseButton,
  ContentContainer,
  Description,
  DetailsLink,
  ImageContainer,
  ModalContainer,
  Overlay,
  Price,
  ProductImage,
  ProductName,
  QuantityButton,
  QuantityMinor,
  QuantitySelector,
  QuantityValue,
} from "./styles";
import type { ProductModalProps } from "../../types/ProductType";

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseButton onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="#808080"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseButton>

        <ImageContainer>
          <ProductImage
            src={product.photo || "/placeholder.svg"}
            alt={product.productName}
          />
        </ImageContainer>

        <ContentContainer>
          <ProductName>{product.productName}</ProductName>
          <Price>{formatPrice(product.price)}</Price>
          <Description>{product.descriptionShort}</Description>
          <Description>
            Many desktop publishing packages and web page <br /> editors now
            many desktop publishing
          </Description>
          <DetailsLink href="#">
            Veja mais detalhes do produto {">"}
          </DetailsLink>

          <ActionsContainer>
            <QuantitySelector>
              <QuantityMinor onClick={decreaseQuantity}>−</QuantityMinor>
              <QuantityValue>{String(quantity).padStart(2, "0")}</QuantityValue>
              <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
            </QuantitySelector>
            <BuyButton>COMPRAR</BuyButton>
          </ActionsContainer>
        </ContentContainer>
      </ModalContainer>
    </Overlay>
  );
}
