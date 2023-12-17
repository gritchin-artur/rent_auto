import CarGallery from "../carGallery/carGallery";
import SerchForm from "../serchForm/serchForm";
import Modal from "../Modal/Modal";
import { ButtonLoadMore, DivWrapper } from "./findCarPage.styled";
import { useFilterHooks } from "../../hooks/useFilterHooks";

const FindCarPage = () => {
  const {
    showModal,
    cars,
    car,
    totalCars,
    loading,
    lenghtCars,
    onSearch,
    handleSelectedCar,
    onClose,
    loadMore,
  } = useFilterHooks();

  return (
    <DivWrapper>
      <SerchForm onSearch={onSearch} />
      {loading && <h2>Loading ...</h2>}
      {cars && <CarGallery data={cars} selectedImage={handleSelectedCar} />}
      {showModal && <Modal car={car} onClose={onClose} />}
      {cars.length !== totalCars && cars.length > lenghtCars - 1 && (
        <ButtonLoadMore onClick={loadMore}>Load more</ButtonLoadMore>
      )}
    </DivWrapper>
  );
};

export default FindCarPage;
