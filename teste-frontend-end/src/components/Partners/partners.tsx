import {
  PartnerCard,
  Content,
  Title,
  Description,
  BackgroundImage,
  ConfiraButton,
  SectionContainer,
  TextGroup,
} from "./styles";

import PartnerImg from "../../assets/images/Banner Apoio.jpg";

export const Partners = () => {
  return (
    <SectionContainer>
      <PartnerCard>
        <BackgroundImage $imageUrl={PartnerImg} />
        <Content>
          <TextGroup>
            <Title>Parceiros</Title>
            <Description>Lorem ipsum dolor sit amet, consectetur</Description>
          </TextGroup>
          <ConfiraButton>CONFIRA</ConfiraButton>
        </Content>
      </PartnerCard>

      <PartnerCard>
        <BackgroundImage $imageUrl={PartnerImg} />
        <Content>
          <Title>Parceiros</Title>
          <Description>
            {" "}
            Lorem ipsum dolor sit <br /> amet, consectetur
          </Description>
          <ConfiraButton>CONFIRA</ConfiraButton>
        </Content>
      </PartnerCard>
    </SectionContainer>
  );
};
