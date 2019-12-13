const initialState = { name: "Murthy" };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME": {
      const { name } = action.payload;
      return { ...state, name };
    }
  }
  return state;
};