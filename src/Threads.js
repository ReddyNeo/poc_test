import React, {useState} from 'react';
import Axios from "axios";
function THREADS() {
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
    <div className="widget-item1">
          <h3>Threads</h3> 
          <button onClick={getApi}>THREAD1</button>
               {qu ? <p>{qu}</p> : null}  
          <p><button>THREAD2</button></p>
          <p><button>THREAD3</button></p>
          <p><button>THREAD4</button></p>
          <p><button>THREAD5</button></p>
          <p><button>THREAD6</button></p>
          <p><button>THREAD7</button></p>
          <p><button>THREAD8</button></p> 
   
          
        </div>
        
    
  );
};
export default THREADS; 