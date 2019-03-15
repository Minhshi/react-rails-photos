import axios from "axios";
// import { history } from "../components/App"

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

// export function fetchCards() {
//   const url = "api/cards";
//   const promise = fetch(url).then(response => response.json());
//   return {
//     type: "FETCH_CARDS",
//     payload: promise
//   };
// }

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

export function createCard(formValues) {
  return dispatch => {
    axios
      .post("/api/cards", formValues)
      .then(response => {
        dispatch({
          type: "CREATE_CARD",
          payload: response.data
        });
      })
      // .then(callback);
      .then(() => this.history.push("/"));
  };
}

export function editCard(card, formValues) {
  return dispatch => {
    axios
      .patch(`/api/cards/${card.id}`, {
        card: {
          title: card.title,
          photo: card.photo
        },
        formValues
      })
      .then(response => {
        dispatch({
          type: "EDIT_CARD",
          payload: response.data
        });
      })
      // .then(callback)
      .then(() => this.history.push(`/cards/${card.id}`));
  };
}

export function deleteCard(id) {
  return dispatch => {
    axios
      .delete(`/api/cards/${id}`)
      .then(response => {
        dispatch({
          type: "DELETE_CARD",
          payload: id
        });
        // history.push("/")
        // this.history.push("/")
      })
      .then(() => this.history.push("/"));
  };
}
