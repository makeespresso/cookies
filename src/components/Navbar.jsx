import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="NavbarContent">
        <div className="IntroHeader">
          <h1 id="name">ab.</h1>
          <p> Ana Silvia Benedict | Product Designer</p>
          </div>
<div className="ThirdWidthIntroHeader">
        <p><a href="https://github.com/makeespresso" target="_blank">Github</a></p>
        <p><a href="https://www.linkedin.com/in/anasbenedict/" target="_blank">LinkedIn</a></p>
        </div>
      </div>
    );
  }
}
