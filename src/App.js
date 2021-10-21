import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";

const text = "этот текст передали пропсом и стилизовали через css";

function App() {
  return (
    <div className="App">
      <Message text={text} />
    </div>
  );
}

export default App;
