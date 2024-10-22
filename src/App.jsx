import "./App.css";
import { Button } from "./components/Button";
import { AlertBox, alerts } from "./components/Alert";

function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          <Button type="primary" />
          <Button />
        </div>
        <hr />
        <div className="alert-components-section">
          {/* Render ตัว Alert 4 แบบ */}
          {alerts.map((alert, index) => (
            <AlertBox
              key={index}
              type={alert.type}
              message={alert.message}
              bgColor={alert.bgColor}
              icon={alert.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
