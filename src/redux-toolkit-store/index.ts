import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

export const counterToolkit = createSlice({ //generate reducers and actions .....
    name: "counter",
    initialState,
    reducers: {
        addCounter: (state) => {
            return { ...state, counter: state.counter + 1 }
        },

        minusCounter: (state) => {
            return { ...state, counter: state.counter - 1 }
        },
        addSomeAmount(state, action: { payload: number }) {
            return { ...state, counter: state.counter + action.payload }
        }
    }
})

const { reducer, actions } = counterToolkit //reducer is a pure function that receives the current state of the application and an action object as arguments, and returns a new state object

const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
    console.log(`storeAPI: ${storeAPI}, next: ${next} action pyload: ${action.payload} `);
    action.payload = 10
    return next(action);
};

export const reduxToolkitStore = configureStore({
    reducer: counterToolkit.reducer,
    middleware: [loggerMiddleware]
})

