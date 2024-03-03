import React, { useState } from "react";
import Employee from "./Employee";

const employees = [
  {
    id: 1,
    name: "Ioan Deacu",
    position: "Software Engineer",
    imageUrl:
      "https://www.sulyokimaging.ro/wp-content/uploads/2022/01/sedinta-foto-business-portret.jpg",
    officeNumber: "123-456-7890",
    mobileNumber: "987-654-3210",
    smsNumber: "555-555-5555",
    email: "ioan.deacu@example.com",
  },
  {
    id: 2,
    name: "Alina Sarbu",
    position: "Product Manager",
    imageUrl:
      "https://www.artisticfoto.ro/wp-content/uploads/2021/10/poze-profesionale-studio-5-683x1024.jpg",
    officeNumber: "123-456-7891",
    mobileNumber: "987-654-3211",
    smsNumber: "555-555-5556",
    email: "alina.sarbu@example.com",
  },
  {
    id: 3,
    name: "Bogdan Ionescu",
    position: "Marketing Specialist",
    imageUrl:
      "https://www.alindobrin.ro/wp-content/uploads/2020/03/Portret_corporate_Razvan_Pascu_AA8A2834.jpg",
    officeNumber: "123-456-7892",
    mobileNumber: "987-654-3212",
    smsNumber: "555-555-5557",
    email: "bogdan.ionescu@example.com",
  },
  {
    id: 4,
    name: "Emilia Bratu",
    position: "HR Manager",
    imageUrl:
      "https://www.sulyokimaging.ro/wp-content/uploads/2023/04/sedinta-foto-business-portret.jpg",
    officeNumber: "123-456-7893",
    mobileNumber: "987-654-3213",
    smsNumber: "555-555-5558",
    email: "emilia.bratu@example.com",
  },
  {
    id: 5,
    name: "David Leonard",
    position: "Graphic Designer",
    imageUrl:
      "https://www.sulyokimaging.ro/wp-content/uploads/2021/08/studio-foto-profesional-portret-cv-2.jpg",
    officeNumber: "123-456-7894",
    mobileNumber: "987-654-3214",
    smsNumber: "555-555-5559",
    email: "david.leonard@example.com",
  },
  {
    id: 6,
    name: "Sara Lupescu",
    position: "Accountant",
    imageUrl:
      "https://www.cristalstudio.ro/wp-content/uploads/2022/02/AndreeaMotrosi_0240-687x1030.jpg",
    officeNumber: "123-456-7895",
    mobileNumber: "987-654-3215",
    smsNumber: "555-555-5560",
    email: "sara.lupescu@example.com",
  },
];

function EmployeeList({ searchTerm }) {
  const [showDetails, setShowDetails] = useState(null);

  const toggleDetails = (employeeId) => {
    if (showDetails === employeeId) {
      setShowDetails(null);
    } else {
      setShowDetails(employeeId);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      {filteredEmployees.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          showDetails={showDetails}
          toggleDetails={toggleDetails}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
