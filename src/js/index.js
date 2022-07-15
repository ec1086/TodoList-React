

//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle


//include your index.scss file into the bundle


//import your own components
import {List}  from "/workspace/react-hello/src/js/component/Home.jsx";

//render your react application
ReactDOM.render(<List />, document.querySelector("#app"));