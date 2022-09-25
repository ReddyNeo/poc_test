import React, {useState} from 'react';
import Axios from "axios";
function JUNIT() {
  const [qu, setQu] = useState("")
  
  var getApi = () => {
    Axios.get("https://api.quotable.io/random")
    .then(response => {
        console.log(response.data.author)
        setQu(response.data.author)
    }).catch(err => {
      console.log(err)
    })
        
    
}
  return (
    <div className="widget-item20">
          <h2>JUNIT/Mockito</h2>
          <button onClick={getApi}>GET</button>
          {qu ? <p>{qu}</p> : null}    
  </div>
      
        
    
  );
};
export default JUNIT; 