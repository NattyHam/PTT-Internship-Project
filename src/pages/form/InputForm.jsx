import { useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import FormRenderer from "../../components/form/FormRenderer";

const loadFormConfig = async (formId) => {
  return await import(`../../configs/formConfigs/${formId}.js`);
};

const InputForm = () => {
  const { routeId, formId } = useParams(); 
  const navigate = useNavigate();
  const [config, setConfig] = useState(null);

  useEffect(() => {
    loadFormConfig(formId)
      .then((mod) => setConfig(mod.default))
      .catch(() => setConfig(null));
  }, [formId]);

  const schema = config?.schema || (config
    ? z.object(
        Object.fromEntries(
          config.fields.map((field) => {
            if (field.layout) return null; // Skip layout containers
            if (field.section) return null; // Skip section headers
            if (field.type === "array") {
              return [
                field.name,
                field.required
                  ? z.array(z.string().min(1, "Item cannot be empty")).min(1, `${field.label} requires at least one item`)
                  : z.array(z.string().min(1, "Item cannot be empty")).optional()
              ];
            }
            return [
              field.name,
              field.required
                ? z.string().min(1, `${field.label} is required`)
                : z.string().optional(),
            ];
          }).filter(Boolean)
        )
      )
    : null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: schema ? zodResolver(schema) : undefined,
  });

  const onSubmit = (data) => {
    console.log("Submitted:", { routeId, formId, ...data });
    alert("Form submitted! (Check console)");
  };

  if (!config)
    return <div className="pt-20 pl-64 p-6 text-gray-500">Loading form...</div>;

  const renderField = (field, index) => {
    // Handle section headers
    if (field.section) {
      return (
        <div key={`section-${index}`} className="mt-6 mb-4">
          <h3 className="text-lg font-semibold text-primary-dark border-b border-gray-300 pb-2">
            {field.section}
          </h3>
        </div>
      );
    }

    // Handle layout containers
    if (field.layout) {
      return (
        <div key={`layout-${index}`} className={`grid ${field.layout === "half" ? "grid-cols-2 gap-4" : "grid-cols-1"} mb-4`}>
          {field.fields.map((nestedField, nestedIndex) => (
            <div key={`${index}-${nestedIndex}`}>
              {renderField(nestedField, `${index}-${nestedIndex}`)}
            </div>
          ))}
        </div>
      );
    }

    // Handle regular fields
    if (field.type === "text") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <input
            type="text"
            {...register(field.name)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "date") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <input
            type="date"
            {...register(field.name)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "time") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <input
            type="time"
            {...register(field.name)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "dropdown") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <select
            {...register(field.name)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Select --</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "radio") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          <div className="space-y-2">
            {field.options.map((opt) => (
              <label key={opt} className="flex items-center">
                <input
                  type="radio"
                  value={opt}
                  {...register(field.name)}
                  className="mr-2"
                  defaultChecked={field.default === opt}
                />
                {opt}
              </label>
            ))}
          </div>
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "checkbox") {
      return (
        <div key={field.name}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>
          {field.options.map((opt) => (
            <label key={opt} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={opt}
                {...register(field.name)}
                className="mr-1"
              />
              {opt}
            </label>
          ))}
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name].message}</p>
          )}
        </div>
      );
    }

    if (field.type === "array") {
      return (
        <ComplexArrayField
          key={field.name}
          field={field}
          control={control}
          register={register}
          errors={errors}
        />
      );
    }

    return null;
  };

  return (
    <div className="pt-20 pl-64 pr-6 pb-6 max-w-4xl mx-auto space-y-6">
      {/* Back Button + Title */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => navigate(`/form/list?route=${routeId}`)}
          className="text-primary hover:text-blue-600"
        >
          <ArrowLeft size={20} />
        </button>
        <h2 className="text-2xl font-bold text-primary-dark">{config.title}</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {config.fields.map((field, index) => renderField(field, index))}

        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Complex Array Field Component for nested fields
const ComplexArrayField = ({ field, control, register, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: field.name,
  });

  const getDefaultValues = () => {
    const defaults = {};
    field.fields.forEach(f => {
      if (f.type === "radio" && f.default) {
        defaults[f.name] = f.default;
      } else {
        defaults[f.name] = "";
      }
    });
    return defaults;
  };

  return (
    <div>
      <label className="block mb-2 font-semibold">{field.label}</label>
      <div className="space-y-4 border border-gray-200 rounded-lg p-4">
        {fields.map((item, index) => (
          <div key={item.id} className="border border-gray-300 rounded p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-gray-700">Entry {index + 1}</h4>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {field.fields.map((nestedField) => (
                <div key={nestedField.name}>
                  {renderNestedField(nestedField, `${field.name}.${index}`, register, errors)}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append(getDefaultValues())}
          className="flex items-center gap-1 text-primary hover:text-blue-600 text-sm"
        >
          <Plus size={16} />
          Add {field.label}
        </button>
      </div>
      {errors[field.name] && (
        <p className="text-red-500 text-sm">{errors[field.name].message}</p>
      )}
    </div>
  );
};

const renderNestedField = (field, fieldPath, register, errors) => {
  const fieldName = `${fieldPath}.${field.name}`;
  
  if (field.type === "text") {
    return (
      <div>
        <label className="block mb-1 text-sm font-medium">{field.label}</label>
        <input
          type="text"
          {...register(fieldName)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors[fieldName] && (
          <p className="text-red-500 text-sm">{errors[fieldName].message}</p>
        )}
      </div>
    );
  }

  if (field.type === "time") {
    return (
      <div>
        <label className="block mb-1 text-sm font-medium">{field.label}</label>
        <input
          type="time"
          {...register(fieldName)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {errors[fieldName] && (
          <p className="text-red-500 text-sm">{errors[fieldName].message}</p>
        )}
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div>
        <label className="block mb-1 text-sm font-medium">{field.label}</label>
        <div className="space-y-1">
          {field.options.map((opt) => (
            <label key={opt} className="flex items-center">
              <input
                type="radio"
                value={opt}
                {...register(fieldName)}
                className="mr-2"
                defaultChecked={field.default === opt}
              />
              <span className="text-sm">{opt}</span>
            </label>
          ))}
        </div>
        {errors[fieldName] && (
          <p className="text-red-500 text-sm">{errors[fieldName].message}</p>
        )}
      </div>
    );
  }

  return null;
};

export default InputForm;
