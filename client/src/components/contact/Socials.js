import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

export default function Socials() {
  return (
    <div className="socials">
      <p className="course-section">Book a Free Chat with Me!</p>
      <p className="about-text">
        Would you like to find out if Hypnobirthing is for you and ask any
        questions you may have about my courses? Then book a 20 minute free chat
        with me! Please DM me (
        <a href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
          @MightyFierceBirth
        </a>
        ) or use my details below to schedule a suitable time for you.
      </p>
      <p>
        <a href="https://www.instagram.com/mightyfiercebirth/" target="_blank">
          <InstagramIcon fontSize="large" sx={{ color: "black" }} />
        </a>{" "}
        @mightyfiercebirth
      </p>
      <p>
        <a href="https://m.facebook.com/mightyfiercebirth/" target="_blank">
          <FacebookIcon fontSize="large" sx={{ color: "black" }} />
        </a>{" "}
        Mighty Fierce Birth
      </p>
      <p>
        <PhoneAndroidIcon fontSize="large" sx={{ color: "black" }} /> 07519
        954715
      </p>
    </div>
  );
}
