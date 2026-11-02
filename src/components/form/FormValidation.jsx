import { useState } from "react";
import { Container } from "../container/Container";

const FormValidation = ({formData, handleChange}) => {

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {}

    if(!formData.name.trim()){
      newErrors.name = "Name is required"
    }

    if(!formData.email.trim()){
      newErrors.email = "Email is required"
    }

      if(!formData.age.trim()){
      newErrors.age = "Age is required"
    }

    setErrors({})

    //console.log("newErrors", newErrors)

    setErrors(newErrors);


    if (Object.keys(newErrors).length > 0){
      return
    }

    console.log("Form Submitted!")
  }

  return (
    <>
      <Container>
        <h2> User Form with Validation </h2>
        
        <form onSubmit={handleSubmit}>

          <label> Name: </label>
          <input
            name='name'
            type="text"
            value={formData.name}
            onChange={handleChange}
          /> 
          {errors.name && (
        <p>{errors.name}</p>
      )}
          <br /> <br />

          <label> Email: </label>
          <input name='email' type="email" value={formData.email} onChange={handleChange} />
          {errors.email && (
        <p>{errors.email}</p>
      )}
          
          <br /> <br />

          <label> Age: </label>
          <input
          name='age'
            type="number"
            value={formData.age}
            onChange={handleChange}
          /> 
          {errors.age && (
        <p>{errors.age}</p>
      )}
          
          <br /> <br />


          <button type="submit">Submit</button>
        </form>
      </Container>
      <Container>
        <h2> User Display State </h2>
          <ul>            
              <li>
                <p>
                  <strong>Name:</strong> {formData.name}
                </p>
                <p>
                  <strong>Email:</strong> {formData.email}
                </p>
                <p>
                  <strong>Age:</strong> {formData.age}
                </p>
              </li>
          </ul>
      </Container>
    </>
  );
};

export default FormValidation;
