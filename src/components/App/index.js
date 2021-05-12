// == Import npm
import React from "react";

// == Import
import reactLogo from "./react-logo.svg";
import Pages from "../Pages";
import "./styles.css";
import pageContent from "../../data/pageContent";

// == Composant

const App = () => {
  console.log(pageContent, "pageData App Log");

  return (
    <div className="app">
      <Pages content={pageContent} />
      {/* {
      pageContent.map((content)=>
      
      <Pages key ={content.id} 
      {...content}
      num = {num}
      />)} */}
    </div>
  );
};

// == Export
export default App;
