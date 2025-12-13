import "./plantDetail.css"
import MyHeader from '../../components/header/header'
import plantsData from '../../data/plants.json'

interface PlantDetailProps {
    plantId: string;
}

function findPlantById(id: string) {
    const plantId = parseInt(id, 10);
    return plantsData.plants.find(plant => plant.id === plantId);
}

export default function PlantDetail({ plantId }: PlantDetailProps) {
    const plant = findPlantById(plantId);

    return (
        <div>
            <MyHeader title="Detalhes da planta" />
            <div className="plant-detail-content">
                <h2>Detalhes da Planta</h2>
                {plant ? (
                    <div>
                        <h3>{plant.title}</h3>
                        <img src={plant.image} alt={plant.title} />
                        <div>
                            {plant.labels.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>Planta não encontrada.</p>
                )}
            </div>
        </div>
    );
}