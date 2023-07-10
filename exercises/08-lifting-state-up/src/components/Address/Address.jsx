import { useState } from "react";

import AddressForm from "../AddressForm/AddressForm";
import AddressResults from "../AddressResults/AddressResults";

function App() {
  const [displayResults, setDisplayResults] = useState(false);
  /**
   * You will need to call on useState here for form fields
   * e.g. first name, last name, etc.
   */ const [formValues, setFormValues] = useState({});
  /**
   * You will need to pass props to <AddressResults /> and <AddressForm />
   */
  const [didSignUp, setDidSignUp] = useState(false);
  return (
    <>
      {displayResults ? (
        <AddressResults formValues={formValues} didSignUp={didSignUp} />
      ) : (
        <AddressForm
          formValues={formValues}
          setFormValues={setFormValues}
          didSignUp={didSignUp}
          setDidSignUp={setDidSignUp}
          setDisplayResults={setDisplayResults}
        />
      )}
    </>
  );
}

export default App;
