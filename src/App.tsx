import "./App.css"
import { FormBuilder } from "./features/formBuilder/FormBuilder"

function App() {
  return (
    <div className="App">
      <header className="appHeader">
      </header>
      <div className="pageContent">
        <FormBuilder />
      </div>
    </div>
  )
}

export default App