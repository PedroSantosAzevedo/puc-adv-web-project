import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PlantHome from './pages/plantHome/plantHome'
import PlantList from './pages/plantList/plantList'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/plants"
          element={
            <PlantList/>
          }
        />
        <Route
          path="/"
          element={
            <PlantHome />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
