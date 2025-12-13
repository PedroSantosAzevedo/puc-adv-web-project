import './App.css'
import MyHeader from './pages/header'
import PlantCard from './components/plantCard'
import AddPlantCard from './components/addPlantCard'
import plantsData from './data/plants.json'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PlantHome from './pages/plantHome/plantHome'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/plants"
          element={
            <div>
              <MyHeader title="Minhas plantas" />
              <div className="content-container">
                <div className="plants-container">
                  {plantsData.plants.map((plant) => (
                    <PlantCard
                      key={plant.id}
                      title={plant.title}
                      image={plant.image}
                      labels={plant.labels}
                      clickAction={(myTitle) => console.log(myTitle)}
                    />
                  ))}
                  <AddPlantCard />
                </div>
              </div>
            </div>
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
