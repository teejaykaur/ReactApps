import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./Presentation";
import Footer from "./Footer";

const App = () => [<Presentation />, <Footer />];

ReactDOM.render(<Presentation />, document.getElementById("root"));
