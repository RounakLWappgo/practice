import React, {useContext} from 'react'
import {countcontext} from './App'


function CompD() {
    const countContext = useContext(countcontext)
    return (
        <div>
            CompD
            <button onClick={() => countContext.dispatch('increment')}>Inc</button>
            <button onClick={() => countContext.dispatch('decrement')}>Dec</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CompD
