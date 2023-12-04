import React, { Component } from "react";
import Slider from "./Slider";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="container-half-width">
          <div className="half-width">
            <Slider />
          </div>
          <div className="half-width">
            <div className="text-container">
            <p>
              I am a trilingual product designer with a strong foundation in web
              development and pedagogics with a recent focus on designing
              interfaces for a remote-first VC-backed technology SaaS company
              serving restaurant operators. I enjoy working collaboratively on
              user-centric solutions, yet I am equally adept at working
              independently to deliver design solutions that improve the user
              experience and accomplish business objectives.
            </p>
            <p>
              I am a trilingual product designer with a strong foundation in web
              development and pedagogics with a recent focus on designing
              interfaces for a remote-first VC-backed technology SaaS company
              serving restaurant operators. I enjoy working collaboratively on
              user-centric solutions, yet I am equally adept at working
              independently to deliver design solutions that improve the user
              experience and accomplish business objectives.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
