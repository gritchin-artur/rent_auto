import {
  Button,
  CloseButton,
  Div,
  DivCard,
  DivModal,
  DivRental,
  DivRentalWrapper,
  Img,
} from "./Modal.styled";
import { useEffect } from "react";

export default function Modal({ car, onClose }) {
  const preventScroll = (e) => {
    e.preventDefault();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (press) => {
      if (press.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [onClose]);

  const handleCallClick = () => {
    window.location.href = `tel:+380730000000`;
  };
  return (
    <Div onClick={handleBackdropClick}>
      <DivModal>
        <DivCard>
          <CloseButton onClick={handleBackdropClick}></CloseButton>

          <Img
            src={
              car.img
                ? `${car.img}`
                : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
            }
            alt={car.make}
          />
          <div>
            <h2>
              {car.make} <span>{car.model}</span>, {car.year}
            </h2>
            <p>
              {car.address.split(" ")[4]} | {car.address.split(" ")[3]} | Id:
              {car.id} | Year:
              {car.year} | Type:
              {car.type}
            </p>
            <p>
              Fuel Consumption:{car.fuelConsumption} | Engine Size:
              {car.engineSize}
            </p>
            <h3>{car.description}</h3>
            <h3>Accessories and functionalities:</h3>
            <p>
              {car.functionalities[0]} | {car.functionalities[1]} |{" "}
              {car.functionalities[2]}
            </p>
            <p>
              {car.accessories[0]} | {car.accessories[1]} | {car.accessories[2]}
            </p>
            <h3>Rental Conditions:</h3>
            <DivRentalWrapper>
              <DivRental>
                Minimum age :
                <span>{car.rentalConditions.replace(/\D/g, "")}</span>
              </DivRental>
              <DivRental>
                {car.rentalConditions.match(/Valid driver's license(.*)/)}
              </DivRental>
              <DivRental>Security deposit and insurance required</DivRental>
              <DivRental>
                Mileage: <span>{car.mileage / 1000}</span>
              </DivRental>
              <DivRental>
                Price: <span>{car.rentalPrice.replace(/\D/g, "")}$</span>
              </DivRental>
            </DivRentalWrapper>
          </div>
          <Button onClick={handleCallClick}>Rental car</Button>
        </DivCard>
      </DivModal>
    </Div>
  );
}
