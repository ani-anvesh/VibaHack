import React from "react";
import "./layout.css";
import Grid from "@material-ui/core/Grid";
export default function Speakers() {
  return (
    <div className="speak" id="Speaker">
      <div className="head">
        <h1>Our Speaker's</h1>
      </div>
      <Grid container xs={12}>
        <Grid className="l1" item xs={4}>
          <h1>COMING</h1>
        </Grid>
        <Grid className="r1" item xs={8}>
          <h1>SOON>>></h1>
        </Grid>
      </Grid>
    </div>
  );
}
