import { Container, Logo, SearchBox, Actions, Icon, Divider } from "./styles";

import LogoImg from "../../assets/images/Logo.png";
import SearchIcon from "../../assets/images/MagnifyingGlass.png";
import CartIcon from "../../assets/images/ShoppingCart.png";
import HeartIcon from "../../assets/images/Heart.png";
import UserIcon from "../../assets/images/UserCircle.png";
import BoxIcon from "../../assets/images/Box.png";

export const Header = () => {
  return (
    <>
      <Container>
        <Logo>
          <img src={LogoImg} alt="Econverse" />
        </Logo>

        <SearchBox>
          <input placeholder="O que você está buscando?" />
          <img src={SearchIcon} alt="Buscar" />
        </SearchBox>

        <Actions>
          <Icon src={BoxIcon} alt="Pedidos" />
          <Icon src={HeartIcon} alt="Favoritos" />
          <Icon src={UserIcon} alt="Usuário" />
          <Icon src={CartIcon} alt="Carrinho" />
        </Actions>
      </Container>

      <Divider />
    </>
  );
};
