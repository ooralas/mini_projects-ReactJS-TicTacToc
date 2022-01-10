function Box(props) {
  const boxClickHandler = () => {
    if (props.disabled) return;
    props.boxSelected(props.box.id);
  };

  return (
    <div
      className={`box ${props.disabled ? "" : "active"} ${
        props.box.boxWon ? "boxWon" : ""
      }`}
      onClick={boxClickHandler}
    >
      <span className={`boxState ${props.box.boxWon ? "flash" : ""}`}>
        {props.box.boxTouched && props.box.currentState}
      </span>
    </div>
  );
}

export default Box;
