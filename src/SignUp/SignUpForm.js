import React from "react";
import Button from "react-bootstrap/Button";

export default function SignUpForm(props) {
  const { onSubmit, onChange, values } = props;
  const { userName, password } = values;

  return (
    <form onSubmit={onSubmit}>
      <label>Username:</label>
      <input
        type="userName"
        name="userName"
        value={userName}
        onChange={onChange}
        placeholder="Create username"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Create password"
      />
      <Button variant="outline-success" type="submit">
        SignUp
      </Button>
    </form>
  );
}
