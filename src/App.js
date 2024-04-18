import React from "react";
import "./App.css";
import Navbar from './components/Navbar';


// import Footer from "./components/Footer";
import A_img from './assets/p_13.png';
import img_localsumer from './assets/img_localsumer.png';
import img_flekora from './assets/img_flekora.png';
import img_etf from './assets/img_etf.png';
import img_xoespresso from './assets/img_xoespresso.jpg';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <div className="content">
            <div className="aboutContent">
              <div className="imgContainer">
              <img className="img_style"src={A_img} alt="ana_silvia" />
              </div>
              <p> Hello there! 👋 </p>
              <br></br>
              <p>I am a multi-disciplinary product designer. My background sits at the intersection of web development, psychology, consumer behavior, and accessibility. I consider the human element in every design, merging creativity with functionality to bring projects to life.</p>
              <br></br>
              <p>☕️☕️☕️</p>
            </div>
            <div className="projects list-section">
              <h2>
                <span>Selected work</span>
              </h2>
              <br></br>
              <ul>
              <a href="https://www.behance.net/gallery/99482723/Localsumer-Business-Directory" target="_blank"> <img className="img_style" src={img_localsumer} alt="Localsumer"></img></a>
               
                <li className="title">Localsumer - Product Design</li>
                <p>From <a href="https://www.behance.net/gallery/99482723/Localsumer-Business-Directory" target="_blank">ideation</a> to launch of the web app.</p>
                Learn more about Localsumer in this <a href="https://www.youtube.com/watch?v=Tjxtfp9kzco" target="_blank">video</a>. 👈🏼
                <p className="br_space"> (psst... psst... before launching we made it to round two of <a href="https://masschallenge.org/programs-mexico" target="_blank">MassChallenge Mexico</a>, and we celebrate that! 🎉)</p>
                {/* <p>Also, don't forget to follow us on <a href="https://www.instagram.com/localsumer/" target="_blank">IG</a>!😉</p> */}
                <br></br>

                <a href="https://www.behance.net/gallery/100190355/Flekora-UXUI-Case-Study" target="_blank"><img className="img_style" src={img_flekora} alt="Flekora"/></a>
                <li className="title">Flekora - UX/UI Design, Web Development</li>
                <p>Ideated, <a href="https://www.behance.net/gallery/100190355/Flekora-UXUI-Case-Study" target="_blank">created</a> and programmed <a href="https://weareflekora.com/#Services" target="_blank">Flekora's website</a>.👾</p>
                <p className="br_space">Flekora is a boutique design agency offering UX/UI design, strategy, branding services. 💫</p>
                <br></br>
                < a href="https://drive.google.com/file/d/1WnxsNw5WEzZKmNrmvGL2C5YJhvhwf1GD/view" target="_blank"><img className="img_style" src={img_etf} alt="ETF"/></a>
                <li className="title">ETF - UX/UI Design (Spanish)</li>
                <p>Web App redesign 📸</p> 
                <p>Watch the <a href="https://drive.google.com/file/d/1dii1So3FnSlWGIKlEYGQzykfzgPyjM2o/view?usp=sharing" target="_blank">final result</a>.</p>
                <p className="br_space" >See the <a href="https://drive.google.com/file/d/1WnxsNw5WEzZKmNrmvGL2C5YJhvhwf1GD/view?usp=sharing" target="_blank">design process</a> 🔁 and <a href="https://drive.google.com/file/d/1GCHbtdNG2Vdc5MCP9tqimNDzB2VZwgFE/view?usp=sharing" target="_blank">visual design</a>.🎨</p>
                <br></br>
                
                <a href="https://www.canva.com/design/DADua4nuPws/tWNtNjv26HwHCymlfxe0hw/view?utm_content=DADua4nuPws&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank"><img className="img_style" src={img_xoespresso} alt="XO Espresso"/></a>
                <li className="title">XO Espresso Bar - UX/UI Consultation </li>
                <p>
                  Collaboration with specialty coffee shop with Aussie vibes and instagrammable drinks in the heart of Miami beach. 🏖
                  Designed talent pipeline to help the company accelerate and facilitate their hiring process as they continue to grow.</p> 
                  <p>Take a look at the case study <a href="https://www.canva.com/design/DADua4nuPws/tWNtNjv26HwHCymlfxe0hw/view?utm_content=DADua4nuPws&utm_campaign=designshare&utm_medium=link&utm_source=viewer" target="_blank">here</a>. Also, their <a href="https://www.instagram.com/xoespressobar/" target="_blank">IG</a> is so chic! 💁🏻‍♀️☕️</p>
                  <p><a href="https://medium.com/@anamendivil/xo-espresso-bar-image-documentation-efa3eb0d0e41" target="_blank"> Image documentation</a></p>
              </ul>
              <br className="br_space"></br>
              <br></br>
              <h2>
                <span>Design Lead</span>
              </h2>
              <br></br>
              <ul>
                <li className="title">Terapify</li>
                <p>
                  Collaborated with <a href="https://startuplinks.world/" target="_blank">Startuplinks</a> to provide UX/UI feedback to high impact startups in
                  LATAM. <a href="https://www.terapify.com/" target="_blank"> {" "}Terapify</a>, is a digital platform that provides mental
                  health services with professional therapists according
                  to your needs.
                </p>
                <p>
                  Watch the live video
                  <a href="https://fb.watch/8EpT3ixI26/" target="_blank">
                    {" "}
                    here{" "}
                  </a>
                  and the
                  <a
                    href="https://drive.google.com/file/d/1b_s5_9dzjUA8gJbqArP7yIeAbkAub_af/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    presentation</a>. ✅👩🏻‍⚕️
                </p>
                <br></br>
                <li className="title">Instructor at General Assembly</li>
                <p>
                  Teaching <a href="https://generalassemb.ly/instructors/ana-benedict/22913" target="_blank">Intro to programming and Intro to UX/UI Design</a> workshops. 
                  Leading the first intro classes taught in Spanish for LATAM!👩🏻‍💻🌎
                  
                </p>
                <p></p>
                <br></br>
                <li className="title">UX Coach at Laboratoria</li>
                <p>
                Provided guidance, mentorship, and expertise to aspiring UX designers to help them develop their skills, and enhance their understanding of user experience design principles. 🇵🇪🇪🇨🇲🇽🇨🇴
                </p>
              </ul>
              <br></br>
              <br></br>
              <h2>
