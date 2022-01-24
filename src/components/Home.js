import React from "react";
import Navbar from "./Navbar";
import Menu from "./menu/Menu";
import Holdbar from "./Holdbar";
import Users from "./users/Users";
import './Home.css'
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Holdbar />
      <Menu />
      <Users />
    </div>
  );
}

export default Home;
