import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PlantHome from './pages/plantHome/plantHome'
import PlantList from './pages/plantList/plantList'
import PlantEdit from './pages/plantEdit/plantEdit'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/plants" element={ <PlantList/>} />
        <Route path="/" element={<PlantHome />} />
        <Route path= "/plantEdit/:id" element={<PlantEdit />} />
      </Routes>
    </Router>
  )
}

export default App
