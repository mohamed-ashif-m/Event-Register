import { useState } from 'react'
import collimg from "./assets/collimg.jpg";

import './App.css'

function App() {
  return (
  <>
      <nav class='navy'>
        <ul className="loggy">
          <li className='log'>
            <h3 id="share-tech-mono-regular">
              TECH<span id="sym">NIZ</span> 2K25
            </h3>
          </li>
        </ul>
      </nav>
      <img className="back-1" src={collimg} alt="College" />
      <div className="black"></div>
      <h4 id="dept-name">DEPARTMENT OF AI&DS</h4>
      <h5 id="college-name">
        <span id="s-logo" className="sm">
          S
        </span>
        tella <span id="m-logo" className="sm">M</span>ary's
        <span id="c-logo" className="sm"> C</span>ollege Of <span id="e-logo" className="sm">E</span>ngineering
      </h5>
      <p className="wel-top">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut
        neque explicabo obcaecati a quidem ut ullam quisquam rem corrupti itaque
        doloribus aliquid odio odit quibusdam repellat porro
      </p>
      <button className="btn-1">Register</button>
    </>
  );
}

export default App
