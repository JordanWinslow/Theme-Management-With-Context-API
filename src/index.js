import React from "react";
import ReactDOM from "react-dom";
/* The benefit of this may not be immediately apparent
when viewing this project in one .js file. But for
projects spanning numerous nested components, this
simple code allows us to pass theme variables through
dozens of components without prop drilling.

To expand on this you can set up Light/Dark theme
buttons and allow the user to change theme.
*/

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
