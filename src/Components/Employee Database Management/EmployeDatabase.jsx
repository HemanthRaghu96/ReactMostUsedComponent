import React, { useState } from "react";
import { employeeData as initialEmployeeData } from "./employeeData";

const EmployeeDatabase = () => {
  const [employees, setEmployees] = useState(initialEmployeeData);
  const [singleData, setSingleData] = useState(initialEmployeeData[0]);
  const [model, setModel] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [DOB, setDOB] = useState("");
  const handleSingleDetails = (id) => {
    const selectedEmployee = employees.find((employee) => employee.id === id);
    setSingleData(selectedEmployee);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((data) => data.id !== id);
    setEmployees(updatedEmployees);
    if (singleData.id === id) {
      setSingleData(updatedEmployees[0] || {});
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, age, email, mobile, DOB };
    setEmployees([...employees, newData]);
    setModel(false);
  };

  return (
    <div className="relative">
      {/* Employee List */}
      <div className="flex justify-between mx-20 mt-10">
        <h1 className="font-bold text-4xl">Employee Database Management</h1>

        <button
          className="border-[1px] rounded-md px-2 bg-gray-500 text-white"
          onClick={() => setModel(true)}
        >
          Add employee
        </button>
      </div>
      {/* Employee Detailes */}
      <div className="flex w-[1000px] mx-auto mt-10">
        <div className="mr-32">
          <h1 className="font-bold text-xl">Employee List</h1>
          <div>
            {employees.map((data) => (
              <div className="flex justify-between" key={data.id}>
                <button
                  className="border-[1px] rounded-md px-2 bg-gray-500 text-white mt-2"
                  onClick={() => handleSingleDetails(data.id)}
                >
                  {data.name}
                </button>
                <button
                  className="border-[1px] rounded-md px-2 bg-red-500 text-white mt-2"
                  onClick={() => handleDelete(data.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl">Employee Details</h1>
          <div>
            {singleData ? (
              <>
                <h1 className="font-bold text-xl">
                  {singleData.name} ({singleData.age})
                </h1>
                <h1>{singleData.email}</h1>
                <h1>{singleData.mobile}</h1>
                <h1>{singleData.DOB}</h1>
              </>
            ) : (
              <h1>No employee selected</h1>
            )}
          </div>
        </div>
      </div>
      {/* Add new Employee */}
      {model ? (
        <div className="m-4 w-[300px] absolute top-[200px] right-[700px] z-20">
          <h1 className="">Add new Employee</h1>
          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Enter Name"
              className="border-[1px] p-1 mt-2"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="border-[1px] p-1 mt-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="border-[1px] p-1 mt-2"
              onChange={(e) => setMobile(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Age"
              className="border-[1px] p-1 mt-2"
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              type="date"
              className="border-[1px] p-1 mt-2"
              onChange={(e) => setDOB(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EmployeeDatabase;
