import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import Color from './Color'
import ColorFactory from './ColorFactory'
import ColorSelection from './ColorSelection'

let colors = ['red', 'green', 'blue']

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/new-color" element={<ColorFactory colors={colors}/>}/>
          <Route exact path="/colors" element={<ColorSelection colors={colors}/>}/>
          <Route path="/colors/:color" element={<Color/>}/>
          <Route path='*' element={<Navigate to='/colors'/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
