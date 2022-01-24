import React, { Component } from "react";
import buildings from "./buildings.jpeg";
import { H1 } from "@blueprintjs/core";

export default class HeaderContent extends Component {
  render() {
    return (
      <header>
        <img
          src={buildings}
          style={{
            maxWidth: "100%",
            // boxShadow: "0px 0px 10px 0px",
          }}
          alt="buildings.jpeg"
        ></img>
        <br />
        <br />
        <H1>Финансовые инвестиции:</H1>
      </header>
    );
  }
}
