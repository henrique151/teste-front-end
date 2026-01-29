import Truck from "../../assets/images/Truck.png";
import CreditCard from "../../assets/images/CreditCard.png";
import ShieldCheck from "../../assets/images/ShieldCheck.png";

import { Container, Divider, Item, Text, Word } from "./styles";

const subHeaderItems = [
  {
    icon: ShieldCheck,
    parts: [
      { text: "Compra", tone: "muted" },
      { text: "100% segura", tone: "highlight" },
    ],
  },
  {
    icon: Truck,
    parts: [
      { text: "Frete grátis", tone: "highlight" },
      { text: "acima de R$200", tone: "muted" },
    ],
  },
  {
    icon: CreditCard,
    parts: [
      { text: "Parcele", tone: "highlight" },
      { text: "suas compras", tone: "muted" },
    ],
  },
] as const;

export const SubHeader = () => {
  return (
    <>
      <Container>
        {subHeaderItems.map((item, index) => (
          <Item key={index}>
            <img src={item.icon} alt="" />
            <Text>
              {item.parts.map((part, i) => (
                <Word key={i} $tone={part.tone}>
                  {part.text}
                </Word>
              ))}
            </Text>
          </Item>
        ))}
      </Container>
      <Divider />
    </>
  );
};
