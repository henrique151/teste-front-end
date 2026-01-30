import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 600px;
  padding: 24px;
  position: relative;
`;

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const Info = styled.div`
  margin-top: 16px;
  font-family: "Poppins";
`;
