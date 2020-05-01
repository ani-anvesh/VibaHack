import React from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
const Stats = () => {
  return (
    <div>
      <div>
        <h1 className="titles">streams</h1>
      </div>
      <Grid
        container
        xs={12}
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="center"
        style={{ margin: "7vh 0vh" }}
      >
        <div className="card">
          <div className="front f1"></div>
          <div className="back">
            <h1>AI/ML</h1>
            <span className="shiva">
              In the data centric world , there are huge opportunities to
              analyze the data and make meaningful decisions for the welfare of
              business and society. AI / ML has seen its presence in domains
              like health care, agriculture, research etc.
            </span>
          </div>
        </div>

        <div className="card">
          <div className="front f2"></div>
          <div className="back">
            <h1>IOT</h1>
            <span className="shiva">
              In this digital era and with the advent of 5G technologies
              production of data and capabilities to transfer it to appropriate
              centers for analysis and production has seen exponential growth.
              With the emergence of IOT , people can easily control the
              environment as per their needs. All the electronic gadgets which
              are manufactured are somehow connected to internet.
            </span>
          </div>
        </div>

        <div className="card">
          <div className="front f3"></div>
          <div className="back">
            <h1>WEB/MOBILE APPS</h1>
            <span className="shiva">
              Any product amd service is penetrated into the market through
              mobile or web applications. These are playing crucial role in
              connecting people all over the world.
            </span>
          </div>
        </div>

        <div className="card">
          <div className="front f4"></div>
          <div className="back">
            <h1>BLOCKCHAIN</h1>
            <span className="shiva">
              Distributive environments are always looked upon because of its
              trust and integrity. Blockchain is one of the transformative
              technology which is highly secure,distributive and decentralized.
              Plethora of applications are emerging in this domain.
            </span>
          </div>
        </div>
      </Grid>
    </div>
  );
};
export default Stats;
