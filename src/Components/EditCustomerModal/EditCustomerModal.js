import React from "react";
import EditCustomerInfo from "../EditCustomerInfo/EditCustomerInfo";

const EditCustomerModal = (props) => {
  const { setShowModal, customerInfo } = props;
  const { name, gender, email, country, age, _id } = customerInfo;

  return (
    <div>
      <div className="justify-center items-end sm:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none ">
        <div className="relative my-6 mx-auto sm:w-96 w-11/12">
          <div className="flex justify-end">
            <span
              className="cursor-pointer bg-red-600 text-white z-50 w-5 flex justify-center rounded-full hover:bg-red-500"
              onClick={() => setShowModal(false)}
            >
              ✖
            </span>
          </div>

          {/* Modal Body */}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full backdrop-blur-xl bg-black/30 outline-none focus:outline-none overflow-hidden p-5">
            <h1 className="py-1 text-2xl">
              <strong>Edit/Update Customer Info</strong>
            </h1>
            <EditCustomerInfo
              _id={_id}
              name={name}
              age={age}
              gender={gender}
              email={email}
              country={country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomerModal;
