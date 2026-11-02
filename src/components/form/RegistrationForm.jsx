// import { useState } from "react";
// import { Container } from "../container/Container";

// const initialFormData = {
//   name: "",
//   email: "",
//   age: "",
//   country: "",
//   gender: false,
//   isSubscribed: false,
//   message: "",
// };

// const RegistrationForm = () => {
//   const [errors, setErrors] = useState({});

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim() && !formData.email.includes("@")) {
//       newErrors.email = "Enter a valid email";
//     }

//     if (!formData.age.trim() && !formData.age > 18 && !formData < 100) {
//       newErrors.age = "Age is required (min:18 and max:100)";
//     }

//     if (!formData.gender) {
//       newErrors.gender = "Select the Gender";
//     }

//     if (!formData.isSubscribed) {
//       newErrors.isSubscribed = "Subscribe is required";
//     }

//     if (!formData.country.trim()) {
//       newErrors.country = "Select the Country";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     }

//     console.log("newErrors", newErrors);

//     setFormData(initialFormData);

//     setErrors(newErrors);

//     if (Object.keys(newErrors).length > 0) {
//       return;
//     }

//     console.log("Form Submitted!");
//   };

//   return (
//     <>
//       <Container>
//         <h2> Registration Form </h2>

//         <form onSubmit={handleSubmit}>
//           <label>
//             {" "}
//             Name:
//             <input
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//             />{" "}
//           </label>
//           {errors.name && <p>{errors.name}</p>}
//           <br /> <br />
//           <label>
//             {" "}
//             Email:
//             <input
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </label>
//           {errors.email && <p>{errors.email}</p>}
//           <br /> <br />
//           <label>
//             {" "}
//             Age:
//             <input
//               name="age"
//               type="number"
//               value={formData.age}
//               onChange={handleChange}
//             />{" "}
//           </label>
//           {errors.age && <p>{errors.age}</p>}
//           <br /> <br />
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Male"
//               checked={formData.gender === "male"}
//               onChange={handleChange}
//             />
//             Male
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="gender"
//               value="Female"
//               checked={formData.gender === "female"}
//               onChange={handleChange}
//             />
//             Female
//           </label>
//           {errors.gender && <p>{errors.gender}</p>}
          
//           <br /> <br />
//           <label>
//             {" "}
//             Country :
//             <select
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//             >
//               <option value="">Select country</option>
//               <option value="India">India</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//             </select>
//           </label>
//           {errors.country && <p>{errors.country}</p>}
//           <br /> <br />
//           <label>
//             {" "}
//             Message :
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             />{" "}
//           </label>
//           {errors.message && <p>{errors.message}</p>}

//           <br /> <br />
//           <label>
//             <input
//               type="checkbox"
//               name="isSubscribed"
//               checked={formData.isSubscribed}
//               onChange={handleChange}
//             />
//             Subscribe
//           </label>
//           {errors.isSubscribed && <p>{errors.isSubscribed}</p>}
//           <br /> <br />
//           <button type="submit">Submit</button>
//         </form>
//       </Container>
//       <Container>
//         <h2> Display Registration Form </h2>
//         <div>
//             <p>
//               <strong>Name:</strong> {formData.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Age:</strong> {formData.age}
//             </p>
//             <p>
//               <strong>Gender:</strong> {formData.gender}
//             </p>
//             <p>
//               <strong>Country:</strong> {formData.country}
//             </p>
//             <p>
//               <strong>Message:</strong> {formData.message}
//             </p>
//             <p>
//               <strong>isSubscribed:</strong> {formData.isSubscribed ? 'True' : 'False'}
//             </p>
//           </div>
//       </Container>
//     </>
//   );
// };

// export default RegistrationForm;


import { useState } from "react";
import { Container } from "../container/Container";

const initialFormData = {
  name: "",
  email: "",
  age: "",
  country: "",
  gender: "",
  isSubscribed: false,
  message: "",
};

const RegistrationForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation - Fixed logic
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@") || !formData.email.includes(".")) {
      newErrors.email = "Enter a valid email address (e.g., name@domain.com)";
    }

    // Age validation - Fixed logic
    const ageNum = parseInt(formData.age);
    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(ageNum)) {
      newErrors.age = "Age must be a number";
    } else if (ageNum < 18) {
      newErrors.age = "You must be at least 18 years old";
    } else if (ageNum > 100) {
      newErrors.age = "Age must be less than 100";
    }

    // Gender validation - Fixed
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Please select your country";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log("Validation errors:", newErrors);
      return;
    }

    // Form is valid - submit data
    console.log("Form Submitted!", formData);
    setSubmittedData({ ...formData });
    
    // Reset form after successful submission
    setFormData(initialFormData);
    setErrors({});
    alert("Registration successful!");
  };

  // Reset form handler
  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the form?")) {
      setFormData(initialFormData);
      setErrors({});
    }
  };

  return (
    <>
      <Container>
        <h2> Registration Form </h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* ✅ 2-Column Grid Layout */}
          <div style={styles.grid}>
            {/* Column 1 */}
            <div style={styles.column}>
              {/* Name */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Name: <span style={styles.required}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.name ? "#ff4444" : "#ddd",
                  }}
                  placeholder="Enter your full name"
                />
                {errors.name && <p style={styles.error}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Email: <span style={styles.required}>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.email ? "#ff4444" : "#ddd",
                  }}
                  placeholder="Enter your email"
                />
                {errors.email && <p style={styles.error}>{errors.email}</p>}
              </div>

              {/* Age */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Age: <span style={styles.required}>*</span>
                </label>
                <input
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.age ? "#ff4444" : "#ddd",
                  }}
                  placeholder="Enter your age (18-100)"
                  min="18"
                  max="100"
                />
                {errors.age && <p style={styles.error}>{errors.age}</p>}
              </div>

              {/* Gender */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Gender: <span style={styles.required}>*</span>
                </label>
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />
                    Male
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />
                    Female
                  </label>
                  <label style={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
                {errors.gender && <p style={styles.error}>{errors.gender}</p>}
              </div>
            </div>

            {/* Column 2 */}
            <div style={styles.column}>
              {/* Country */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Country: <span style={styles.required}>*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    ...styles.input,
                    borderColor: errors.country ? "#ff4444" : "#ddd",
                  }}
                >
                  <option value="">Select country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
                {errors.country && <p style={styles.error}>{errors.country}</p>}
              </div>

              {/* Message */}
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  Message: <span style={styles.required}>*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...styles.textarea,
                    borderColor: errors.message ? "#ff4444" : "#ddd",
                  }}
                  placeholder="Write your message (min 10 characters)"
                  rows="4"
                />
                {errors.message && <p style={styles.error}>{errors.message}</p>}
              </div>

              {/* Subscribe (Optional) */}
              <div style={styles.fieldGroup}>
                <label style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="isSubscribed"
                    checked={formData.isSubscribed}
                    onChange={handleChange}
                    style={styles.checkbox}
                  />
                  Subscribe to our newsletter (optional)
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div style={styles.buttonGroup}>
            <button type="submit" style={styles.submitButton}>
              Submit
            </button>
            <button type="button" onClick={handleReset} style={styles.resetButton}>
              Reset
            </button>
          </div>
        </form>
      </Container>

      {/* Display Submitted Data */}
      <Container>
        <h2>Display Registration Data</h2>
        {submittedData ? (
          <div style={styles.displayContainer}>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Age:</strong> {submittedData.age}
            </p>
            <p>
              <strong>Gender:</strong> {submittedData.gender || "Not specified"}
            </p>
            <p>
              <strong>Country:</strong> {submittedData.country}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
            <p>
              <strong>Subscribed:</strong> {submittedData.isSubscribed ? "Yes" : "No"}
            </p>
          </div>
        ) : (
          <p style={styles.noData}>No data submitted yet. Fill out the form and submit!</p>
        )}
      </Container>
    </>
  );
};

// ✅ Styles
const styles = {
  form: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // ✅ 2 columns
    gap: "30px",
    marginBottom: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  required: {
    color: "#ff4444",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    border: "2px solid #ddd",
    borderRadius: "6px",
    transition: "border-color 0.3s",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    fontSize: "14px",
    border: "2px solid #ddd",
    borderRadius: "6px",
    transition: "border-color 0.3s",
    outline: "none",
    resize: "vertical",
    fontFamily: "Arial",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    padding: "5px 0",
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "14px",
    cursor: "pointer",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    cursor: "pointer",
    padding: "5px 0",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  error: {
    color: "#ff4444",
    fontSize: "13px",
    marginTop: "5px",
    marginBottom: "0",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    justifyContent: "center",
  },
  submitButton: {
    //padding: "12px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  resetButton: {
    padding: "12px 40px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  displayContainer: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  noData: {
    textAlign: "center",
    color: "#888",
    padding: "20px",
    fontStyle: "italic",
  },
};

export default RegistrationForm;
