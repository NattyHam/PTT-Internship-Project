import React from 'react';
import { useFormContext } from 'react-hook-form';

function TextInput({ name, label, ...rest }) {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        {...register(name)}
        className="border p-2 rounded w-full"
        type="text"
      />
    </div>
  );
}

export default TextInput;