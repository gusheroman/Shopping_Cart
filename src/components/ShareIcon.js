import React from "react";
import emailIcon from "../assests/image/emailIcon.png";
import twitterIcon from "../assests/image/twitterIcon.png";
import facebookIcon from "../assests/image/facebook.png";
import googlePlusIcon from "../assests/image/googlePlusIcon.png";

export const ShareIcon = () => {
  return (
    <div>
      <img
        src={emailIcon}
        alt="emailIcon"
        style={{ height: "30px", marginLeft: "14px", cursor: "pointer" }}
      ></img>
      <img
        src={twitterIcon}
        alt="twitterIcon"
        style={{ height: "30px", marginLeft: "14px", cursor: "pointer" }}
      ></img>
      <img
        src={facebookIcon}
        alt="facebookIcon"
        style={{ height: "30px", marginLeft: "14px", cursor: "pointer" }}
      ></img>
      <img
        src={googlePlusIcon}
        alt="googlePlusIcon"
        style={{ height: "30px", marginLeft: "14px", cursor: "pointer" }}
      ></img>
    </div>
  );
};
