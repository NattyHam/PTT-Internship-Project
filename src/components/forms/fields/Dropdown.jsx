import React from 'react';
import { useFormContext } from 'react-hook-form';

function Dropdown({ name, label, options }) {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <select {...register(name)} className="border p-2 rounded w-full">
        {options.map((opt, idx) => {
        const value = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;

        return (
            <option key={idx} value={value}>
            {label}
            </option>
        );
        })}

      </select>
    </div>
  );
}

export default Dropdown;