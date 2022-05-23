import React from "react";

const Customer = (props) => {
  const { customer, setShowModal, setCustomerInfo } = props;
  const { name, profilePic, gender, email, country, age } = customer;

  // onClick edit button EditCustomerModal will be open and clicked customer card data will be sent to parent component "Customers"
  const handleClick = () => {
    setShowModal(true);
    setCustomerInfo(customer);
  };

  return (
    <div className="shadow-lg grid grid-cols-1 gap-2 mt-5 bg-gray-200 rounded overflow-hidden">
      <div className="w-full">
        <img
          className="h-48 mx-auto"
          // syntext for showing base64 file as an image
          src={`data:image/png;base64,${profilePic}`}
          alt="profilePic"
        />
      </div>
      <div className=" grid grid-cols-2 p-4">
        <h1 className="text-xl col-span-2 capitalize">
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
        <p className=" col-span-2 capitalize">
          <strong> Country: </strong> {country}
        </p>
        <button
          className=" col-start-2 shadow-lg px-2 font-bold bg-yellow-700 text-white rounded hover:bg-yellow-600 mt-3 cursor-pointer"
          onClick={handleClick}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Customer;
