import { HashRouter as Router } from "react-router-dom";
import collimg from "./assets/collimg.jpg";
import Form from "./Form";
import "./App.css";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className='main'>
      <nav className="navy">
        <ul className="loggy">
          <li className="log">
            <h3 id="share-tech-mono-regular">
              TECH<span id="sym">NIZ</span> 2K25
            </h3>
          </li>
        </ul>
      </nav>
      <h4 id="dept-name">DEPARTMENT OF AI&DS</h4>
      <h5 id="college-name">
        <span id="s-logo" className="sm">S</span>tella
        <span id="m-logo" className="sm"> M</span>ary's
        <span id="c-logo" className="sm"> C</span>ollege Of
        <span id="e-logo" className="sm"> E</span>ngineering
      </h5>
      <p className="wel-top">
        Get ready to revolutionize the future! Stella Mary's College of Engineering's AI and DS Department proudly presents
        a <i className="sympo">TECHNIZ 2K25</i> symposium that converges the brightest minds in AI and DS, showcasing
        cutting-edge innovations, and fueling the next generation of tech trailblazers!
      </p>
      <button className="btn-1" onClick={() => navigate("/register")}>Register</button>
      <div className="black"></div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
