import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PlantHome from './pages/plantHome/plantHome'
import PlantList from './pages/plantList/plantList'
import PlantEdit from './pages/plantEdit/plantEdit'
import PageNotFound from './pages/pageNotFound/pageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/plants" element={ <PlantList/>} />
        <Route path="/" element={<PlantHome />} />
        <Route path= "/plantEdit/:id" element={<PlantEdit />} />
        <Route path= "/plantNotFound" element={<PageNotFound text='404 - Planta não encontrada'/>}/>
        <Route path = "*" element ={<PageNotFound text='404 - Pagina não disponível'/>}/>
      </Routes>
    </Router>
  )
}

export default App
