import styled from "styled-components";

export const DivHeader = styled.form`
  display: flex;
  gap: 8px;
`;

export const ButtonLoadMore = styled.button`
  color: #3470ff;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #0b44cd;
  }
  &:active {
    background-color: transparent;
    color: #0b44cd;
  }
  &:disabled {
    background-color: transparent;
    color: #0b44cd;
    pointer-events: none;
  }
`;

export const DivWrapper = styled.div`
  justify-content: center;
  display: grid;
`;
