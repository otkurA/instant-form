import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import formBuilderReducer from "../features/formBuilder/formBuilderSlice"

export const store = configureStore({
  reducer: {
    formBuilder: formBuilderReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
