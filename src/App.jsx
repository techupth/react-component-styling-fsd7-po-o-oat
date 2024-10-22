import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";
<script src="https://unpkg.com/feather-icons"></script>;

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="Error" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" />
        <Alert type="warning" />
        <Alert type="info" />
        <Alert type="success" />
      </div>
    </div>
  );
}

export default App;
