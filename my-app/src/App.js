import "./App.css";

document.title = "AppleSeeds React App";

function App() {
  // const data = ["hello", "world"];
  // const Newdata = data.map(
  // (el) => el.charAt(0).toUpperCase() + el.slice(1) + " "
  // );
  // const number1 = 5;
  // const number2 = 6;
  // const sum = number1 + number2;
  const string1 = "I love React!";

  return (
    <div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Me{" "}
      </a>{" "}
      <p width="200px" height="200px">
        {" "}
        {/* {number1} {/* {Newdata} "+"} {number2} {"="} {sum}{" "} */}{" "}
        {"The string’s length is " + string1}{" "}
      </p>{" "}
    </div>
  );
}

export default App;
