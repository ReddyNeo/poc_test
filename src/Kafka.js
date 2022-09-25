import React, {useState} from 'react';
import Axios from "axios";
function KAFKA() {
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
    <div className="widget-item3">
          <h3>KAFKA Producer Reactive</h3>
          <button onClick={getApi}>GET</button>
    {qu ? <p>{qu}</p> : null}    

          
  </div> 
        
    
  );
};
export default KAFKA; 