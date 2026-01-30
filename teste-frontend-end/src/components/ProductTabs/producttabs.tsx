import { useState } from "react";
import { Container, TabItem } from "./styles";

const tabs = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

export const ProductTabs = () => {
  const [active, setActive] = useState("CELULAR");

  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem
          key={tab}
          $active={tab === active}
          onClick={() => setActive(tab)}
        >
          {tab}
        </TabItem>
      ))}
    </Container>
  );
};
