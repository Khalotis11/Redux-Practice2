const initialState = {
  cities: "Casablanca, Marrakech, Chaouenn!"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITIES":
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
};
