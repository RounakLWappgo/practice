import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect} from 'react-router-dom';

function Weather() {
    const [temperature, setTemperature ] = useState('0');
    const APIkey = "d71a6c55c4d90de4a6b412bc759e9758";
    const [cityname, setCityname] = useState("mumbai");
    const [recent, setRecent] = useState([]);
    const [recentclick , setrecentclick] = useState(false) 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`

 var search  = (e) => { 
    axios.get(url)
    .then(res => {let hello = res.data
        console.log(hello.main.temp);
        let rec = (hello.main.temp - 273.15).toFixed(2);
        let nam = hello.name;
        if(recent.some(e => e.name === nam)) {
           let namm = recent.findIndex((e) => e.name === nam)
           recent.splice(namm,1)
           setRecent([...recent, {name: nam, temp: rec}])
            console.log(namm);
          }else{
        setRecent([...recent, {name: nam, temp: rec}])
          }
    setTemperature((hello.main.temp - 273.15).toFixed(2))})
    .catch( err => {
        console.log(err.response);
    } )
    }

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=d71a6c55c4d90de4a6b412bc759e9758')
        .then(res => {let hello = res.data
            console.log(hello.main.temp);
        setTemperature((hello.main.temp - 273.15).toFixed(2))})
        },[])
     
    return (
        <div>
                <input type="text" value={cityname} name="city" onChange={(e) => {setCityname(e.target.value)
                }} />
                <button onClick={search}> SEARCH</button>
                <br/>
                {temperature}<span>&#176;</span>C
                <br/>
                <br/>
                <hr/>
                <button onClick={() => setrecentclick(true) }>Recent Searches</button>

                {recentclick?<Redirect to={{pathname:"/recent" , recent:recent} } /> : null}
                {/* {
                <h1>RECENT SEARCHES</h1>}
               {recent.map(item => <li key={item.index}>{item.name} &nbsp; {item.temp} <span>&#176;</span>C</li>)} */}
        </div>
    )
}

export default Weather
