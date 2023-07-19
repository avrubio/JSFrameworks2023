import './App.css';

// Import useEffect here
import {
  useEffect,
  useState,
} from 'react';

// import Axios (or use Fetch)
import axios from 'axios';

import ronSwansonImage from './assests/ronswanson.png';

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState("");
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    // 1. Show Loading symbol
    setIsLoading(true);
    // 2. Make AJAX Request
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => {
        // 3. Display results
        setQuote(response.data[0]);
      })
      .catch(() => {
        // Or 3. Handle error if there is an error
        setHasError(true);
      })
      .then(() => {
        // 4. Remove loading symbol
        setIsLoading(false);
      });
  }, []);

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {isLoading && <p className="text-primary">Loading...</p>}
        {/* Display an error message if the API fails */}
        {hasError && (
          <div className="alert alert-danger" role="alert">
            We're sorry, but an unexpected error occurred
          </div>
        )}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
