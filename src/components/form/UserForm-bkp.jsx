import { useState } from "react";
import { Container } from "../container/Container";

const UserFormWithOneHandler = () => {
  const [formValue, setFormValue] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !age.trim()) {
      return;
    }

    const user = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      age: parseInt(age), // Convert to number
    };

    // Add the user object to the array
    setFormValue((prevUsers) => [...prevUsers, user]);

    // Clear form after submission
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <>
      <Container>
        <h2> User Form </h2>
        <form onClick={onSubmitHandler}>
          <label> Name: </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
          /> <br /> <br />
          <label> Email: </label>
          <input type="email" value={email} onChange={handleChange} />{" "}
          <br /> <br />
          <label> Age: </label>
          <input
            type="number"
            value={age}
            onChange={handleChange}
          /> <br /> <br />
          <button type="submit">Submit</button>
        </form>
      </Container>
      <Container>
        <h2> Display User Data </h2>
        {formValue.length === 0 ? (
          <p> No user found yet ! </p>
        ) : (
          <ul>
            {formValue.map((item, index) => (
              <li key={item.id}>
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Email:</strong> {item.email}
                </p>
                <p>
                  <strong>Age:</strong> {item.age}
                </p>
                <p>
                  <strong>User #:</strong> {index + 1}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};

export default UserFormWithOneHandler;
