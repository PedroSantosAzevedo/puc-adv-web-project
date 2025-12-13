import "./plantList.css"
import MyHeader from '../../components/header/header'
import PlantCard from '../../components/plantCard/plantCard'
import AddPlantCard from '../../components/plantCard/addPlantCard'
import plantsData from '../../data/plants.json'
import { useNavigate } from "react-router-dom";

export default function PlantList() {

    const navigate = useNavigate();
    return (
         <div>
              <MyHeader title="Minhas plantas" />
              <div className="content-container">
                <div className="plants-container">
                  {plantsData.plants.map((plant) => (
                    <PlantCard
                      id={plant.id}
                      title={plant.title}
                      image={plant.image}
                      labels={plant.labels}
                      clickAction={(id) => navigate(`/plantEdit/${id}`)}
                    />
                  ))}
                  <AddPlantCard />
                </div>
              </div>
            </div>
    );
}