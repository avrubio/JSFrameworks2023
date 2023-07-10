import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  return (
    <>
      {displayResults ? (
        <AddressResults firstName={firstName} />
      ) : (
        <AddressForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          zipCode={zipCode}
          setZipCode={setZipCode}
          country={country}
          setCountry={setCountry}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}

export default App;
