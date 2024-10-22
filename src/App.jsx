import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="Primary" />
        <Button type="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert alertType="success" />
        <Alert alertType="info" />
        <Alert alertType="warning" />
        <Alert alertType="error" />
        <Alert alertType="asdasd" />
      </div>
    </div>
  );
}

export default App;
