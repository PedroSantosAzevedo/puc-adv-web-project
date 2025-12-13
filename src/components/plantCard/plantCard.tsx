import { useState } from "react";
import "./plantCard.css";

interface PlantCardProps {
  id: number
  title: string;
  image: string;
  labels: string[];
  clickAction?: (id: number) => void;
}

export default function PlantCard({id, title, image, labels, clickAction}: PlantCardProps) {

    const [state, setState] = useState(false);
    const [classState, setClassState] = useState("plant-card");

    const handleClick = () => {
        setState(!state);
        state ? setClassState("plant-card") :  setClassState("plant-card plant-card-selected")
        console.log("clicou no card da planta " + id);
        clickAction?.(id);
    }

  return (
    <button className={classState} onClick={handleClick}>
      <img src={image} alt={title} className="plant-card-image" />
      <h3 className="plant-card-title">{title}</h3>
      <div className="label-container">
      <div className="plant-card-labels">
        {labels.map((label, index) => (
          <span key={index} className="plant-card-label">
            {label}
          </span>
        ))}
        </div>
      </div>
    </button>
  );
}
