import './App.css';

// Import LessText here
import { LessText } from './components/LessText/LessText';

// Import CharacterCount here

//Import GuessTheNumber

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        {/* Add LessText with props here */}
        <LessText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum culpa expedita cumque tempora, nisi sequi, ratione debitis eveniet consequatur cupiditate quibusdam, quo voluptates asperiores voluptas inventore iusto. Et, unde! "
          maxLength={100}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/* Add CharacterCount here */}
        </div>
      </div>
      <div className="container">
        <h1 className="h3">Challenge 3 - Guessing The Number</h1>
        {/* Add GuessingTheNumber here */}
      </div>
    </>
  );
}

export default App;
