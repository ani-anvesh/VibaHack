import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Image1 from "./images/1.jpeg";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import Image5 from "./images/5.PNG";
import "./layout.css";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#FFFFFF",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function SingleLineGridList() {
  const classes = useStyles();

  const tiles = [
    { title: "Smiles Foundation", img: Image1 },
    { title: "EdXenos", img: Image2 },
    { title: "Launch Space", img: Image3 },
    { title: "Skill Ship Foundation", img: Image4 },
    { title: "OutShade", img: Image5 },
  ];
  return (
    <Grid container xs={12} style={{ overflow: "hidden" }}>
      <div className={classes.root} className="example">
        <div className="gfon">
          <h1>Our Partners</h1>
        </div>
        <GridList className={classes.gridList} cols={4.5}>
          {tiles.map((tile) => (
            <GridListTile>
              <img className="imag" src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Grid>
  );
}
