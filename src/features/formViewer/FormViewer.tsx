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
} from "@mui/material"

const FormViewer = () => {
  return (
    <Box
      sx={{
        width: { xs: "96vw", sm: "96vw", md: "70vw" },
        padding: "2vw 4vw",
        boxSizing: "border-box",
        height: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--secondary-background-color)",
        color: "var(--background-color)",
      }}
    >
      <FormGroup
        sx={{
          width: { xs: "96vw", sm: "96vw", md: "70vw" },
          gap: "18px",
        }}
      >
        <FormLabel>Test label</FormLabel>
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          autoComplete="email"
          placeholder="Enter a valid email address"
        />
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          autoComplete="email"
          placeholder="Enter a valid email address"
        />
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          autoComplete="email"
          placeholder="Enter a valid email address"
        />
        <TextField
          variant="filled"
          label="Email"
          fullWidth
          autoComplete="email"
          placeholder="Enter a valid email address"
        />
      </FormGroup>
    </Box>
  )
}

export default FormViewer
