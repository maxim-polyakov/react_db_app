import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { create } from './actions/create.js'
import { fetch } from './actions/fetch.js'




function App() {
  const [value, setValue] = useState('');
  const [svalue, setSvalue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="Message" name="item_number" required onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={()=>create({value})}>Send POST</button>
          <button onClick={()=>setSvalue(fetch())}>Get POST</button>
          <output>{svalue}</output>
        <Image
            width={300}
            height={300}
            src={`${process.env.REACT_APP_API_URL}/${1}.jpg`}
        ></Image>
      </header>
    </div>
  );
}

export default App;
