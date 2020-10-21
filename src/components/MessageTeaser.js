import React from "react";

function MessageTeaser(props) {
  const classNames = ["hasAction", "MessageTeaser"];
  props.active && classNames.push("active");
  const date = new Date(props.date);

  return (
    <li className={classNames.join(" ")} onClick={props.onClick}>
      {date.toLocaleString()}
      <br />
      {props.from}
    </li>
  );
}

export default MessageTeaser;
