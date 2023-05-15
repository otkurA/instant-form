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
  createTheme,
  ThemeProvider,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAppDispatch } from "../../app/hooks"
import { nanoid } from "nanoid"
import { addField, formBuilderFieldObject } from "./formBuilderSlice"
const fieldTypes = ["text", "number", "email", "select", "checkbox", "button"]
type FormBuilderInputs = {
  formField: "text" | "number" | "email" | "select" | "checkbox" | "button"
  fieldLabel: string
  fieldName: string
  fieldPlaceHolder: string
  fieldWidth: boolean
  selectOption?: string
  checkboxOption?: string
  buttonText?: string
  buttonType?: string
  buttonVariant?: string
}
const formBuilderTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#51ffc0",
    },
    secondary: {
      main: "#f4346f",
    },
  },
})
export const FormBuilder = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormBuilderInputs>()
  const [fieldSelectValue, setFieldSelectValue] = useState("")
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<FormBuilderInputs> = (
    data: FormBuilderInputs,
  ) => {
    const builderFieldObjectTemp: formBuilderFieldObject = {
      id: nanoid(),
      type: data.formField,
      label: data.fieldLabel,
      name: data.fieldName,
      placeholder: data.fieldPlaceHolder,
      fullWidth: data.fieldWidth,
      options: data.selectOption ? data.selectOption.split(",") : [],
      checkboxOptions: data.checkboxOption
        ? data.checkboxOption.split(",")
        : [],
      buttonText: data.buttonText,
      buttonType: data.buttonType,
      buttonVariant: data.buttonVariant,
    }
    for (const property in builderFieldObjectTemp) {
      if (
        builderFieldObjectTemp[property as keyof formBuilderFieldObject] ===
          "" ||
        (property === "options" &&
          builderFieldObjectTemp[property]?.length === 0) ||
        (property === "checkboxOptions" &&
          builderFieldObjectTemp[property]?.length === 0) ||
        builderFieldObjectTemp[property as keyof formBuilderFieldObject] ===
          undefined
      ) {
        delete builderFieldObjectTemp[property as keyof formBuilderFieldObject]
      }
    }
    const id = nanoid()

    dispatch(addField({ ...builderFieldObjectTemp }))
    setFieldSelectValue("")
    reset()
  }
  console.log(watch("fieldName"))
  return (
    <ThemeProvider theme={formBuilderTheme}>
      <Box
        sx={{
          width: { xs: "96vw", sm: "96vw", md: "30vw" },
          padding: "2vw",
          boxSizing: "border-box",
          height: "92vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "var(--text-color)",
            }}
          >
            Start to create a custom form
          </Typography>
          <InputLabel id="fieldSelectLabel">Field type</InputLabel>
          <Select
            {...register("formField")}
            variant="filled"
            labelId="fieldSelectLabel"
            id="fieldSelect"
            value={fieldSelectValue}
            fullWidth
            onChange={(e) => {
              setFieldSelectValue(e.target.value)
            }}
            label="Field type"
          >
            {fieldTypes.map((fieldType) => (
              <MenuItem key={fieldType} value={fieldType}>
                {fieldType.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
          {fieldSelectValue === "select" && (
            <>
              <InputLabel id="fieldSelectLabel">
                Provide Field Options
              </InputLabel>
              <TextField
                {...register("selectOption")}
                variant="filled"
                multiline
                label="Provide Options Text"
                fullWidth
                sx={{ mb: "30px" }}
                placeholder="Write a list of options(comma separated)"
              />
            </>
          )}
          {fieldSelectValue === "checkbox" && (
            <>
              <InputLabel id="fieldSelectLabel">
                Provide Checkbox Options
              </InputLabel>
              <TextField
                {...register("checkboxOption")}
                variant="filled"
                multiline
                label="Provide Checkbox Options"
                fullWidth
                sx={{ mb: "30px" }}
                placeholder="Write a list of options(comma separated)"
              />
            </>
          )}
          {fieldSelectValue === "button" && (
            <>
              <InputLabel id="fieldSelectLabel">Provide button text</InputLabel>
              <TextField
                {...register("buttonText")}
                variant="filled"
                label="Provide button text"
                fullWidth
                placeholder="Text to show on the button"
              />
              <InputLabel id="buttonTypeSelectLabel">
                Select button type
              </InputLabel>
              <Select
                {...register("buttonType")}
                variant="filled"
                labelId="buttonTypeSelectLabel"
                id="buttonTypeSelect"
                value={fieldSelectValue}
                fullWidth
                onChange={(e) => {
                  setFieldSelectValue(e.target.value)
                }}
                label="Select button type"
              >
                <>
                  <MenuItem key={"type-button"} value={"button"}>
                    Button
                  </MenuItem>
                  <MenuItem key={"type-submit"} value={"submit"}>
                    Submit
                  </MenuItem>
                  <MenuItem key={"type-reset"} value={"reset"}>
                    Reset
                  </MenuItem>
                </>
              </Select>
              <InputLabel id="buttonVariantSelectLabel">
                Select button variant
              </InputLabel>
              <Select
                {...register("buttonVariant")}
                variant="filled"
                labelId="buttonVariantSelectLabel"
                id="buttonVariantSelect"
                value={fieldSelectValue}
                fullWidth
                onChange={(e) => {
                  setFieldSelectValue(e.target.value)
                }}
                label="Select button variant"
              >
                <>
                  <MenuItem key={"type-Text"} value={"text"}>
                    Text
                  </MenuItem>
                  <MenuItem key={"type-Contained"} value={"contained"}>
                    Contained
                  </MenuItem>
                  <MenuItem key={"type-Outlined"} value={"outlined"}>
                    Outlined
                  </MenuItem>
                </>
              </Select>
            </>
          )}
          <TextField
            variant="filled"
            label="Field Label Text"
            fullWidth
            placeholder="Give a label for your field"
            {...register("fieldLabel")}
          />
          <TextField
            variant="filled"
            label="Field Name Text"
            fullWidth
            placeholder="Give a name for your field"
            {...register("fieldName")}
          />
          {fieldSelectValue !== "button" &&
            fieldSelectValue !== "checkbox" &&
            fieldSelectValue !== "select" && (
              <TextField
                variant="filled"
                label="Place Holder Text"
                fullWidth
                placeholder="Place holder text for your field"
                {...register("fieldPlaceHolder")}
              />
            )}
          <FormLabel id="widthRadio">Field Width</FormLabel>
          <RadioGroup
            {...register("fieldWidth")}
            aria-labelledby="widthRadio"
            defaultValue="fullWidth"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="true"
              control={<Radio />}
              label="Full Width"
            />
            <FormControlLabel
              value="false"
              control={<Radio />}
              label="Half Width"
            />
          </RadioGroup>
          <Button type="submit" variant="contained" sx={{ my: "10px" }}>
            Create
          </Button>
          <Button
            type="reset"
            variant="outlined"
            sx={{ my: "10px" }}
            onClick={() => {
              setFieldSelectValue("")
              reset()
            }}
          >
            Reset
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  )
}
