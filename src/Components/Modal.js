import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faRemove } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className=" bgModel">
        <div className="modal">
          <div className="modalhead">
            <span className="faremove">
              <FontAwesomeIcon
                icon={faRemove}
                onClick={(e) => {
                  props.onClose(e);
                }}
              />
            </span>
            <h2>Send Mail</h2>
          </div>
          <div className="panel">
            <label>To</label>
            <input type="text" className="inputfield"></input>

            <label>From</label>
            <input type="text" className="inputfield"></input>

            <label>Subject</label>
            <input type="text" className="inputfield"></input>

            <input
              type="text"
              className="inputfield"
              style={{ height: 150 }}
              placeholder="What's on your mind?"
            ></input>
            <div className="buttonsection">
              <a
                onClick={(e) => {
                  props.onClose(e);
                }}
                className="cancelbtn bgRed"
              >
                Cancel <FontAwesomeIcon icon={faRemove} />
              </a>
              <a
                onClick={(e) => {
                  props.onClose(e);
                }}
                className="cancelbtn"
                style={{ float: "right" }}
              >
                Send <FontAwesomeIcon icon={faPaperPlane} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
