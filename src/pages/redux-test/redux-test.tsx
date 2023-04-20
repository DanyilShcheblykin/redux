import { useState } from 'react';
import { reduxVanilaStore } from '../../vanila-redux-store';
import './redux-test.scss'

const ReduxTest = () => {

    const [counter, setCounter] = useState(reduxVanilaStore.getState().counter)

    const addCounter = () => {
        reduxVanilaStore.dispatch({ type: "add" })
        setCounter(reduxVanilaStore.getState().counter)
    }

    const minusCounter = () => {
        reduxVanilaStore.dispatch({ type: "minus" })
        setCounter(reduxVanilaStore.getState().counter)
    }

    return (
        <div className='buttonsBox'>
            <button onClick={addCounter}>Add</button>
            <button onClick={minusCounter}>Minus</button>
            <h1>{counter}</h1>

        </div>
    );
};

export default ReduxTest;