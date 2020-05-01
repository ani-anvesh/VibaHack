import React from "react";
import Grid from "@material-ui/core/Grid";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import "./layout.css";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const NavBar = (props) => {
  return (
    <div id="main">
      <Grid container xs={12}>
        <Grid item xs={1} className="navL">
          <div className="image"></div>
        </Grid>
        <Grid item xs={5} className="navM">
          <nav>
            <li href="#Home">Home</li>
            <li href="#About">About</li>
            <li href="#Speaker">Speaker's</li>
            <li href="#Partner">Partner's</li>
            <li href="#Sponcers">Sponser's</li>
            <li href="#QandA">Q & A</li>
          </nav>
        </Grid>
        <Grid item xs={6} className="navM1">
          <CloseRoundedIcon
            onClick={props.close}
            style={{ color: "#FFFFFF", fontSize: "9vh" }}
          />
          <div className="contact" id="Contact">
            <h1>Contact Us</h1>
            <span>
              <CallRoundedIcon fontSize="larger" />
              {"  "}9542117888
            </span>
            <span>
              <MailOutlineRoundedIcon fontSize="larger" />
              {"  "}vibafoundation@gmail.com
            </span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default NavBar;
