import React from "react";
import Landing from "./layout/Landing";
import Partners from "./layout/partners";
import Stats from "./layout/stats";
import Abouts from "./layout/Abouts";
import QandA from "./layout/QandA";
import Speakers from "./layout/Speakers";

export default function Home() {
  return (
    <div>
      <div
        style={{
          margin: 0,
          padding: 0,
          borderBottom: "2px solid orange",
          borderRadius: "23px",
        }}
      >
        <Landing />
        <Abouts />
        <Stats />
        <Speakers />
        <Partners />
        <div style={{ padding: "7vh" }}>
          <div
            style={{
              textAlign: "center",
              margin: "2vh",
              color: "orange",
              fontSize: "2em",
            }}
          >
            <h1>Frequently Asked Questions</h1>
          </div>
          <QandA />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        Powered By{"  "}
        <bold
          style={{ fontSize: "3vh", fontWeight: "bolder", color: "#FF9F1C" }}
        >
          AVASYU
        </bold>
      </div>
    </div>
  );
}
