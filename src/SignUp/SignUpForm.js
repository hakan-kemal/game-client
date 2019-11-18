import React from "react";

export default function SignUpForm(props) {
  const { onSubmit, onChange, values } = props;
  const { userName, password } = values;

  return (
    <form onSubmit={onSubmit}>
      <label>Create username:</label>
      <input
        type="userName"
        name="userName"
        value={userName}
        onChange={onChange}
        placeholder="userName"
      />
      <label>Create password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <button type="submit">SignUp</button>
    </form>
  );
}
