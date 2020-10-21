import React from "react";
import MessageItem from "./MessageItem";
import MessageTeaser from "./MessageTeaser";

function FolderPanel(props) {
  const handleActiveMessage = (messageId) => {
    props.setActiveMessage(messageId);
  }

  return (
    <div className="grid">
      <div className="col-1of3">
        <div className="MessageList">
          <ul>
            {props.messages
              .sort((a, b) => b.created.localeCompare(a.created))
              .map((message) => {
                return (
                  <MessageTeaser
                    key={message.id}
                    date={message.created}
                    from={message.from}
                    active={props.activeMessage === message.id}
                    onClick={() => {
                      handleActiveMessage(message.id);
                    }}
                  />
                );
              })}
          </ul>
        </div>
      </div>
      <div className="col-2of3">
        <div className="MessageReader">
          {props.activeMessage !== null ? (
            props.messages.map((message) => {
              return (
                message.id === props.activeMessage && (
                  <MessageItem
                    key={message.created + message.key}
                    message={message}
                  />
                )
              );
            })
          ) : (
            <p>No message selected</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FolderPanel;
