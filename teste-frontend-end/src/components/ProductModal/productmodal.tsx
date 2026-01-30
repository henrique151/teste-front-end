import type { Props } from "../../types/ProductType";
import { Overlay, Modal, Image, Info, Close } from "./styles";

export const ProductModal = ({ product, onClose }: Props) => {
  return (
    <Overlay>
      <Modal>
        <Close onClick={onClose}>×</Close>

        <Image src={product.photo} />

        <Info>
          <h3>{product.productName}</h3>
          <p>{product.descriptionShort}</p>

          <strong>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </Info>
      </Modal>
    </Overlay>
  );
};
