import { Ul } from "./carGallery.styled";
import CarGalleryItem from "./carGalleryItem/carGalleryItem";

const CarGallery = ({ data, ...selectedImage }) => {
  return (
    <div>
      <Ul>
        <CarGalleryItem data={data} {...selectedImage} />
      </Ul>
    </div>
  );
};

export default CarGallery;
