import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data";
import ActionLink from "./components/ActionLink";
import NewMessage from "./components/NewMessage";
import FolderPanel from "./components/FolderPanel";

function App() {
  const [messages, setMessages] = useState(data);
  const [activeView, setActiveView] = useState("inbox");
  const [activeMessage, setActiveMessage] = useState(null);

  const saveNewMessage = (newMessage) => {
    const sentFolderIndex = messages.findIndex(
      (f) => f.name.toLowerCase() === "sent"
    );
    const sentMessages = messages[sentFolderIndex].messages;
    newMessage.id = sentMessages.length;
    newMessage.created = new Date().toISOString();
    newMessage.from = "you";
    const updatedMessages = [...messages];
    updatedMessages[sentFolderIndex].messages.push(newMessage);
    setMessages(updatedMessages);
    setActiveView("sent");
    setActiveMessage(newMessage.id);
  };

  useEffect(() => {
    document.title = activeView.charAt(0).toUpperCase() + activeView.slice(1);
  })

  const renderPanel = (panel) => {
    switch (panel) {
      case "inbox":
      case "sent":
        return renderFolderPanel();
      case "new message":
        return (
          <section className="ActionPanel">
            <h2 className="capitalize">{activeView}</h2>
            <NewMessage onSubmit={saveNewMessage} />
          </section>
        );
      default:
        break;
    }
  }

  const renderFolderPanel = () => {
    const activeFolder = messages.filter((folder) => {
      return folder.name.toLowerCase() === activeView;
    });

    return (
      <section className="FolderPanel">
        <h2 className="capitalize">{activeView}</h2>
        <FolderPanel messages={activeFolder[0].messages} activeMessage={activeMessage} setActiveMessage={setActiveMessage} />
      </section>
    );
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="col-1of3">
          <div className="FolderList">
            <ul>
              {messages.map((folder) => {
                return (
                  <ActionLink
                    key={folder.id}
                    active={activeView === folder.name.toLowerCase()}
                    onClick={() => {
                      setActiveView(folder.name.toLowerCase());
                    }}
                  >
                    {folder.name}
                  </ActionLink>
                );
              })}
            </ul>
          </div>
          <div className="ActionList">
            <ul>
              <ActionLink
                onClick={() => {
                  setActiveView("new message");
                }}
              >
                New message
              </ActionLink>
            </ul>
          </div>
        </div>
      </div>
      {renderPanel(activeView)}
    </div>
  );
}

export default App;
