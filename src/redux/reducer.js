const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARS_REQUEST":
      return {
        ...state,
        data: action.payload,
        loading: true,
        error: null,
      };

    case "FETCH_CARS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };

    case "FETCH_CARS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
