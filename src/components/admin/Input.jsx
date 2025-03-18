"use client";
import React, { useState } from "react";

const Input = ({ id, type, label, placeholder, value, onChange, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="grid">
      <label htmlFor={id} className="text-[#1c1f2d]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`border-b-2 w-full rounded-sm text-neutral-400 transition-all duration-500 outline-none placeholder:text-[#1c1f2d] placeholder:opacity-70 px-5 py-3 bg-transparent ${
          isFocused
            ? "border-[rgba(244,_47,_84,_1)]"
            : "border-[rgba(244,_47,_84,_0.3)]"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
