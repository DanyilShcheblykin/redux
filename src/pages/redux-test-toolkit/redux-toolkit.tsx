import { useDispatch, useSelector } from 'react-redux';
import { counterToolkit } from '../../redux-toolkit-store';
import './redux-toolkit.scss'

interface RootState {
    counter: number
}

//for working this compenent you habe to add store to your Provider

const ReduxToolkit = () => {

    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch()

    const addCounter = () => {
        dispatch(counterToolkit.actions.addCounter()); //without dispatch it womt work
    }
    const addSomeAmount = () => {
        dispatch(counterToolkit.actions.addSomeAmount(5));
    }
    const minusCounter = () => {
        dispatch(counterToolkit.actions.minusCounter());
    }

    return (
        <div className='buttonsBox'>
            <button onClick={addCounter}>Add</button>
            <button onClick={minusCounter}>Minus</button>
            <button onClick={addSomeAmount}>Add 5</button>
            <h1>{counter}</h1>

        </div>
    );
};

export default ReduxToolkit;