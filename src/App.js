import { Routes, Route, Navigate } from "react-router-dom";
import EmployeeForm from "./Pages/form";
import Dashboard from "./Pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/employee-form/update" element={<EmployeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
