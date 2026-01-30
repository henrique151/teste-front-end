import { Wrapper, Card, Icon, Label, CategoryItem } from "./styles";

import Tech from "../../assets/images/Computador.png";
import Market from "../../assets/images/Supermercado.png";
import Drinks from "../../assets/images/Bebidas.png";
import Tools from "../../assets/images/Ferramentas.png";
import Health from "../../assets/images/Saude.png";
import Fitness from "../../assets/images/Esportes e Fitness.png";
import Fashion from "../../assets/images/Moda.png";

const categories = [
  { icon: Tech, label: "Tecnologia", active: true },
  { icon: Market, label: "Supermercado" },
  { icon: Drinks, label: "Bebidas" },
  { icon: Tools, label: "Ferramentas" },
  { icon: Health, label: "Saúde" },
  { icon: Fitness, label: "Esportes e Fitness" },
  { icon: Fashion, label: "Moda" },
];

export const Categories = () => {
  return (
    <Wrapper>
      {categories.map((item, index) => (
        <CategoryItem key={index}>
          <Card $active={item.active}>
            <Icon src={item.icon} alt={item.label} $active={item.active} />
          </Card>

          <Label $active={item.active}>{item.label}</Label>
        </CategoryItem>
      ))}
    </Wrapper>
  );
};
