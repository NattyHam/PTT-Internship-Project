import TextInput from './fields/TextInput';
import Checkbox from './fields/Checkbox';
import Dropdown from './fields/Dropdown';

function FormRenderer({ formConfig, formData = {}, onChange }) {
  const fields = formConfig.fields || [];
  return (
    <div className="space-y-4">
     {fields.map((field, index) => {
        const { type, name, label, ...rest } = field;

        switch (type) {
          case 'text':
            return (
              <TextInput
                key={index}
                label={label}
                name={name}
                {...rest}
              />
            );
          case 'checkbox':
            return (
              <Checkbox
                key={index}
                label={label}
                name={name}
                {...rest}
              />
            );
          case 'dropdown':
            return (
              <Dropdown
                key={index}
                label={label}
                name={name}
                options={field.options || []}
                {...rest}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default FormRenderer;
