import React from "react";

function ActionLink(props) {
  const classNames = ["hasAction"];
  props.active && classNames.push("active");

  return (
    <li className={classNames.join(" ")} onClick={props.onClick}>
      {props.children}
    </li>
  );
}

export default ActionLink;
