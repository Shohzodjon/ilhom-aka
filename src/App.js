import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    fetch("https://54.uz/rang.php")
      .then((resolve) => resolve.json())
      .then((data) => {
        setColor(data);
        console.log(data);
      });
  }, []);

  let newColor = "";
  switch (color.status) {
    case "qora": {
      newColor = "#000";
      break;
    }
    case "qizil": {
      newColor = "red";
      break;
    }
    case "yaxshil": {
      newColor = "green";
      break;
    }
    case "ko'k": {
      newColor = "blue";
      break;
    }
    case "sariq": {
      newColor = "yellow";
      break;
    }
    case "oq": {
      newColor = "#fff";
      break;
    }
    default:
      break;
  }
  console.log(newColor);

  return (
    <div className="App" style={{ background: `${newColor}` }}>
      <header className="App-header">
        <h1>{color.status}</h1>
        <form>
          <button type="submit">Chnage color</button>
        </form>
      </header>
    </div>
  );
}

export default App;
