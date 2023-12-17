import {
  ButtonImg,
  DivBrand,
  DivWrapper,
  FavoriteButton,
  Img,
  List,
  P,
} from "./carGalleryItem.styled";
import { useCarGallery } from "../../../hooks/useCarGallery";

const CarGalleryItem = ({ data, selectedImage }) => {
  const { buttonColors, handleIconClick } = useCarGallery();

  return data.map((car) => (
    <List key={car.id}>
      <FavoriteButton
        onClick={() => handleIconClick(car, car.id)}
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill={buttonColors[car.id] || "none"}
      >
        <path
          stroke={buttonColors[car.id] || "#fff"}
          d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"
        />
      </FavoriteButton>
      <Img
        alt={car.make}
        src={
          car.img
            ? `${car.img}`
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
        }
      />
      <DivBrand>
        <h2>
          {car.make}{" "}
          {car.make.length + car.model.length < 22 && <span>{car.model}</span>},{" "}
          {car.year}
        </h2>
        <h2>{car.rentalPrice}</h2>
      </DivBrand>
      <DivWrapper>
        <P>
          {car.address.split(" ")[3]} | {car.address.split(" ")[4]} |{" "}
          {car.rentalCompany}
        </P>
        <P>
          {car.type} | {car.model} | {car.mileage} | {car.accessories[2]}
        </P>
      </DivWrapper>

      <ButtonImg onClick={() => selectedImage(car)}>Load more</ButtonImg>
    </List>
  ));
};

export default CarGalleryItem;
