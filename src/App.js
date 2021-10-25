
import "./App.css";
import { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import { useEffect,useState } from "react";

const text =
  "этот текст передали пропсом, стилизовали через css и файл загрузили на github";

function App() {
  const [messageList, setMessageList] = useState([{author: 'Vasya', text: 'text'}])

 const handleChange = (e) => {
  setMessageList((prev) => ({...prev,  [e.target.name]: e.target.value}));
 }

  useEffect(() => {
  console.log("Сообщение отправлено!")
  }, [])
  return (
    <>
    <div className="App">
      <Message text={text} />
    </div>
    <input value={messageList.author}/>
    <input value={messageList.text}/>
    <button onChange={handleChange} >Отправить сообщение</button>
    
    <MessageList messageList = {messageList}/>
    </>
  );
}

export default App;
