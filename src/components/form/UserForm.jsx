import { useState } from "react";
import { Container } from "../container/Container";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("Name:", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email:", e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    console.log("Age:", e.target.value);
  };

  return (
    <>
      <Container>
        <h2> User Form </h2>
        <form>
          <label> Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          /> <br /> <br />
          <label> Email: </label>
          <input type="email" value={email} onChange={handleEmailChange} />{" "}
          <br /> <br />
          <label> Age: </label>
          <input
            type="number"
            value={age}
            onChange={handleAgeChange}
          /> <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </Container>
      <Container>
        <h2> User Display State </h2>
          <ul>            
              <li>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Age:</strong> {age}
                </p>
              </li>
          </ul>
      </Container>
    </>
  );
};

export default UserForm;
