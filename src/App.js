import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmPassword, setcfmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [showValidation, setShowValidation] = useState(false);

  function validation(e) {
    e.preventDefault();
    let emailValidation = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    let passwordValidation = (password) => {
      return password.length >= 6;
    };

    let matchcfmPassword = (cfmPassword) => {
      return password === cfmPassword;
    };

    if (
      fullname === "" ||
      email === "" ||
      password === "" ||
      cfmPassword === ""
    ) {
      setValidationMessage("All fields are mandatory");
      setShowValidation(true);
    } else if (!emailValidation(email)) {
      setValidationMessage("Please enter a valid email address");
      setShowValidation(true);
    } else if (!passwordValidation(password)) {
      setValidationMessage("Password must be at least 6 characters long");
      setShowValidation(true);
    } else if (!matchcfmPassword(cfmPassword)) {
      setValidationMessage(
        "Password doesn't match, please confirm your password again"
      );
      setShowValidation(true);
    } else {
      setValidationMessage("Successfully Signed Up!");
      setShowValidation(true);
    }
  }

  function handleInputChange(e, setter) {
    setter(e.target.value);
    setShowValidation(false);
  }
  return (
    <div className="App">
      <h1>Signup</h1>
      <form>
        <div className="input">
          <label for="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            onChange={(e) => handleInputChange(e, setFullname)}
          />
          <hr />
        </div>

        <div className="input">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <hr />
        </div>

        <div className="input">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleInputChange(e, setPassword)}
          />
          <hr />
        </div>

        <div className="input">
          <label for="c-password">Confirm Password</label>
          <input
            type="password"
            id="c-password"
            onChange={(e) => handleInputChange(e, setcfmPassword)}
          />
          <hr />
        </div>
        {showValidation && (
          <p
            style={{
              color:
                validationMessage === "Successfully Signed Up!"
                  ? "green"
                  : "red",
            }}
          >
            {validationMessage}
          </p>
        )}
        <button className="btn" onClick={validation}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default App;
