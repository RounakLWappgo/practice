import { useState } from 'react';
import './App.css';

function App() {
const [select, setSelect] = useState("Male");
const isGoing= [
 { id: 1 , opt:"option1", check:false},{id: 2, opt:"option2", check:false}
]

const [check, setCheck] = useState({})

function onValueChange(e){
    setSelect(e.target.value)
 }
 function odChange(e){
  setCheck({
  [e.target.name]:e.target.checked})

 } 

 function formSubmit(e){
   e.preventDefault()

    console.log(check)
   console.log(select)
  
 }

  return (
    <div className="App">
        <form onSubmit={formSubmit}>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              checked={select === "Male"}
              onChange={onValueChange}
            />
            Male
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Female"
              checked={select === "Female"}
              onChange={onValueChange}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Other"
              checked={select === "Other"}
              onChange={onValueChange}
            />
            Other
          </label>
        </div>
        <div>
          Selected option is : {select}
        </div>
        <p>Question1 ?</p>
        {isGoing.map(item => (

<label key={item.id}>
<input
    name="isGoing"
    type="checkbox"
    value={item.id}
    name={item.opt}
     checked={check[item.opt]}
    onChange={odChange}
  
    />{item.opt}
    </label>

        ))
}
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
