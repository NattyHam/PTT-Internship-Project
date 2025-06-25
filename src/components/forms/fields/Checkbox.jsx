import React from 'react';
import { useFormContext } from 'react-hook-form';

function Checkbox({ name, label }) {
  const { register } = useFormContext();

  return (
    <div className="mb-4">
      <label className="flex items-center space-x-2">
        <input type="checkbox" {...register(name)} className="form-checkbox" />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox; 