/**
 * After the user submit the form, this displays what the user entered.
 * @param {Object} props which should somehow include:
 * - first name
 * - last name
 * - address
 * - city
 * - state
 * - zipcode / postal code
 * - country
 */
function AddressResults({ displayResults }) {
  return (
    <div className="card card-body bg-light mt-4 mb-4">
      Results:
      <ul className="list-unstyled mb-0">
        {/* Add <li></li> tags here */}
        <li>{displayResults.firstName}</li>
        <li>{displayResults.lastName}</li>
        <li>{displayResults.addressLine1}</li>
        <li>{displayResults.city}</li>
        <li>{displayResults.state}</li>
        <li>{displayResults.zipcode}</li>
        <li>{displayResults.country}</li>{" "}
      </ul>
    </div>
  );
}

export default AddressResults;
