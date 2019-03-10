import axios from "axios";

// export const fetchCards = () => {
//   return async dispatch => {
//     const response = await axios.get("/api/cards");

//     dispatch({
//       type: "FETCH_CARDS",
//       payload: response.data
//     });
//   };
// };

// export function fetchCards() {
//   const response = axios.get("/api/cards")

//   return {
//     type: "FETCH_CARDS",
//     payload: response
//   }
// }

// export function fetchCards() {
//   return dispatch => {
//     const response = axios.get("/api/cards")
//                     .then((response) => {dispatch({type: "FETCH_CARDS", payload: response.data})})
//         .catch((response) => {return Promise.reject(response);});
//     };

//     // dispatch({
//     //   type: "FETCH_CARDS",
//     //   payload: response.data
//     // })

// }

export function fetchCards() {
  return dispatch => {
    axios.get("api/cards").then(response => {
      dispatch({
        type: "FETCH_CARDS",
        payload: response.data
      });
    });
  };
}

// export const fetchCards = () => {
//   async dispatch {
//     const response = await axios.get("/api/cards")
//     dispatch({
//       type: "FETCH_CARDS",
//       payload: response.data
//     })
//   }
// }

export function fetchCard(id) {
  return dispatch => {
    axios.get(`/api/cards/${id}`).then(response => {
      dispatch({
        type: "FETCH_CARD",
        payload: response.data
      });
    });
  };
}

// export const fetchCard = (id) => {
//   const response = axios.get(`/api/cards/${id}`).then(response => console.log(response.data))

//   return {
//     type: "FETCH_CARD",
//     payload: response
//   }
// }
