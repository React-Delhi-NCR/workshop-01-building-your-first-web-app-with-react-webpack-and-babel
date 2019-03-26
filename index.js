import React from "react";
import ReactDOM from "react-dom";
import Text from "./src/Text";
import TextWithProps from "./src/TextWithProps";
import LikeDislike from "./src/LikeDislike";

const demo = 1;
let Component;
switch (demo) {
  case 1:
    Component = <Text />;
    break;
  case 2:
    Component = <TextWithProps value="Text from prop" />;
    break;
  case 3:
    Component = <LikeDislike />;
    break;
}

ReactDOM.render(Component, document.getElementById("root"));
