import React from "react";
import  ReactDOM  from "react-dom/client";

/**
 * create using react
 * <div id="parent">
 *     <div id ="child">
 *          <h1>"I am ah1 tag"</h1>
 *          <h2>"i am ah2 tag from parent"</h2>
 *     </div>
 *  <div id ="child2">
 *          <h1>"I am ah1 tag"</h1>
 *          <h2>"i am ah2 tag from parent"</h2>
 *     </div>
 * </div>
 * ReactElement(object)==rendering=> HTML(Browser Understand)
 */

const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"I am ah1 tag from parent")
                ,React.createElement("h2",{},"I am h2 Tag")]),
                React.createElement("div",{id:"child2"},
                [React.createElement("h1",{},"I am ah1 tag from parent")
                ,React.createElement("h2",{},"I am h2 Tag")])]
                );



const heading = React.createElement(
        "h1",
        {id:"heading", xyz:"abc"} , 
        "Hello World! from React!");

//console.log(heading);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
        
//root.render(heading);
root.render(parent);