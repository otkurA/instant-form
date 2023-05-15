import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  TextField,
  Select,
  Button,
  InputLabel,
} from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { resetFields, selectFormBuilder } from "../formBuilder/formBuilderSlice"
import { useAppDispatch } from "../../app/hooks"

const fieldTypeToComponentMap = {
  text: <TextField variant="filled" type="text" fullWidth />,
  number: <TextField variant="filled" type="number" fullWidth />,
  email: <TextField variant="filled" type="email" fullWidth />,
  select: <Select variant="filled" fullWidth />,
  checkbox: <Checkbox defaultChecked />,
  button: <Button />,
}

const FormViewer = () => {
  const formBuilderState = useSelector(selectFormBuilder)
  const dispatch = useAppDispatch()
  return (
    <Box
      sx={{
        width: { xs: "96vw", sm: "96vw", md: "70vw" },
        padding: "2vw 4vw",
        boxSizing: "border-box",
        height: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "var(--secondary-background-color)",
        gap: "20px",
        color: "var(--background-color)",
      }}
    >
      <Button
        onClick={() => {
          dispatch(resetFields())
        }}
      >
        Reset
      </Button>
      <FormGroup
        sx={{
          width: { xs: "96vw", sm: "96vw", md: "70vw" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "18px",
        }}
      >
        <FormLabel
          sx={{
            textAlign: "center",
          }}
        >
          My Form
        </FormLabel>
        {formBuilderState.fieldObjectList.length !== 0 &&
          formBuilderState.fieldObjectList.map((item) => {
            return (
              <div key={item.id}>
                <InputLabel id="fieldSelectLabel">{item.label}</InputLabel>
                {fieldTypeToComponentMap[item.type]}
              </div>
            )
          })}
      </FormGroup>
    </Box>
  )
}

export default FormViewer
