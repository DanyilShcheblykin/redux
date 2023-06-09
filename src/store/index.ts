import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { githubApi } from './github/github-api'
import { gitHubReducer } from './github/github-slice'

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: gitHubReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware)
})

setupListeners(store.dispatch) //  for refetchOnFocus

export type RootState = ReturnType<typeof store.getState>