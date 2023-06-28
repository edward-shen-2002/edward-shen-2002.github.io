function App() {
  return (
  <div className="fade-page">
    <div className="title">
      <h1> Edward Shen </h1>
    </div>

    <div className="about">
      <h1> About </h1>
      <p>
        I am a 2B Computer Science student at the University of Waterloo.
      </p>
    </div>

    <div className="contact">
      <h1> Contact </h1>
      <a href="mailto: e26shen@uwaterloo.ca">Email</a>
      <a href="https://www.linkedin.com/in/edward-shen-b93212205/">Linkedin</a>
      <a href="https://github.com/edward-shen-2002">Github</a>
    </div>
  </div>);
}

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(App());
