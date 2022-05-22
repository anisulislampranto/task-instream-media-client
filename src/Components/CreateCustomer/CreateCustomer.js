import React, { useState } from "react";

const CreateCustomer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

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
        alert("Customer Created");
        console.log("added");
        setDisabled(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-9 mx-2">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className=" p-3 shadow rounded"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          className=" p-3 shadow rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          className=" p-3 shadow rounded appearance-none"
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          className=" p-3 shadow rounded"
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <select
          className="form-select appearance-none p-3 shadow"
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option defaultValue="Select Gender" disabled selected>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <div className=" p-3 shadow rounded overflow-hidden">
          <label htmlFor="profilePic">Add Profile Picture:</label>
          <input
            type="file"
            name="profilePic"
            accept="image/png, image/jpeg"
            onChange={(e) => setProfilePic(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          value="Create Customer"
          className=" font-bold p-4 shadow-lg rounded bg-slate-600 text-white hover:bg-green-600 hover:text-white cursor-pointer sm:col-span-2 md:col-span-3 disabled:bg-slate-400 disabled:cursor-wait"
          disabled={disabled}
        >
          {disabled ? "Creating Customer" : "Create Customer"}
        </button>
      </form>
    </div>
  );
};

export default CreateCustomer;
