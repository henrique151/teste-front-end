import styled from "styled-components";

export const Container = styled.nav`
  padding: 12px 255px;
  background: ${({ theme }) => theme.colores.branco};
  box-shadow: 0px 8px 16px 0px rgba(57, 48, 19, 0.12);
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li`
  list-style: none;
  font-family: "Poppins", sans-serif; 
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase; 
  color: ${({ theme }) => theme.colores.cinzaclaro};
  cursor: pointer;
  display: flex;            
  align-items: center;
  gap: 6px;
`;

export const Highlight = styled(Item)`
  color: ${({ theme }) => theme.colores.roxo};
  font-weight: 600;
`;


