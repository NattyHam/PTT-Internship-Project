const CheckboxGroup = ({ label, name, options, register, error }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <label key={opt} className="inline-flex items-center">
          <input
            type="checkbox"
            value={opt}
            {...register(name)}
            className="mr-2"
          />
          {opt}
        </label>
      ))}
    </div>
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default CheckboxGroup;
