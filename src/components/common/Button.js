import "./css/Button.css";

function ButtonSubmit() {
  return <button className="btnSubmit">submit</button>;
}

function ButtonUnderLine(props) {
  //inherited props
  const title = props.title;

  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btnUnderline">
      {title}
    </button>
  );
}

function ButtonIntro(props) {
  //inherited props
  const title = props.title;

  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btn intro">
      {title}
    </button>
  );
}

function ButtonSave(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btnSave">
      Save
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
    <button onClick={props.onClick} className="btn material-icons">
      arrow_back_ios
    </button>
  );
}

function ButtonNextDate(props) {
  const disable = props.disable;

  return (
    <button
      disabled={disable}
      onClick={props.onClick}
      className="btn material-icons"
    >
      arrow_forward_ios
    </button>
  );
}

function ButtonAdd(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <button onClick={onClick} className="btn material-icons">
      add
    </button>
  );
}

function ButtonToggle(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  const value = props.value;

  if (!value) {
    return (
      <button onClick={onClick} className="btn material-icons">
        event
      </button>
    );
  } else {
    return (
      <button onClick={onClick} className="btn material-icons">
        list_alt
      </button>
    );
  }
}

function ButtonDelete(props) {
  const _id = props.idToDelete;

  const onClick = (e) => {
    e.preventDefault();
    props.onClick(_id);
  };

  return (
    <button onClick={onClick} className="btn delete material-icons">
      delete
    </button>
  );
}

export {
  ButtonSubmit,
  ButtonIntro,
  ButtonUnderLine,
  ButtonSave,
  ButtonLogOut,
  ButtonRemoveImage,
  ButtonPrevDate,
  ButtonNextDate,
  ButtonAdd,
  ButtonToggle,
  ButtonDelete,
};
