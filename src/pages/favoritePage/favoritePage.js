import { useCarGallery } from "../../hooks/useCarGallery";
import { useFilterHooks } from "../../hooks/useFilterHooks";
import Modal from "../Modal/Modal";
import CarGallery from "../carGallery/carGallery";
import { ButtonLoadMore, DivWrapper } from "../findCarPage/findCarPage.styled";

const FavoritePage = () => {
  const { favorites, isFetching } = useCarGallery();
  const {
    showModal,
    car,
    totalCars,
    lenghtCars,
    onClose,
    handleSelectedCar,
    loadMore,
  } = useFilterHooks();
  return (
    <DivWrapper>
      {isFetching && <h2>Loading ...</h2>}
      {favorites && (
        <CarGallery data={favorites} selectedImage={handleSelectedCar} />
      )}
      {showModal && <Modal car={car} onClose={onClose} />}
      {favorites.length !== totalCars && favorites.length > lenghtCars - 1 && (
        <ButtonLoadMore onClick={loadMore}>Load more</ButtonLoadMore>
      )}
    </DivWrapper>
  );
};

export default FavoritePage;
