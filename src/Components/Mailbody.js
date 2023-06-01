import "./Mailbody.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

const Mailbody = () => {
  return (
    <>
      <div id="raju" className="container person">
        <img
          src="https://www.w3schools.com/w3images/avatar3.png"
          alt="person1"
        />

        <h5 className="opacity" style={{ fontSize: 18 }}>
          Subject: Remember Me
        </h5>

        <h4 style={{ fontSize: 20 }}>
          <FontAwesomeIcon
            icon={faClock}
            style={{ fontSize: 17, marginRight: 6 }}
          />
          From Raju borge, Jan 24, 2023.
        </h4>

        <a href="#" className="reply-button">
          Reply <FontAwesomeIcon icon={faReply} className="faPadding" />
        </a>

        <a href="#" className="reply-button">
          Forward <FontAwesomeIcon icon={faArrowRight} className="faPadding" />
        </a>
        <hr />
        <p>
          Hello, i just wanted to let you know that i'll be home at lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
        <p>
         hi
        </p>
        <p>
          Best Regards, <br />
          Raju Borge
        </p>
      </div>
      <div id="subbu" className="container person" style={{ display: "none" }}>
        <img
          src="https://www.w3schools.com/w3images/avatar5.png"
          alt="person2"
        />

        <h5 className="opacity" style={{ fontSize: 18 }}>
          Subject:none
        </h5>

        <h4 style={{ fontSize: 20 }}>
          <FontAwesomeIcon
            icon={faClock}
            style={{ fontSize: 17, marginRight: 6 }}
          />
          From SubbuLakshmi, Jan 27, 2023.
        </h4>

        <a href="reply" className="reply-button">
          Reply <FontAwesomeIcon icon={faReply} className="faPadding" />
        </a>

        <a href="Forward" className="reply-button">
          Forward <FontAwesomeIcon icon={faArrowRight} className="faPadding" />
        </a>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Forever yours, <br />
          Subbu
        </p>
      </div>
      <div id="cna" className="container person" style={{ display: "none" }}>
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="person3"
        />

        <h5 className="opacity" style={{ fontSize: 18 }}>
          Subject: none
        </h5>

        <h4 style={{ fontSize: 20 }}>
          <FontAwesomeIcon
            icon={faClock}
            style={{ fontSize: 17, marginRight: 6 }}
          />
          From Srinivas cna, Jan 24, 2023.
        </h4>

        <a href="reply" className="reply-button">
          Reply <FontAwesomeIcon icon={faReply} className="faPadding" />
        </a>

        <a href="Forward" className="reply-button">
          Forward <FontAwesomeIcon icon={faArrowRight} className="faPadding" />
        </a>
        <hr />
        <p>
          Welcome <br />
          That's it!
        </p>
      </div>
    </>
  );
};

export default Mailbody;
