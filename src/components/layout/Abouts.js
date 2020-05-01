import React from "react";
import "./st.css";
import Grid from "@material-ui/core/Grid";

const Abouts = () => {
  return (
    <div className="about" id="About">
      <Grid container xs={12}>
        <Grid item xs={7}>
          <div className="cont">
            <h1>ABOUT US</h1>
            <b>
              TECHNOLOGY IS A UNBELIEVABLE MAGIC IN OUR LIFE WHICH IS
              DRASTICALLY CHANGING US COMPLETELy
            </b>
            <p>
              In this trending technological world , Code is the priority
              language to complete any task and various domains like
              websites,mobile apps etc. are created using a simple respective
              code. This code makes countless revolutions and breaking barriers
              faced in the current technology. Everything in this world is
              coded, and cracking this code is a elegance in trickery. When you
              asssume that everything has achived a solution, we bring you the
              wellspring. We present to you, Hack Off , one of the hackathons
              where your innovative ideology speaks about your knowledge. It
              shows how you wish your world to be today and where you want to
              see it in the future. A 24-hour long hackathon, Hack Off is
              inviting young minds from all across the nation to come together
              to put up the most magnificent show the digital realm has ever
              seen.
            </p>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="imge"></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Abouts;
