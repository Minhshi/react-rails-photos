// export const cardsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_CARDS":
//       return action.payload;
//     case "FETCH_CARD":
//       return { [action.payload.id]: action.payload };
//     // find function
//     //return [action.payload]
//     default:
//       return state;
//   }
// };

import _ from "lodash";

export const cardsReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_CARD":
      return { ...state, [action.payload.id]: action.payload };
    case "CREATE_CARD":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_CARD":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_CARD":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
