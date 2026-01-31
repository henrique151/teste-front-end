import { Container, TabItem } from "./styles";
import type { ProductTapsProps } from "../../types/ProductType";

export const ProductTabs = ({ active, onChange }: ProductTapsProps) => {
  const tabs = [
    "CELULAR",
    "ACESSÓRIOS",
    "TABLETS",
    "NOTEBOOKS",
    "TVS",
    "VER TODOS",
  ];

  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          $active={tab === active}
          onClick={() => onChange(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </Container>
  );
};
