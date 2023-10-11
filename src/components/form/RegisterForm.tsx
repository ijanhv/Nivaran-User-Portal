"use client";
import React, {  } from "react";

const RegisterForm = () => {

  return (
    <form className="w-full pt-7">
      <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input type="text" id="name" className="input-field" />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
          >
            Email*
          </label>
          <input type="email" id="email" className="input-field" />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900"
          >
            Address*
          </label>
          <input type="text" id="address" className="input-field" />
        </div>

        {/* Wallet Address */}
        <div>
          <label
            htmlFor="wallet-address"
            className="block text-sm font-medium text-gray-900"
          >
            Wallet Address
          </label>
          <input type="text" id="wallet-address" className="input-field" />
        </div>

        {/* Age */}
        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-900"
          >
            Age
          </label>
          <input type="number" id="age" className="input-field" />
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-900"
          >
            Date of Birth
          </label>
          <div className="mt-1 relative">
            <input type="date" id="dob" className="block w-full input-field" />
          </div>
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-900"
          >
            Mobile Number*
          </label>
          <input type="tel" id="mobile" className="input-field" />
        </div>

        {/* Checkbox */}
        <div className="flex items-start mt-4">
          <input

            type="checkbox"
            className="h-4 w-4 cursor-pointer items-start text-indigo-600 border-gray-300 rounded"
          />
          <label
            htmlFor="terms-and-conditions"
            className="ml-3 block text-sm font-medium text-gray-900"
          >
            I agree to the{" "}
            <span className="text-indigo-600 hover:text-indigo-500">
              Terms and Conditions
            </span> &

           herefy declare that the information provided above is true to the
            best of my knowledge and belief.

          </label>
        </div>
      </div>

      <div className="mt-10 md:flex-row text-center justify-center items-center space-x-5">
        <button type="submit" className="w-40 submit-btn">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
