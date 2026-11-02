import { useState } from "react";
import { Container } from "../container/Container";

const UserFormWithOneHandler = () => {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");


  const [formData, setFormData] = useState({
  name: "",
  email: "",
  age: ""
});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // if (name === 'name') {
    //   setName(value);
    // } else if (name === 'email') {
    //   setEmail(value);
    // } else if (name === 'age') {
    //   setAge(value);
    // }

    setFormData(prev => ({
    ...prev,
    [name]: value
  }));
  };

  return (
    <>
      <Container>
        <h2> User Form </h2>
        <form>

          <label> Name: </label>
          <input
            name='name'
            type="text"
            value={formData.name}
            onChange={handleChange}
          /> <br /> <br />

          <label> Email: </label>
          <input name='email' type="email" value={formData.email} onChange={handleChange} />
          <br /> <br />

          <label> Age: </label>
          <input
          name='age'
            type="number"
            value={formData.age}
            onChange={handleChange}
          /> <br /> <br />


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

export default UserFormWithOneHandler;
