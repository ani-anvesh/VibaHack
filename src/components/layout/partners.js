import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Image1 from "./images/1.jpeg";
import Image2 from "../layout/images/2.png";
import image3 from "../layout/images/3.png";
import image4 from "../layout/images/4.png";
import image5 from "../layout/images/5.PNG";
import "./layout.css";

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
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function SingleLineGridList() {
  const classes = useStyles();

  const tiles = [
    { title: "Smiles Foundation", img: { Image1 } },
    { title: "EdXenos", img: { Image2 } },
    { title: "Launch Space", img: { image3 } },
    { title: "Skill Ship Foundation", img: { image4 } },
    { title: "OutShade", img: { image5 } },
  ];
  return (
    <div className={classes.root} className="example">
      <div className="gfon">
        <h1>Our Partners</h1>
      </div>
      <GridList className={classes.gridList} cols={2.5}>
        {tiles.map((tile) => (
          <GridListTile>
            <img src={tile.img} alt={tile.title} />
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
  );
}
