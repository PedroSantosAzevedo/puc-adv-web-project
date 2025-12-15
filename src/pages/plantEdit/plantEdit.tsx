import "./plantEdit.css";
import MyHeader from '../../components/header/header';
import plantsData from '../../data/plants.json';
import TextFieldGroup from "../../components/textField/textField";
import { useState } from 'react';
import { useParams } from "react-router-dom";
import DefaultButton from "../../components/defaultButton/defaultButton";


function findPlantById(id: number) {
    return plantsData.plants.find(plant => plant.id === id);
}

export default function PlantEdit() {

    const param = useParams();
    const plant = findPlantById(Number(param.id));
    const [title, setTitle] = useState(plant?.title || '');
    const [labels, setLabels] = useState<string[]>(plant?.labels || []);

    const handleLabelChange = (index: number, value: string) => {
        if (!labels) return;
        const newLabels = [...labels];
        newLabels[index] = value;
        setLabels(newLabels);
    }

    if (!plant) {
        return (
            <div>
                <MyHeader title="Editar Planta" />
                <div className="plant-edit-content">
                    <p>Planta não encontrada.</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <MyHeader title="Editar Planta" />
            <div className="plant-edit-content">
                <h2>Editar Planta</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="title">Título:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    {labels.map((label, index) => (
                        <TextFieldGroup
                            key={index}
                            label={`Campo ${index + 1}`}
                            id={`label-${index}`}
                            value={label}
                            onChange={(e) => handleLabelChange(index, e.target.value)}
                        />
                    ))}
                </form>
                <DefaultButton text="Salvar" onClick={() => alert('Planta salva! (funcionalidade não implementada)')} />
            </div>
        </div>

    );
}