import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:5000",
});


function App() {
  const [value, setValue] = useState('');
  const [svalue, setSvalue] = useState('');

  const create = async (inpt) => {
    const { data } = await $host.post("api/", inpt);
    return data;
  };

  const fetch = async () => {
    const { data } = await $host.get("api/");

    return data[data.length - 1].message.toString()
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="Message" name="item_number" required onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={()=>create({value})}>Send POST</button>
          <button onClick={()=>setSvalue(fetch())}>Get POST</button>
          <output>{svalue}</output>
      </header>
    </div>
  );
}

export default App;
