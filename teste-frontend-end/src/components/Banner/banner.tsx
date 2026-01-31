import { Wrapper, Overlay, Content, Title, Subtitle } from "./styles";
import { Button } from "../Button/button";

import BannerImg from "../../assets/images/Banner Header.png";

export const Banner = () => {
  return (
    <Wrapper $imageUrl={BannerImg}>
      <Overlay>
        <Content>
          <Title>
            Venha conhecer nossas <br />
            promoções
          </Title>

          <Subtitle>
            <strong>50% Off</strong> nos produtos
          </Subtitle>

          <Button size="lg" variant="primary">
            Ver produto
          </Button>
        </Content>
      </Overlay>
    </Wrapper>
  );
};
