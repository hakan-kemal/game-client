import React from "react";
import Button from "react-bootstrap/Button";

export default function LoginForm(props) {
  const { onSubmit, onChange, values } = props;
  const { userName, password } = values;

  return (
    <form onSubmit={onSubmit}>
      {/*<label>Username:</label>*/}
      <input
        type="userName"
        className="form-control"
        name="userName"
        value={userName}
        onChange={onChange}
        placeholder="Enter username"
      />
      <br></br>
      <br></br>
      {/*<label>Password:</label>*/}
      <input
        type="password"
        className="form-control"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Enter password"
      />
      <br></br>
      <br></br>
      <Button
        variant="outline-primary"
        type="submit"
        name="action"
        value="login"
      >
        Login
      </Button>
    </form>
  );
}
