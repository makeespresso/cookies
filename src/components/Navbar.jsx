// import React, { Component } from "react";
// import logo from "../assets/asbLogo.svg";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div className="NavbarContent">
//           <div className="asbLogo">
//             <img className="logo" src={logo} alt="Logo" />
//           </div>

//           <h2><a href="https://www.linkedin.com/in/anasbenedict/" target="_blanks">ana silvia</a></h2>

//         <p><a href="https://github.com/makeespresso" target="_blank">Github</a></p>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";



export default class Navbar extends Component {
  render() {
    return (
      <div className="NavbarContent">
        <div className="IntroHeader">
          <h1 id="name"><a href="https://www.linkedin.com/in/anasbenedict/" target="_blanks">Ana S. Benedict</a></h1>
          <p> User Experience Designer</p>
          </div>
<div className="ThirdWidthIntroHeader">
        <p><a href="https://github.com/makeespresso" target="_blank">Github</a></p>
        </div>
      </div>
    );
  }
}
