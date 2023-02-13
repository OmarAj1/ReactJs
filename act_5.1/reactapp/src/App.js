import "./App.css";
// import Btn from "./btn";
import Card from "./cards";

function App() {
  return (
    // <>
    //   <Btn id="first" Text="HelloWorld">
    //     {" "}
    //   </Btn>{" "}
    //   <Btn id="second" Text="Good Day">
    //     {" "}
    //   </Btn>{" "}
    // </>
    <section id="Main">
      <Card
        id="content"
        className1="card"
        alt="firstImg"
        src="https://img.freepik.com/free-photo/coffee-cup-with-christmas-inscription-paper_23-2147992492.jpg?w=1060&t=st=1676295164~exp=1676295764~hmac=951c9c933752ba64c4e02c0340e2931fe12c145b374e49d737ac8679f122b6aa"
        header="MY BABY YOU"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, ad!"
        link1="facebook.com"
        link2="google.com"
      >
        {" "}
      </Card>
      <Card
        id="content"
        className1="card"
        alt="firstImg"
        src="https://img.freepik.com/free-photo/notebook-near-socks-twigs_23-2147952616.jpg?w=1060&t=st=1676297505~exp=1676298105~hmac=15daec96e62996bfb6ca27a7cd12a96be844c3a62c7381618cc133fe76d59ece"
        header="MY BABY YOU"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, ad!"
        link1="facebook.com"
        link2="google.com"
      >
        {" "}
      </Card>{" "}
      <Card
        id="content"
        className1="card"
        alt="firstImg"
        src="https://img.freepik.com/free-psd/hand-drawing-picture-sled-winter-picture_53876-57365.jpg?w=1060&t=st=1676297528~exp=1676298128~hmac=809f01d3872d466e8eea66589d87f3fd89f200f0a546c4fac624e446f306c308"
        header="MY BABY YOU"
        paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, ad!"
        link1="facebook.com"
        link2="google.com"
      ></Card>
    </section>
  );
}

export default App;
