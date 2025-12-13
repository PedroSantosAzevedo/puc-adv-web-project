import "./plantList.css"
import MyHeader from '../../components/header/header'
import PlantCard from '../../components/plantCard/plantCard'
import AddPlantCard from '../../components/plantCard/addPlantCard'
import plantsData from '../../data/plants.json'

export default function PlantList() {
    return (
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
    );
}