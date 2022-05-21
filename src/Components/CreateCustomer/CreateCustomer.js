import React from "react";

const CreateCustomer = () => {
  return (
    <div className=" mt-9 mx-2 sm:mx-5">
      <form
        action=""
        method="post"
        className="grid grid-col gap-2 sm:grid sm:grid-cols-2 sm:gap-1 md:grid md:grid-cols-3 md:gap-3"
      >
        <input type="text" placeholder="Name" className=" p-3 shadow rounded" />
        <input
          type="text"
          placeholder="Email"
          className=" p-3 shadow rounded"
        />
        <input type="text" placeholder="Age" className=" p-3 shadow rounded" />
        <input
          type="text"
          placeholder="Country"
          className=" p-3 shadow rounded"
        />
        <select className="form-select appearance-none p-3 shadow">
          <option defaultValue="Select Gender">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <div className=" p-3 shadow rounded">
          <label htmlFor="profilePic">Add Profile Picture:</label>
          <input type="file" name="profilePic" />
        </div>

        <input
          type="button"
          value="Create Customer"
          className=" font-bold p-4 shadow-lg rounded bg-slate-600 text-white hover:bg-green-600 hover:text-white cursor-pointer sm:col-span-2 md:col-span-3"
        />
      </form>
    </div>
  );
};

export default CreateCustomer;
