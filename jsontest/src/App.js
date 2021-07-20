import './App.css';
import { useState } from 'react';
import {data} from './countries'
function App() {
 const [search, setSearch] = useState("");
  const [items ,setitem] = useState([])
 const handlechange = (e) => {
   
   setSearch(e.target.value)
  
   e.target.value===""?setitem([]):
    setitem(data.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    }))
    
 }
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Search" value={search}  onChange={handlechange}/>
      </form>
      {items.map(item => {
        return <div key={item.code}><li>{item.name} &nbsp; <img src={item.src} height="40px"  alt="" /></li></div>
      })}
    </div>
  );
}

export default App;
