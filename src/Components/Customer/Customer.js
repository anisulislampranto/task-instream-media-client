import React from "react";

const Customer = ({ customer }) => {
  const { name, profilePic, gender, email, country, age } = customer;

  console.log(name, gender, email, country, age, profilePic);

  return (
    <div className="shadow-lg grid grid-cols-1 gap-2 mt-5 bg-gray-200 rounded overflow-hidden">
      <div className="w-full">
        <img
          className="h-48 mx-auto"
          src={`data:image/png;base64,${profilePic}`}
          alt=""
        />
      </div>
      <div className=" grid grid-cols-2 p-4">
        <h1 className="text-xl col-span-2">
          <strong> {name}</strong>
        </h1>
        <p className=" col-span-2">{email}</p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong> Age: </strong>
          {age}
        </p>
        <p className=" col-span-2">
          <strong> Country: </strong> {country}
        </p>
        <button className=" col-start-2 shadow-lg px-2 font-bold bg-yellow-700 text-white rounded hover:bg-yellow-600 mt-3">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Customer;
