import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EditCustomerInfo = (props) => {
  const { name, gender, email, country, age, _id } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    setDisabled(true);
    const {
      updatedName,
      updatedEmail,
      updatedAge,
      updatedCountry,
      updatedGender,
      updatedProfilePic,
    } = data;

    const formData = new FormData();
    formData.append("name", updatedName);
    formData.append("email", updatedEmail);
    formData.append("age", updatedAge);
    formData.append("country", updatedCountry);
    formData.append("gender", updatedGender);
    formData.append("profilePic", updatedProfilePic[0]);

    const settings = {
      method: "PUT",
      body: formData,
    };

    try {
      const url = `http://localhost:4040/customers/update/${_id}`;
      const res = await fetch(url, settings);
      const data = await res.json();
      if (data) {
        setDisabled(false);
        alert("edited");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          placeholder="Name"
          className=" p-3 shadow rounded"
          defaultValue={name}
          {...register("updatedName", { required: true })}
        />
        {errors.updatedName && (
          <span className=" text-red-700">This field is required</span>
        )}

        <input
          placeholder="Email"
          className=" p-3 shadow rounded"
          defaultValue={email}
          {...register("updatedEmail", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.updatedEmail && (
          <span className=" text-red-700">{errors.updatedEmail.message}</span>
        )}

        <input
          type={"number"}
          placeholder="Age"
          className=" p-3 shadow rounded appearance-none"
          defaultValue={age}
          {...register("updatedAge", {
            required: true,
            pattern: {
              value: /^[1-9]$|^[1-9][0-9]$|^(100)$/,
              message: "age cannot be more then 100",
            },
          })}
        />
        {errors.updatedAge && (
          <span className=" text-red-700">{errors.updatedAge.message}</span>
        )}

        <input
          placeholder="Country"
          className=" p-3 shadow rounded"
          defaultValue={country}
          {...register("updatedCountry", { required: true })}
        />
        {errors.updatedCountry && (
          <span className=" text-red-700">This field is required</span>
        )}

        <select
          className="form-select appearance-none p-3 shadow rounded"
          defaultValue={gender}
          {...register("updatedGender", { required: true })}
        >
          <option value="Select Gender" disabled>
            Select Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.updatedGender && (
          <span className=" text-red-700">This field is required</span>
        )}

        <input
          type={"file"}
          {...register("updatedProfilePic", { required: true })}
        />
        {errors.updatedProfilePic && (
          <span className=" text-red-700">This field is required</span>
        )}

        <button
          type="submit"
          className=" font-bold p-4 shadow-lg rounded bg-slate-600 text-white hover:bg-green-600 hover:text-white cursor-pointer sm:col-span-2 md:col-span-3 disabled:bg-slate-400 disabled:cursor-wait"
          disabled={disabled}
        >
          {disabled ? "Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditCustomerInfo;
