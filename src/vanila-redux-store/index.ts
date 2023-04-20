import { } from 'react'
import { configureStore} from '@reduxjs/toolkit'

interface CounterAction {
    type: string
}
interface ReduxState {
    counter: number
}

const initialState = {
    counter: 0
}

const counterAction = (state: ReduxState = initialState, action: CounterAction) => {
    switch (action.type) {
        case "add": {
            return { ...state, counter: state.counter + 1 }
        }
        case "minus": {
            return { ...state, counter: state.counter - 1 }
        }
        default:
            return state;
    }
}


export const reduxVanilaStore = configureStore({
    reducer: counterAction
})

