import React from "react";
import "./membership.css";
import membership from "../../images/membership.jpg";

const Membership = () => {
  return (
    <div id="membership" className="membership">
      <div className="left">
        <h1>MEMBERSHIP</h1>
        <p>
          "Join the IT Gopeshwar Gym community today and take the first step
          towards a healthier lifestyle! With a monthly membership fee of just
          100 rupees, access state-of-the-art facilities, expert guidance, and a
          supportive environment to help you reach your fitness goals. Plus, for
          new members, there's an exciting one-time registration fee of only 250
          rupees. Don't miss out on this incredible opportunity to invest in
          your health and well-being. Sign up now and start your fitness journey
          with us!"
        </p>
        <button className="btn">know more</button>
      </div>
      <div className="right">
        <img src={membership} alt="" />
      </div>
    </div>
  );
};

export default Membership;
