import styled from "styled-components";
import noImg from "../../../imeges/No_image.svg";
import addToFavorite from "../../../imeges/favorite.svg";

export const List = styled.li`
  width: 274px;
  height: 426px;
  // margin: auto;
  // padding: 32px;
  // border-radius: 14px;
  // box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  //   0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  background-image: url(${noImg});
  width: 274px;
  height: 268px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1.03);
  border-radius: 14px;
  display: flex;
`;

export const DivBrand = styled.div`
  margin-top: 8px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const ButtonImg = styled.button`
  margin-top: 28px;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  outline: auto;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const P = styled.p`
  margin-top: 4px;
`;

export const DivWrapper = styled.div`
  height: 60px;
`;

export const FavoriteButton = styled.svg`
  // background-image: url(${addToFavorite});
  z-index: 1000;
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
margin-left: 254px;
  font-size: 20px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
`;
