import superagent from "superagent";

const baseUrl = "https://blooming-fortress-93634.herokuapp.com";

export const JWT = "JWT";
export const NEW_USER = "NEW_USER";
export const GET_ROOMS = "GET_ROOMS";
export const ADD_ICON = "ADD_POSTICO";

function jwt(jwt, userName, userId) {
  return {
    type: JWT,
    payload: { jwt: jwt, userName: userName, userId: userId }
  };
}

export const login = (userName, password) => dispatch => {
  superagent
    .post(`${baseUrl}/login`)
    .send({ userName, password })
    .then(response => {
      const action = jwt(response.body.jwt, userName, response.body.userId);

      dispatch(action);
    })
    .catch(console.error);
};

export function newUser(user) {
  return {
    type: NEW_USER,
    payload: user
  };
}

export const signup = (userName, password) => dispatch => {
  superagent
    .post(`${baseUrl}/signup`)
    // .post(`${baseUrl}/user`)
    .send({ userName, password })
    .then(response => {
      const action = newUser(response.body);

      dispatch(action);
    });
};

export function setRoom(name) {
  superagent
    .post(`${baseUrl}/room`)
    .send({ name: name })

    .catch(console.error);
}

export const dispatchRoomActions = action => dispatch => {
  dispatch(action);
};

// function getRooms(payload) {
//   return {
//     type: GET_ROOMS,
//     payload
//   };
// }

// export const allRooms = () => dispatch => {
//   superagent.get(`${baseUrl}/room`).then(response => {
//     const action = getRooms(response.body);

//     dispatch(action);
//   });
// };
