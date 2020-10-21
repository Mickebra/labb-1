import React, { useEffect, useRef, useState } from "react";

function NewMessage(props) {
  const [receiver, setReceiver] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const toInput = useRef("");

  useEffect(() => {
    toInput.current.focus();
  }, []);

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMessageBody(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ to: receiver, body: messageBody });
    resetForm();
  };

  const resetForm = () => {
    setReceiver("");
    setMessageBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>To:</label>
        <input type="text" ref={toInput} onChange={handleReceiverChange} value={receiver} />
      </div>
      <div>
        <label>Message</label>
        <textarea
          rows="4"
          onChange={handleMsgChange}
          value={messageBody}
        />
      </div>
      <div>
        {receiver ? (
          <button type="submit" className="hasAction">
            Send to {receiver}
          </button>
        ) : (
          "Fill in a receiver to be able to send a message"
        )}
      </div>
    </form>
  );
}

export default NewMessage;
