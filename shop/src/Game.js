import React from 'react'
import ScriptTag from 'react-script-tag';

function GamePong() {
    console.log(process.env.REACT_APP_TEST_DATA);
    return (
        <div>
            <canvas></canvas>
            <ScriptTag  type="text/javascript" src={process.env.PUBLIC_URL + "varb.js"}/>
            <ScriptTag type="text/javascript" src={process.env.PUBLIC_URL + "script.js"}/>

            
        </div>
    )
}
export default GamePong
