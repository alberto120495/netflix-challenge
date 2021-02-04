import React from "react";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
            alt="Netlix Logo"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <p>Renewal date:04/03/2021</p>
              <div className="profileScreen__plan">
                <div className="profileScreen__planOption">
                  <div className="plan">
                    <h3>Netflix Standard</h3>
                    <p>1080p</p>
                  </div>
                  <button className="profile__planButton" onClick={() => {}}>
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__planOption">
                  <div className="plan">
                    <h3>Netflix Basic</h3>
                    <p>1080p</p>
                  </div>
                  <button className="profile__planButton" onClick={() => {}}>
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__planOption">
                  <div className="plan">
                    <h3>Netflix Premium</h3>
                    <p>4k+HDR</p>
                  </div>
                  <button
                    className="profile__planButton--active"
                    onClick={() => {}}
                  >
                    Current Package
                  </button>
                </div>
              </div>

              <button
                className="profileScreen__sigOut"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
