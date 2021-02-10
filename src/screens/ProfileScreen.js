import React from "react";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Plans from "../components/Plans";
import { selectPlan } from "../features/planSlice";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const plan = useSelector(selectPlan);

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
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans ({plan?.name})</h3>
              <Plans />
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
