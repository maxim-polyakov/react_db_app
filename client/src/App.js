import './App.css';
import { useState } from "react";
import { create } from './actions/create.js'
import { fetch } from './actions/fetch.js'

function App() {
  const [value, setValue] = useState('');
  const [svalue, setSvalue] = useState('');
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={`${process.env.REACT_APP_API_URL}/${count}.jpg`} width={300} height={300}/>
          <input type="text" placeholder="Message" name="item_number" required onChange={(e)=>setValue(e.target.value)} className="input"/>
          <button onClick={()=>create({value})} type="button"  className="button">Send POST</button>
          <button onClick={()=>setSvalue(fetch())} type="button"  className="button">Get POST</button>
          <button onClick={()=>setCount(count + 1)} type="button"  className="button">Set Count</button>
          <output>{svalue}</output>
        <div className="video-section">
          <video src={`${process.env.REACT_APP_API_URL}/${3}.mp4`}
          controls={true}></video>
        </div>
      </header>
    </div>
  );
}

export default App;
