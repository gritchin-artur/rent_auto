import { useEffect, useState } from "react";
import { useFilterHooks } from "./useFilterHooks";

export const useCarGallery = () => {
  const { cars } = useFilterHooks();
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("cars")) ?? []
  );
  const [buttonColors, setButtonColors] = useState(
    JSON.parse(localStorage.getItem("color")) ?? Array(cars.length)
  );

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(favorites));
    localStorage.setItem("color", JSON.stringify(buttonColors));
  }, [favorites, buttonColors]);

  const handleIconClick = (car, index) => {
    setButtonColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = newColors[index] === "#3470FF" ? "" : "#3470FF";

      setFavorites((prevFavorites) => {
        if (newColors[index] === "#3470FF") {
          return [...prevFavorites, car];
        } else {
          return prevFavorites.filter((item) => item.id !== car.id);
        }
      });

      return newColors;
    });
  };

  return {
    buttonColors,
    handleIconClick,
    favorites,
  };
};
