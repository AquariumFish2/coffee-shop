import { createContext, useState } from "react";

export const notificationContext = createContext();

export function NotificationProvider(props) {
  const [visibility, setVisibility] = useState(false);
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState(false);
  let timeOut;
  function show(content, alert) {
    setVisibility(true);
    setContent(content);
    timeOut = setTimeout(() => {
      setVisibility(false);
      setContent("");
    }, 10000);
    setAlert(alert);
  }

  function close() {
    setVisibility(false);
    setContent("");
    clearTimeout(timeOut);
  }

  return (
    <notificationContext.Provider
      value={{ visibility, content, alert, show, close }}
    >
      {props.children}
    </notificationContext.Provider>
  );
}
