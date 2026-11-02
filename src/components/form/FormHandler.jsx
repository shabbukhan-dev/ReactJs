import { useState } from "react";
import FormValidation from "./FormValidation";
import RegistrationForm from "./RegistrationForm";

const FormHandler = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <FormValidation formData={formData} handleChange={handleChange} />
    </>
  );
};

export default FormHandler;
