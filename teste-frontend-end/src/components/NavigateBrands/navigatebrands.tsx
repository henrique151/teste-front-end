import { Section, Title, BrandsGrid, BrandCircle, Logo } from "./styles";

import BrandLogo from "../../assets/images/Logo.png";

const brands = [
  { id: 1, name: "Econverse", logo: BrandLogo },
  { id: 2, name: "Econverse", logo: BrandLogo },
  { id: 3, name: "Econverse", logo: BrandLogo },
  { id: 4, name: "Econverse", logo: BrandLogo },
  { id: 5, name: "Econverse", logo: BrandLogo },
];

export const NavigateBrands = () => {
  return (
    <Section>
      <Title>Navegue por marcas</Title>

      <BrandsGrid>
        {brands.map((brand) => (
          <BrandCircle key={brand.id}>
            <Logo src={brand.logo} alt={brand.name} />
          </BrandCircle>
        ))}
      </BrandsGrid>
    </Section>
  );
};
