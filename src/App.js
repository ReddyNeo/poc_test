import React from "react";
import API from './API.js';
import APIOUTPUT from "./Apioutput.js";
import "./App.css";
import AZURE from "./Azure.js";
import JACACO from "./Jacaco.js";
import JUNIT from "./junit.js";
import KAFKA from "./Kafka.js";
import KCONSUMER from "./Kconsumer.js";
import KUBERNETES from "./kubernetes.js";
import SONARCUBE from "./Sonarcube.js";
import THREADS from "./Threads.js";
function App() {
   return (
    <div className="App">
      <header className="App-header">
        <h3>React REST API</h3>
      </header>
     <div className="body-wrapper"> 
     <div className="widget-wrapper">
        <API/>
        <THREADS/>
        <APIOUTPUT/>
        <KAFKA/>
        <AZURE/>
        <KCONSUMER/>
        <KUBERNETES/>
    </div> 
     <div>
     <hr></hr> 
     <h1>Quality Checks</h1>
     </div>
  </div> 
  <div className="wrapper-body">
  <div className="widget-wrapper2">
        <SONARCUBE/>
        <JACACO/>
        <JUNIT/>
  </div>
  </div>
</div>
  );
};
export default App;