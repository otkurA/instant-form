import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export type formBuilderFieldObject = {
  id: string
  type:
    | "text"
    | "number"
    | "email"
    | "select"
    | "textarea"
    | "button"
    | "fieldset"
    | "datalist"
  label: string
  name: string
  value: string
  options?: string[]
}
export type formBuilderState = {
  fieldObjectList: formBuilderFieldObject[]
}
const initialState: formBuilderState = { fieldObjectList: [] }

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<formBuilderFieldObject>) => {
      state.fieldObjectList.push(action.payload)
    },
    removeField: (state, action: PayloadAction<formBuilderFieldObject>) => {
      state.fieldObjectList = state.fieldObjectList.filter(
        (item) => item.id !== action.payload.id,
      )
    },
    editField: (state, action: PayloadAction<formBuilderFieldObject>) => {
      const index = state.fieldObjectList.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.fieldObjectList[index] = action.payload
    },
    moveFieldUp: (state, action: PayloadAction<formBuilderFieldObject>) => {
      const index = state.fieldObjectList.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.fieldObjectList.splice(index, 1)
      state.fieldObjectList.splice(index - 1, 1, action.payload)
    },
    moveFieldDown: (state, action: PayloadAction<formBuilderFieldObject>) => {
      const index = state.fieldObjectList.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.fieldObjectList.splice(index, 1)
      state.fieldObjectList.splice(index + 1, 0, action.payload)
    },
  },
})
export const { addField, editField, moveFieldDown, moveFieldUp, removeField } =
  formBuilderSlice.actions

export const selectFormBuilder = (state: RootState) => state.formBuilder

export default formBuilderSlice.reducer
