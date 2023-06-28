function App() {
  return React.createElement(
    "div",
    { className: "fade-page" },
    React.createElement(
      "div",
      { className: "title" },
      React.createElement(
        "h1",
        null,
        " Edward Shen "
      )
    ),
    React.createElement(
      "div",
      { className: "about" },
      React.createElement(
        "h1",
        null,
        " About "
      ),
      React.createElement(
        "p",
        null,
        "I am a 2B Computer Science student at the University of Waterloo."
      )
    ),
    React.createElement(
      "div",
      { className: "contact" },
      React.createElement(
        "h1",
        null,
        " Contact "
      ),
      React.createElement(
        "a",
        { href: "mailto: e26shen@uwaterloo.ca" },
        "Email"
      ),
      React.createElement(
        "a",
        { href: "https://www.linkedin.com/in/edward-shen-b93212205/" },
        "Linkedin"
      ),
      React.createElement(
        "a",
        { href: "https://github.com/edward-shen-2002" },
        "Github"
      )
    )
  );
}

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);
root.render(App());