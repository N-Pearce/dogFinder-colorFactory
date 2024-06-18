import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import DogList from './DogList';
import DogDetails from './DogDetails'

function App() {
  const dogList = {
    dogs: [
      {
        name: "Whiskey",
        src: "https://compote.slate.com/images/b4acd613-b4b0-42bd-bdfe-89fc55985608.jpeg?crop=4778%2C3185%2Cx258%2Cy703",
        age: 5,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        src: 'https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg',
        age: 6,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        src: 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
        age: 4,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        src: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        age: 4,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/dogs" element={<DogList dogList={dogList}/>}/>
          <Route path="/dogs/:name" element={<DogDetails dogList={dogList}/>}/>
          <Route path='*' element={<Navigate to='/dogs'/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
