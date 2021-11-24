import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const h1Style = {
    color: "firebrick"
  }

  return (
  <div id="home">
    <h1 style={h1Style}>{ name } is a Web Developer from { city }</h1>
  </div> 
    )
}

export default Home;
