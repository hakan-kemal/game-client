import superagent from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";

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
