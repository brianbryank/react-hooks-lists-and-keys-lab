import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href="#home">home</a>
    <a href="#home">about</a>
    <a href="#home">projects</a>
    
    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
