import "./App.css";
import Modal from "./Components/Modal";
import Inbox from "./Components/Inbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faClose,
  faHourglassEnd,
  faInbox,
  faPaperPlane,
  faPencil,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import Mailbody from "./Components/Mailbody";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [demoShow, setDemoShow] = useState(true);
  const showModal = (e) => {
    setShow(!show);
  };

  const onClickopen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const onClickclose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };
  const onDemoShow = () => {
    setDemoShow(!demoShow);
  };
  const inboxRed = [demoShow ? "btn-box colorRed" : "btn-box"];
  const inboxDiv = [demoShow ? "divShow" : "divHide"];
  return (
    <div className="margin-top">
      <div id="mySidebar" className="sidebar">
        <a href="#" className="btn-box outlook">
          <img
            src="https://www.w3schools.com/images/w3schools.png"
            alt="w3schools"
            className="img1"
          />
        </a>
        <a href="#" className="btn-box close">
          Close
          <FontAwesomeIcon
            icon={faClose}
            className="pencil"
            onClick={onClickclose}
          />
        </a>
        <a href="#" className="btn-box dark-grey" onClick={showModal}>
          New Message
          <FontAwesomeIcon icon={faPencil} className="pencil" />
        </a>

        <a
          href="#"
          className={inboxRed}
          style={{ color: "black" }}
          onClick={onDemoShow}
        >
          <FontAwesomeIcon
            icon={faInbox}
            size="sm"
            style={{ marginRight: 16 }}
          />
          Inbox (3)
          <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: 16 }} />
        </a>
        <div className={inboxDiv}>
          <Inbox />
        </div>

        <a href="#" className="btn-box" style={{ color: "black" }}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="sm"
            style={{ marginRight: 16 }}
          />
          Sent
        </a>
        <a href="#" className="btn-box" style={{ color: "black" }}>
          <FontAwesomeIcon
            icon={faHourglassEnd}
            size="sm"
            style={{ marginRight: 16 }}
          />
          Drafts
        </a>
        <a href="#" className="btn-box" style={{ color: "black" }}>
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="sm"
            style={{ marginRight: 16 }}
          />
          Trash
        </a>
      </div>

      <Modal show={show} onClose={showModal}></Modal>

      <div className="body-text">
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="baricon "
            id="myOverlay"
            onClick={onClickopen}
          />
          <FontAwesomeIcon
            icon={faPencil}
            className="newmail"
            onClick={showModal}
          />
        </div>

        <Mailbody />
      </div>
    </div>
  );
}

export default App;
