import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Headline from "./Components/Headline/Headline.jsx";
import Food from "./Components/Food/Food.jsx";
import Category from "./Components/Categories/Category.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Hero/> 
      <Headline/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
