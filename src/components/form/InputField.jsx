import React from "react";

function InputField({label,labelId,name,type,htmlFor,onchange,value}) {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={htmlFor}
        className="block capitalize text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={labelId}
          name={name}
          type={type}
          onChange={onchange}
          value={value}
          required
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>
    </div>
  );
}

export default InputField;
