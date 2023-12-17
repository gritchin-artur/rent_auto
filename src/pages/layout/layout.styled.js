import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const DivHeader = styled.div`
  // margin-left: 100px;
  // margin-right: 100px;
`;

export const Li = styled.li`
  color: #ddd;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const Ul = styled.ul`
  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
  justify-content: center;
  list-style: none;
  display: flex;
  gap: 100px;
`;

export const Navigation = styled(NavLink)`
  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }
  color: #4444448f;
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;

  &:focus-visible {
    color: #cfcfcf;
  }
  &:hover {
    color: #cfcfcf;
  }
  &:active {
    color: grey;
  }
  &:disabled {
    background-color: #eee;
    color: #444;
    pointer-events: none;
  }
`;
