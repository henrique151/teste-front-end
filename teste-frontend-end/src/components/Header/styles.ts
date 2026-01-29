import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 12px 185px;
  gap: 40px;
  
`;

export const Logo = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colores.cinzapequisa};
  border-radius: 10px;
  padding: 8px 12px;
  gap: 8px;
  width: 100%;
  height: 48px;
  max-width: 630px;
  margin: 0 auto;

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 14px;
    font-weight: 500; 
    font-family: 'Poppins', sans-serif;
  }

  input::placeholder {
    font-weight: 500; 
    font-size: 14px;
    color: ${({ theme }) => theme.colores.cinzaclaro};
  }

  img {
    width: 28px;
    height: 28px;
    cursor: pointer;
    margin: 2px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 32px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colores.cinzabranco};
  width: 80%;
  margin: 0 auto;
`;

