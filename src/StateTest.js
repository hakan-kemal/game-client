import React from "react";

export default function Test(props) {
  console.log("ADDICON?", props.addIcon);
  const addIcon = props.addIcon;

  return <button onClick={() => addIcon("postico")}>Add to state TEST</button>;
}
