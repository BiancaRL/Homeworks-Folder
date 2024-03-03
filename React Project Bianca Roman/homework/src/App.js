import React, { useState } from "react";
import "./App.css";
import EmployeeList from "./EmployeeList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Employee Directory</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </header>
      <div className="employee-list-container">
        <EmployeeList searchTerm={searchTerm} />
        <div className="employee-details-container">
          {/* Frame-ul cu detalii despre angajat va fi afișat aici */}
        </div>
      </div>
    </div>
  );
}

export default App;
