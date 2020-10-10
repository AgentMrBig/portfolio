import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid paleviioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Container = styled.div`
  text-align: center;
`;

export const Brand = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: white;
  transform: translateX(-100rem);
  animation: slideIn 0.5s forwards;
`;
