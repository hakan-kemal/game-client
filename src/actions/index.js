import superagent from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";
export const NEW_USER = "NEW_USER";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (userName, password) => dispatch => {
  superagent
    .post(`${baseUrl}/login`)
    .send({ userName, password })
    .then(response => {
      const action = jwt(response.body.jwt);

      dispatch(action);
    });
};

function newUser(payload) {
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
