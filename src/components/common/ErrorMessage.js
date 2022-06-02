import { useState, useEffect } from "react";

import "./css/ErrorMessage.css";

function ErrorMessage(props) {
  //inherited props
  let title = props.title;
  const displayError = props.displayError;
  const setDisplayError = props.setDisplayError;

  //own props
  const [className, setClassName] = useState("error");

  if (title === undefined) {
    title = "Error";
  }

  //close error msg after a sec
  useEffect(() => {
    if (displayError) {
      setTimeout(() => setDisplayError(false), 2000);
    }
  }, [displayError, setDisplayError]);

  useEffect(() => {
    if (displayError) {
      setClassName("error open");
    } else {
      setClassName("error close");
    }
  }, [displayError, setDisplayError]);

  return (
    <div className={className}>
      <span className="material-icons">error </span>
      <div style={{ marginLeft: "10px" }}>{title}</div>
    </div>
  );
}

export default ErrorMessage;
