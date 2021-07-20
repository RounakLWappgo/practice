import React, {useContext} from 'react'
import {countcontext} from './App'
import CompD from './CompD'


function CompC() {
    const countContext = useContext(countcontext)
    return (
        <div>
            CompC
            <button onClick={() => countContext.dispatch('increment')}>Inc</button>
            <button onClick={() => countContext.dispatch('decrement')}>Dec</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
            <CompD/>
        </div>
    )
}

export default CompC
