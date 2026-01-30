import CrownIcon from "../../assets/images/CrownSimple.png";
import { Container, Menu, Item, Highlight } from "./styles";

export const CategoriesMenu = () => {
  return (
    <>
      <Container>
        <Menu>
          <Item>Todas Categorias</Item>
          <Item>Supermercado</Item>
          <Item>Livros</Item>
          <Item>Moda</Item>
          <Item>Lançamentos</Item>

          <Highlight>Ofertas do Dia</Highlight>

          <Item>
            <img src={CrownIcon} alt="" />
            Assinatura
          </Item>
        </Menu>
      </Container>
    </>
  );
};
