import React from "react";
import ReactDOM from "react-dom";

// normally this would be separated into it's own component wrapper,
// but for ease of understanding, I left it here.
const Theme = React.createContext({
  background: "#FFFFFF",
  foreground: "#000000"
});
const OuterComponent = () => {
  return <ComponentExample />;
};
const ComponentExample = () => {
  return (
    <Theme.Consumer>
      {theme => {
        return (
          <div>
            <p>Theme Background: {theme.background}</p>
            <p>Theme Foreground: {theme.foreground}</p>
          </div>
        );
      }}
    </Theme.Consumer>
  );
};

const App = () => {
  return <OuterComponent />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
