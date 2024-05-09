import React, { Component } from "react";
import Burrito from '../assets/icon_name_midblue.png'

export default class FrontPage extends Component {
  render() {
    return (
      <div className="BoxC">
        <a className="Container"  href="https://anasbenedict.squarespace.com/about">
        <img className="image-hover"src={Burrito}  alt="ana_silvia" />
        </a>
        <p> Product Designer</p>
      </div>

    );
  }
}
