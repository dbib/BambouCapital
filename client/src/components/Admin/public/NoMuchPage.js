import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div style={notpage}>
        <div style={boxContainer}>
          <h1 style={{ fontSize: "100px" }}>404</h1>
          <h3 style={{ fontSize: "18px" }}>Cette page n'existe pas</h3>
        </div>
      </div>
    );
  }
}

const notpage = {
  minHeight: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const boxContainer = {
  maxWidth: "300px",
  margin: "auto",
  textAlign: "center",
};
