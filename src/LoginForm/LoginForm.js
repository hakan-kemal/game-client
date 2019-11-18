import React from "react";

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
        placeholder="userName"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <button type="submit" name="action" value="login">
        Login
      </button>
      {/* <button
        onSubmitSignUp={onSubmitSignUp}
        type="submit"
        name="action"
        value="delete"
      >
        SignUp
      </button> */}
    </form>
  );
}
