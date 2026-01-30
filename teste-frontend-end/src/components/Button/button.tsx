import type { Props } from "../../types/ButtonType";
import { Button as StyledButton } from "./styles";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
}: Props) => {
  return (
    <StyledButton $variant={variant} $size={size}>
      {children}
    </StyledButton>
  );
};
