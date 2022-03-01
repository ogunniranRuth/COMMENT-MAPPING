import { deselectOptions } from "@testing-library/user-event/dist/select-options";
import React, {useState} from "react";
import './App.css';




function App() {
  const[text, settext] = useState("");
  const [lsetf, setlsetf] = useState([]);
  
  const post = () =>{
    const items = {
      id : lsetf.length +1,
      comment: text,
    };
    setlsetf([...lsetf, items]);
    settext("");
  };

  const Delete = ()=>{
    const items={
      id:"",
      comment:"",
    }
  }



  console.log(lsetf)
  console.log(text)


  return (
    <div className="cardholder">
      <br/>
      <span><input  classname= "input" value= {text} onChange={(e)=>{settext(e.target.value)
      console.log(text)
      }}placeholder="pholder"/>
      <br/>
      <button className="post" onClick={()=>{ post()
        console.log('Have Posted')
      }}> post</button></span>


      {lsetf.map((props)=>(
        <div className="Card">
          <div> {props.id}.</div> 
          <div> Comment:{props.comment} <button className="btn" 
          onClick={()=>{Delete()}}> DELETE</button></div>
        </div>
      ))}
    </div>
  )
}

export default App;
