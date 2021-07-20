import React from 'react'

function Recent(recent) {
    const rec =recent.history.location.recent;
    return (
        <div>
             {
                <h1>RECENT SEARCHES</h1>}
               {rec.map(item => <li key={item.name}>{item.name} &nbsp; {item.temp} <span>&#176;</span>C</li>)}

        </div>
    )
}

export default Recent
