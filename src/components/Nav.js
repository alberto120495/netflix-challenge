import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectPlan } from "../features/planSlice";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const plan = useSelector(selectPlan);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {!plan ? (
          <>
            <img
              onClick={() => history.push("/profile")}
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
              alt="Netlix Logo"
            />
            <img
              onClick={() => history.push("/profile")}
              className="nav__avatar"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt="Netlix Perfil"
            />
          </>
        ) : (
          <>
            <img
              onClick={() => history.push("/")}
              className="nav__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
              alt="Netlix Logo"
            />
            <img
              onClick={() => history.push("/profile")}
              className="nav__avatar"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
              alt="Netlix Perfil"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
