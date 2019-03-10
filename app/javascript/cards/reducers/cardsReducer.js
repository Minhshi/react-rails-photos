export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return action.payload;
    case "FETCH_CARD":
      return { [action.payload.id]: action.payload };
    // find function
    //return [action.payload]
    default:
      return state;
  }
};
