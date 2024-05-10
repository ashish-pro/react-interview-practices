import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/random-color/RandomColor';
import StarRating from './components/star-rating/StarRating';

function App() {
  return (
    <div className="App">
      {/* Accordian */}
      {/* <Accordian/> */}

      {/* Generating random Color */}
      {/* <RandomColor/> */}

      {/* Star Rating */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