<span>Archive</span>
</h2>
<br></br>
<ul>
<li className="title">Monster 👾</li>
<p>The challenge: To analyze an App and incorporate a new feature into the existing product.</p>
<p>Read the <a href="https://medium.com/@anamendivil/monster-9cd85006c090" target="_blank"> case study 🎯</a></p>
<br></br>
<li className="title">Hot Yoga Brickell 🧘🏽‍♂️</li>
<p>The purpose of this project is to re-design Hot Yoga Brickell website by doing a deep research, business analysis and user testability in order to create a more user-centered allowing the user to accomplish their purposes and company retain their client interaction. 🛎</p>
<p>Read the case study <a href="https://medium.com/@anamendivil/hot-yoga-case-study-8aae4e8820f5" target="_blank"> here </a> 	&#38; learn more about the <a href="https://github.com/makeespresso/hotyogabrickell/tree/master/hotyogabrickell" target="_blank"> technical aspects</a></p>
<br></br>
<li className="title">White Stone 🛋</li>
<p><b>Editorial — e-Magazine</b></p>
<p>Design a responsive online platform for a magazine, newspaper or blog directed to meet the needs and goals of one of the given User Personas. 💫</p>
<p>Read the case study <a href="https://medium.com/@anamendivil/editorial-e-magazine-8b1de16e0d12" target="_blank" >here</a></p>
</ul>
<br></br>
<br></br> 
              <br></br>
            </div>
          </div>
          {/* <Footer/> */}
        </div>


  );
}
export default App;