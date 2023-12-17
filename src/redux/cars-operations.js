import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://6570cb3109586eff6641f47d.mockapi.io/car";

const FETCH_CARS_REQUEST = "FETCH_CARS_REQUEST";
const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
const FETCH_CARS_FAILURE = "FETCH_CARS_FAILURE";

export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = (cars) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

export const fetchCarsFailure = (error) => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const carsApi = () => {
  return async (dispatch) => {
    dispatch(fetchCarsRequest());

    try {
      const { data } = await axios.get();
      dispatch(fetchCarsSuccess(data));
    } catch (error) {
      dispatch(fetchCarsFailure(error.message));
      toast.error("Ooops, samething wrong");
    }
  };
};
