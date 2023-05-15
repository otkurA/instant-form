import { FormBuilder } from "./features/formBuilder/FormBuilder"
import { Container, Typography, Box } from "@mui/material"
import IFLogo from "./ifLogo.svg"
import FormViewer from "./features/formViewer/FormViewer"

function App() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "var(--background-color)",
      }}
    >
      <Box
        sx={{
          height: "8vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "4px",
          gap: "12px",
          borderBottom: "2px solid var(--primary-color)",
        }}
      >
        <img src={IFLogo} alt="Instant Form Logo" style={{ height: "5vh" }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            fontWeight: 700,
            color: "var(--primary-color)",
            textDecoration: "none",
          }}
        >
          Instant Form
        </Typography>
      </Box>
      <Box
        sx={{
          height: "92vh",
          display: "flex",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FormBuilder />
        <FormViewer />
      </Box>
    </Container>
  )
}

export default App
