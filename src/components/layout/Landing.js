import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import NavBar from "./NavBar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import "./layout.css";
import logo from "./logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

export default function Landing() {
  document.addEventListener("DOMContentLoaded", function (event) {
    window.addEventListener(
      "load",
      function (e) {
        document.body.style.display = "block";
      },
      false
    );
  });
  const classes = useStyles();
  const [nav, setNav] = useState(false);
  const open = () => {
    document.getElementById("main").style.height = "100%";
  };
  const close = () => {
    document.getElementById("main").style.height = "0";
  };

  return (
    <div style={{ position: "relative" }} id="Home">
      <NavBar id="main" close={close} />
      <div className="img"></div>
      <Grid container xs={12} className="main">
        <Grid item xs={4} className="section left">
          <nav className="nav nav1">
            <li href="#Home">Home</li>
            <li href="#About">About</li>
            <li href="#Contact">Contact</li>
          </nav>
          <Avatar
            style={{ alignSelf: "center", margin: "3vh" }}
            className={classes.large}
            alt="Logo"
            src={logo}
          />
          <div class="icons">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <WhatsAppIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </div>
          <div className="font titleM">
            <h1 className=" titleM">
              VIBAHACK
              <span
                style={{
                  fontSize: "1.8em",
                  fontWeight: "lighter",
                  marginLeft: "12px",
                }}
              >
                #
              </span>
            </h1>
          </div>
        </Grid>
        <Grid item xs={8} className="section right">
          <MenuRoundedIcon
            fontSize="large"
            style={{ margin: "2vh" }}
            onClick={() => open()}
          />
          <nav className="nav nav2">
            <li href="#Speaker">Speaker's</li>
            <li href="#Partner">Partner's</li>
            <li href="#Sponcers">Sponser's</li>
            <li href="#QandA">Q & A</li>
          </nav>
          <div className="content">
            <p>
              THE ROOT OF INTELLIGENCE WHICH MAKE YOU TO ACHIEVE SUCCESS IS
              CHANGING YOUR IMAGINATION AND CREATIVITY INTO REALITY...!
            </p>
          </div>

          <div className="font title">INSPIRE</div>
          <div className="cardM"></div>
        </Grid>
      </Grid>
    </div>
  );
}
