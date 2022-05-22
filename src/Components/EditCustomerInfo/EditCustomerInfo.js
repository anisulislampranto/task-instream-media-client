import React, { useState } from "react";

const EditCustomerInfo = (props) => {
  const { name, gender, email, country, age, _id } = props;

  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedAge, setUpdatedAge] = useState("");
  const [updatedCountry, setUpdatedCountry] = useState("");
  const [updatedGender, setUpdatedGender] = useState("");
  const [updatedProfilePic, setUpdatedProfilePic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      updatedName &&
      updatedEmail &&
      updatedAge &&
      updatedCountry &&
      updatedGender
    ) {
      const formData = new FormData();
      formData.append("name", updatedName);
      formData.append("email", updatedEmail);
      formData.append("age", updatedAge);
      formData.append("country", updatedCountry);
      formData.append("gender", updatedGender);
      formData.append("profilePic", updatedProfilePic);

      const settings = {
        method: "PUT",
        body: formData,
      };

      try {
        const url = `http://localhost:4040/customers/update/${_id}`;
        const res = await fetch(url, settings);
        const data = await res.json();
        if (data) {
          alert("updated customer info");
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return alert("Please enter all input Value");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          className="rounded p-2"
          required
          onChange={(e) => setUpdatedName(e.target.value)}
          defaultValue={name}
        />
        <input
          type="text"
          placeholder="Email"
          className="rounded p-2"
          required
          onChange={(e) => setUpdatedEmail(e.target.value)}
          defaultValue={email}
        />
        <select
          className="form-select appearance-none p-3 shadow"
          required
          onChange={(e) => setUpdatedGender(e.target.value)}
          defaultValue={gender}
        >
          <option defaultValue="Select Gender" disabled>
            Select Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>

        <input
          type="number"
          placeholder="age"
          className="rounded p-2"
          required
          onChange={(e) => setUpdatedAge(e.target.value)}
          defaultValue={age}
        />
        <input
          type="text"
          placeholder="country"
          className="rounded p-2"
          required
          onChange={(e) => setUpdatedCountry(e.target.value)}
          defaultValue={country}
        />
        <div>
          <label htmlFor="profilePic">Add Profile Picture:</label>
          <input
            type="file"
            name="profilePic"
            accept="image/png, image/jpeg"
            className="w-60"
            required
            onChange={(e) => setUpdatedProfilePic(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className=" bg-green-700 p-3 rounded font-bold text-white hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCustomerInfo;
