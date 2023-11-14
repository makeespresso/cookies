import React, { Component } from "react";
import Slider from "./Slider";

export default class About extends Component {
  render() {
    return (
        <div className="content_container">
            <div className="content">
        <p> this is an about page</p>
        <Slider/>
        </div>
        </div>

    );
  }
}