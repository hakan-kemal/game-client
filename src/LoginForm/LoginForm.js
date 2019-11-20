import React from "react";
import Button from "react-bootstrap/Button";

export default function LoginForm(props) {
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
        placeholder="Enter username"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Enter password"
      />
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
