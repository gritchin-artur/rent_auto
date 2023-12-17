import { useState } from "react";
import {
  Button,
  Div,
  Form,
  InputLeft,
  InputRight,
  SelectBrand,
  SelectPrice,
} from "./serchForm.style";

const SerchForm = ({ onSearch }) => {
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const cars = [
    "Buick",
    "Volkswagen",
    "Volvo",
    "HUMMER",
    "Subaru",
    "Skoda",
    "Mitsubishi",
    "Nissan",
    "Lincoln",
    "GMC",
    "Hyundai",
    "MINI",
    "Bentley",
    "Mercedes-Benz",
    "Aston Martin",
    "Pontiac",
    "Lamborghini",
    "Audi",
    "BMW",
    "Chevrolet",
    "Mercedes-Benz",
    "Chrysler",
    "Kia",
    "Land",
  ];

  const priceList = [
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "110",
    "120",
    "130",
    "140",
    "160",
    "170",
    "180",
    "190",
    "200",
    "210",
    "220",
    "230",
    "240",
    "250",
    "260",
    "270",
    "280",
    "290",
    "300",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(brand, price, minMileage * 1000, maxMileage * 1000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SelectBrand
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      >
        <option value="">Enter the text</option>
        {cars.map((car, index) => (
          <option key={index} value={car}>
            {car}
          </option>
        ))}
      </SelectBrand>

      <SelectPrice
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      >
        <option value="">Price $</option>
        {priceList.map((price, index) => (
          <option key={index} value={price}>
            {price}
          </option>
        ))}
      </SelectPrice>
      <Div>
        <InputLeft
          type="from"
          id="minPrice"
          placeholder="From"
          value={minMileage}
          onChange={(e) => setMinMileage(e.target.value)}
        />

        <InputRight
          type="to"
          id="maxPrice"
          placeholder="To"
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
        />
      </Div>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SerchForm;
