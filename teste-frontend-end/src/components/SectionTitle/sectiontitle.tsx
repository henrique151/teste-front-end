import type { Props } from "../../types/SectionType";
import { Wrapper, TitleRow, Line, Title, SubTitle } from "./styles";

export const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <Wrapper>
      <TitleRow>
        <Line />
        <Title>{title}</Title>
        <Line />
      </TitleRow>

      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Wrapper>
  );
};
