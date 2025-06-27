import TextInput from "./TextInput";
import SelectField from "./SelectField";
import CheckboxGroup from "./CheckboxGroup";
import RadioGroup from "./RadioGroup";

const FormRenderer = ({ field, register, error }) => {
  switch (field.type) {
    case "text":
      return <TextInput {...field} register={register} error={error} />;
    case "dropdown":
      return <SelectField {...field} register={register} error={error} />;
    case "checkbox":
      return <CheckboxGroup {...field} register={register} error={error} />;
    case "radio":
      return <RadioGroup {...field} register={register} error={error} />;
    default:
      return null;
  }
};

export default FormRenderer;
