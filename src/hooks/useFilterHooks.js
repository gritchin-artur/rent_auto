import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFilterHooks = () => {
  const { data, loading } = useSelector((state) => state.cars);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState();
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [lenghtCars, setLenghtCars] = useState(12);
  const [totalCars, setTotalCars] = useState(0);

  useEffect(() => {
    async function componentDidUpdate() {
      if (data) {
        setTotalCars(data.length);
        const filtered = data.filter((car) => {
          const nameCondition =
            !brand || car.make.toLowerCase().includes(brand.toLowerCase());
          const priceCondition =
            !price || car.rentalPrice === `$${parseInt(price, 10)}`;
          const mileageCondition =
            !minMileage ||
            !maxMileage ||
            (car.mileage >= parseInt(minMileage, 10) &&
              car.mileage <= parseInt(maxMileage, 10));
          return nameCondition && priceCondition && mileageCondition;
        });
        const newData = filtered.slice(0, lenghtCars);
        setCars(newData);
      }
    }
    componentDidUpdate();
  }, [brand, price, maxMileage, minMileage, lenghtCars, data]);

  const onSearch = (brand, price, minMileage, maxMileage) => {
    setBrand(brand);
    setPrice(price);
    setMinMileage(minMileage);
    setMaxMileage(maxMileage);
  };

  const handleSelectedCar = (car) => {
    setCar(car);
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const loadMore = () => {
    setLenghtCars((prevState) => prevState + 12);
  };

  return {
    showModal,
    cars,
    car,
    totalCars,
    loading,
    lenghtCars,
    data,
    onSearch,
    handleSelectedCar,
    onClose,
    loadMore,
  };
};
