import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateCustomer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    setDisabled(true);
    const { name, email, age, country, gender, profilePic } = data;

    // creating FormData because we have files to send to server
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("country", country);
    formData.append("gender", gender);
    formData.append("profilePic", profilePic[0]);

    const settings = {
      method: "POST",
      body: formData,
    };

    try {
      const res = await fetch("http://localhost:4040/addCustomer", settings);
      const data = await res.json();
      if (data) {
        alert("Customer Created Successfully");
        setDisabled(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-9 mx-2">
      {/* onShubmit will go through handleSubmit & will ensure input validation */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          placeholder="Name"
          className=" p-3 shadow rounded"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className=" text-red-500">This field is required</span>
        )}

        {/* email validation with regx */}
        <input
          placeholder="Email"
          className=" p-3 shadow rounded"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className=" text-red-500">{errors.email.message}</span>
        )}

        {/* age cannot be more then 100 validation with regx */}
        <input
          type={"number"}
          placeholder="Age"
          className=" p-3 shadow rounded appearance-none"
          {...register("age", {
            required: true,
            pattern: {
              value: /^[1-9]$|^[1-9][0-9]$|^(100)$/,
              message: "Age cannot be more then 100",
            },
          })}
        />
        {errors.age && (
          <span className=" text-red-500">{errors.age.message}</span>
        )}

        <input
          placeholder="Country"
          className=" p-3 shadow rounded"
          {...register("country", { required: true })}
        />
        {errors.country && (
          <span className=" text-red-500">This field is required</span>
        )}

        {/* select gender with options && default value disabled */}
        <select
          className="form-select appearance-none p-3 shadow rounded"
          defaultValue={"selectGender"}
          {...register("gender", { required: true })}
        >
          <option value="selectGender" disabled>
            Select Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select>
        {errors.gender && (
          <span className=" text-red-500">This field is required</span>
        )}

        {/* only png && jpeg fille accepted as profile picture */}
        <input
          type={"file"}
          accept="image/png, image/jpeg"
          {...register("profilePic", { required: true })}
        />
        {errors.profilePic && (
          <span className=" text-red-500">This field is required</span>
        )}

        {/* button conditionally disabled when data sending to server */}
        <button
          type="submit"
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
