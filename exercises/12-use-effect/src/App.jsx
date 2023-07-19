import './App.css';

// Import useEffect here
import {
  useEffect,
  useState,
} from 'react';

// import Axios (or use Fetch)
import axios from 'axios';

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([
    "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
    "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg",
  ]);

  /**
   * You may need to set something else in state
   */
  const [numDogs, setNumDogs] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    setIsLoading(true);

    axios(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
      .then((resp) => {
        setDogImages(resp.data.message);
      })
      .catch(() => {
        setHasError(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [numDogs]);

  const handleChange = (e) => setNumDogs(parseInt(e.target.value));
  return (
    <div className="App">
      <h1>Dogs</h1>
      <select value={numDogs} onChange={handleChange}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <div className="container">
        {isLoading && <p className="text-primary">Loading ...</p>}
        {hasError && (
          <div className="alert alert-danger" role="alert">
            We're sorry, but an unexpected error occurred
          </div>
        )}
        {dogImages.map((dogImage, idx) => (
          <div key={`dog-${idx}`}>
            <img height="200" src={dogImage} alt={`Dog ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
