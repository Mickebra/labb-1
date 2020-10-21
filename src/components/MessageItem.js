import React from "react";

function MessageItem({message}) {
  message.date = new Date(message.created);

  return (
    <article>
      <header>{message.date.toLocaleString()} From: {message.from} To: {message.to}</header>
      <p>{message.body}</p>
    </article>
  );
}

export default MessageItem;
