import {
  CalendarIcon,
  PhotoIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const ComplaintForm = () => {
  return (
  
    <form className="w-full pt-7">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name*
          </label>
          <input type="text" id="name" className="input-field" />
        </div>

        <div>
          <label
            htmlFor="father-name"
            className="block text-sm font-medium text-gray-900"
          >
            Father's/Husband's Name*
          </label>
          <input type="text" id="father-name" className="input-field" />
        </div>

        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-gray-900"
          >
            Mobile Number*
          </label>
          <input type="tel" id="mobile" className="input-field" />
        </div>

        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-900"
          >
            Date of Birth
          </label>
          <div className="mt-1 relative ">
            <input
              type="text"
              id="dob"
              className="block w-full pr-10 input-field"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <CalendarIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="locality"
            className="block text-sm font-medium text-gray-900"
          >
            Village-Locality Name*
          </label>
          <input type="text" id="locality" className="input-field" />
        </div>

        <div>
          <label
            htmlFor="address1"
            className="block text-sm font-medium text-gray-900"
          >
            Address*
          </label>
          <input type="text" id="address1" className="input-field" />
        </div>

        {/* Pincode */}
        <div>
          <label
            htmlFor="pincode"
            className="block text-sm font-medium text-gray-900"
          >
            Pincode*
          </label>
          <input type="text" id="pincode" className="input-field" />
        </div>

        {/* Grievance Title */}
        <div>
          <label
            htmlFor="grievance-title"
            className="block text-sm font-medium text-gray-900"
          >
            Grievance Title*
          </label>
          <select id="grievance-title" className="input-field">
            <option value="Theft">Theft / चोरी</option>
            <option value="Theft">Violence / हिंसा</option>
            <option value="Theft">Cyber Crime / साइबर क्राइम</option>
            <option value="Theft">Drug / नशीली पदार्थ</option>
          </select>
        </div>

        {/* Grievance Description */}
        <div className="md:col-span-2">
          <label
            htmlFor="grievance-description"
            className="block text-sm font-medium text-gray-900"
          >
            Grievance Description*
          </label>
          <textarea
            id="grievance-description"
            className="input-field"
          ></textarea>
        </div>


        <div className="md:col-span-2">

          <label className="block text-sm font-medium text-gray-900">
            Submit your application PDF
          </label>
          <div className="mt-1 flex items-center space-x-3">
            <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <PhotoIcon className="h-full w-full text-gray-300" />
            </span>
            <label
              htmlFor="pdf-upload"
              className="relative cursor-pointer rounded-md  font-semibold text-black focus-within:ring-offset-2 "
            >
              <span>Upload a file</span>
              <input
                id="pdf-upload"
                name="pdf-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <p className="text-xs leading-5 text-gray-600">PDF up to 10MB</p>
            </div>
      
          </div>
        </div>


        <div className="mt-5 md:flex-row items-center space-x-5">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900 md:order-2"
        >
          Cancel
        </button>
      </div>
        


    
    </form>
  );
};

export default ComplaintForm;
