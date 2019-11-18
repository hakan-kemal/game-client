import React from "react";

export default function CreateForm(props) {
  const { onSubmit, onChange, values } = props;
  const { title, url } = values;

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        placeholder="Username"
      />
      <input
        type="text"
        name="url"
        value={url}
        onChange={onChange}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
