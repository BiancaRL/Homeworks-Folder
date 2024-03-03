import React from "react";

function Employee({ employee, showDetails, toggleDetails }) {
  return (
    <div className="employee" onClick={() => toggleDetails(employee.id)}>
      <img src={employee.imageUrl} alt={employee.name} />
      <div>
        <h2>{employee.name}</h2>
        <p>{employee.position}</p>
      </div>
      {showDetails && showDetails === employee.id && (
        <div className="employee-details">
          <h2 className="bold">Employee Details</h2>
          <img src={employee.imageUrl} alt={employee.name} />
          <p>
            <strong>Name:</strong> <br />
            {employee.name}
          </p>
          <p>
            <strong>Position:</strong> <br />
            {employee.position}
          </p>
          <p>
            <strong>Call Office:</strong> <br />
            {employee.officeNumber}
          </p>
          <p>
            <strong>Call Mobile:</strong> <br />
            {employee.mobileNumber}
          </p>
          <p>
            <strong>SMS:</strong> <br />
            {employee.smsNumber}
          </p>
          <p>
            <strong>Email:</strong> <br />
            {employee.email}
          </p>
        </div>
      )}
    </div>
  );
}

export default Employee;
