const TextInput = ({ label, name, register, error }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      {...register(name)}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default TextInput;
