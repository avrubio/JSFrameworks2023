import './App.css';

import { useState } from 'react';

import countries from './assets/countries.json';
import states from './assets/states.json';

function App() {
  const [formData, setFormData] = useState({});

  const [isChecked, setIsChecked] = useState(false);
  // is formsubmitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormsubmitted
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //

  return (
    <form className="container mt-4" method="POST" onSubmit={handleSubmit}>
      {/* You will need to handle form submission */}
      <div className="mb-3">
        <label htmlFor="firstName" className="control-label">
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="form-control"
          value={formData.firstName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="control-label">
          Last Name
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="form-control"
          // value={lastNameInput}
          // onChange={(e) => setLastNameInput(e.target.value)}
          value={formData.lastName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="addressLine1" className="control-label">
          Address Line 1
        </label>
        <input
          id="addressLine1"
          name="addressLine1"
          type="text"
          className="form-control"
          // value={addyInput}
          // onChange={(e) => setAddyInput(e.target.value)}
          value={formData.addressLine1 || ""}
          onChange={handleChange}
        />
        <p className="help-block text-muted">
          Street Address, P.O. Box, Company Name, C/O
        </p>
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="control-label">
          City / Town
        </label>
        <input
          id="city"
          name="city"
          type="text"
          className="form-control"
          // value={cityTownInput}
          // onChange={(e) => setCityTownInput(e.target.value)}
          value={formData.cityTown || ""}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="state" className="control-label">
          State / Province / Region
        </label>
        {/* Loop through the states you imported here */}

        <select id="state" name="state" className="form-control">
          {Object.values(states).map((state) => {
            return (
              <>
                <option key={state} value={state}>
                  {state}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="postalCode" className="control-label">
          Zip / Postal Code
        </label>
        <input
          id="postalCode"
          name="postalCode"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="control-label">
          Country
        </label>
        {/* Loop through the countries you imported here */}
        <select id="country" name="country" className="form-control">
          {Object.values(countries).map((country) => {
            return (
              <>
                <option key={country} value={country}>
                  {country}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div className="mb-3 form-check">
        <input
          id="signUpForNewsLetter"
          name="signUpForNewsLetter"
          type="checkbox"
          checked={isChecked}
          className="form-check-input"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="signUpForNewsLetter" className="form-check-label">
          Sign Up For Newsletter
        </label>
        <div className="mb-3 form-check">
          {/* && isFormsubmitted */}
          {isChecked ? (
            <p>Thank you for signing up for our newsletter!</p>
          ) : (
            <p>Please sign up for our newsletter!</p>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>

      {/*
       * Find a way to only display this once the form has been submitted.
       * Hint: You will need to change "false" below with something else
       */}
      {Object.keys(formData).length > 0 && true && (
        <div className="card card-body bg-light mt-4 mb-4">
          Results:
          <ul className="list-unstyled mb-0">
            {/* Add <li></li> tags here */}
            {Object.entries(formData).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}

export default App;
