import React, { Component } from "react";
import buildings from "./buildings.jpeg";
import { H1, Text } from "@blueprintjs/core";

export default class HeaderContent extends Component {
  render() {
    return (
      <header>
        <img
          src={buildings}
          style={{ maxWidth: "100%" }}
          alt="buildings.jpeg"
        ></img>
        <H1>Финансовые инвестиции:</H1>
      </header>
    );
  }
}
