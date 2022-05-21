import React, { useState } from "react";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("country", country);
    formData.append("gender", gender);
    formData.append("profilePic", profilePic);

    const settings = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch("http://localhost:4040/addCustomer", settings);
      const data = await res.json();
      if (data) {
        alert("Customer Added Succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-9 mx-2 sm:mx-5">
      <form
        action=""
        method="post"
        className="grid grid-col gap-2 sm:grid sm:grid-cols-2 sm:gap-1 md:grid md:grid-cols-3 md:gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Name"
          className=" p-3 shadow rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className=" p-3 shadow rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className=" p-3 shadow rounded appearance-none"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          className=" p-3 shadow rounded"
          onChange={(e) => setCountry(e.target.value)}
        />
        <select
          className="form-select appearance-none p-3 shadow"
          onChange={(e) => setGender(e.target.value)}
        >
          <option defaultValue="Select Gender">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <div className=" p-3 shadow rounded">
          <label htmlFor="profilePic">Add Profile Picture:</label>
          <input
            type="file"
            name="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </div>

        <button
          type="submit"
          value="Create Customer"
          className=" font-bold p-4 shadow-lg rounded bg-slate-600 text-white hover:bg-green-600 hover:text-white cursor-pointer sm:col-span-2 md:col-span-3"
        >
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default CreateCustomer;
