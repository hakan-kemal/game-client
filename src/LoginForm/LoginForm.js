import React from "react";

export default function LoginForm(props) {
  const { onSubmit, onChange, values } = props;
  const { email, password } = values;

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
