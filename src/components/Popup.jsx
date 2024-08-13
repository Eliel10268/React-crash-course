function Popup({ title, closePopup }) {
  return (
    <>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            onClick={() => console.log("Confirm button clicked")}
            className="popup__btn"
          >
            Confirm
          </button>
          <button
            onClick={() => closePopup()}
            className="popup__btn popup__btn--cancel"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={() => closePopup()}></div>
    </>
  );
}

export default Popup;
