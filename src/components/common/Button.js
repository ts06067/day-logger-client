import "./css/Button.css";

function ButtonSubmit() {
  return <button className="btnSubmit">submit</button>;
}

function ButtonSave(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btnSave">
      save
    </button>
  );
}

function ButtonLogOut() {
  return <button className="btnLogout">logout</button>;
}

function ButtonRemoveImage(props) {
  const onClick = props.onClick;
  return (
    <button className="btnRemoveImage" onClick={onClick}>
      Remove Image
    </button>
  );
}

function ButtonPrevDate(props) {
  return (
    <button onClick={props.onClick} className="btnPrevDate">
      prev
    </button>
  );
}

function ButtonNextDate(props) {
  const disable = props.disable;

  return (
    <button disabled={disable} onClick={props.onClick} className="btnNextDate">
      next
    </button>
  );
}

function ButtonAddQuestion(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btnAddQuestion">
      add
    </button>
  );
}

function ButtonDeleteQuestion(props) {
  const _id = props.idToDelete;

  const onClick = (e) => {
    e.preventDefault();
    props.onClick(_id);
  };

  return (
    <button onClick={onClick} className="btnDeleteQuestion">
      delete
    </button>
  );
}

export {
  ButtonSubmit,
  ButtonSave,
  ButtonLogOut,
  ButtonRemoveImage,
  ButtonPrevDate,
  ButtonNextDate,
  ButtonAddQuestion,
  ButtonDeleteQuestion,
};
