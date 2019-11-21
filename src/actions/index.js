import superagent from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";
export const USER = "USER";
export const NEW_USER = "NEW_USER";
export const GET_ROOMS = "GET_ROOMS";
export const ADD_ICON = "ADD_POSTICO";

function jwt(jwt, userName, userId) {
  return {
    type: JWT,
    payload: { jwt: jwt, userName: userName, userId: userId }
  };
}

function user(payload) {
  return {
    type: USER,
    payload
  };
}

export const login = (userName, password) => dispatch => {
  superagent
    .post(`${baseUrl}/login`)
    .send({ userName, password })
    .then(response => {
      const action1 = jwt(response.body.jwt, userName, response.body.userId);

      const action2 = user(response.body.jwt, userName, response.body.userId);

      dispatch(action1, action2);
    })
    .catch(console.error);
};

export function newUser(payload) {
  return {
    type: NEW_USER,
    payload
  };
}

export const signup = (userName, password) => dispatch => {
  superagent
    .post(`${baseUrl}/signup`)
    .send({ userName, password })
    .then(response => {
      const action = newUser(response.body);

      dispatch(action);
    });
};

// export function setRoom(name) {
//   superagent
//     .post(`${baseUrl}/room`)
//     .send({ name: name })

//     .catch(console.error);
// }

// export const dispatchRoomActions = action => dispatch => {
//   dispatch(action);
// };

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
