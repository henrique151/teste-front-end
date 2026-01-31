import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colores.roxoescuro};
  height: 162px;
  padding: 48px;
`;

export const Content = styled.div`
  max-width: 1370px;
  margin: 0 auto;
  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`;

export const Left = styled.div`
  max-width: 720px;
`;

export const Title = styled.h2`
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.colores.branco};
  margin-bottom: 8px;
  line-height: 120%;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.colores.branco};
  opacity: 0.9;
  line-height: 18px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Form = styled.div`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  width: 220px;
  height: 40px;
  border-radius: 6px;
  border: none;
  padding: 0 12px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;

  &::placeholder {
    color: #9b9b9b;
  }
`;

export const Button = styled.button`
  width: 140px;
  height: 40px;
  background:  ${({ theme }) => theme.colores.amarelo};
  color: #161615;

  border: none;
  border-radius: 6px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;

export const Terms = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #ffffff;

  input {
    cursor: pointer;
  }
`;
