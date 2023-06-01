
import "./Inbox.css";
const Inbox = () => {
  const onMail = (e, personName) => {
    var i;
    var x = document.getElementsByClassName("person");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace("activegrey", "");
    }
    document.getElementById(personName).style.display = "block";
    e.currentTarget.className += "activegrey";
  };
  return (
    <>
      
      <a
        href="#!"
        className="demo1 test activegrey "
        onClick={(e) => onMail(e, "raju")}
      >
        <div className="container1">
          <div className="divflex">
            <img
              className="imgs1"
              src="https://www.w3schools.com/w3images/avatar3.png"
              alt="raju borge pic"
            />
            <span className="sentName">Raju borge</span>
          </div>
          <h6>Subject: Remember Me</h6>
          <p>Hello, i just wanted to let you know that i'll be home at...</p>
        </div>
      </a>

      <a href="#!" className="demo1 test " onClick={(e) => onMail(e, "subbu")}>
        <div className="container1">
          <div className="divflex">
            <img
              className="imgs1"
              src="https://www.w3schools.com/w3images/avatar5.png"
              alt="subbuLakshmi pic"
            />
            <span className="sentName">SubbuLakshmi R</span>
          </div>
          {/* <h6>Subject: Remember Me</h6> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </a>
      <a href="#!" className="demo1 test " onClick={(e) => onMail(e, "cna")}>
        <div className="container1">
          <div className="divflex">
            <img
              className="imgs1"
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Srinivas pic"
            />
            <span className="sentName">Srinivas cna</span>
          </div>
          {/* <h6>Subject: Remember Me</h6> */}
          <p>Welcome!</p>
        </div>
      </a>
    </> //
  );
};

export default Inbox;
