import styled from "styled-components";
import X from "../../imeges/x.svg";

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const DivModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const DivCard = styled.div`
  width: 461px;
  height: 700px;
  padding: 40px;
  border-radius: 24px;
  background: #ffffff;

  position: relative;
`;

export const Img = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
`;

export const CloseButton = styled.span`
  background-image: url(${X});
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
`;

export const DivRental = styled.div`
  width: fit-content;
  display: flex;
  background-color: #f9f9f9;
  height: 32px;
  white-space: nowrap;
  padding-top: 7px;
  align-items: center;
  padding-bottom: 7px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 35px;
  font-family: Manrope;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #363535;
`;
export const DivRentalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 168px;
  height: 44px;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  align-items: center;
  display: flex;
  justify-content: center;
  outline: auto;
  cursor: pointer;
  border: none;
  outline: none;
`;
