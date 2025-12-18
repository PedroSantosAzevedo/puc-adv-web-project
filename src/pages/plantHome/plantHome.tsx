import DefaultButton from "../../components/defaultButton/defaultButton";
import MyHeader from "../../components/header/header";
import "./plantHome.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import leafImage from "../../assets/leaf.png";
import flowerImage from "../../assets/oldLeaf.png";

export default function PlantHome() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  
  const images = [leafImage, flowerImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      
      setTimeout(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
        setFade(true);
      }, 700);
      
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <MyHeader title="Bem vindo" />
      <div className="contentContainer">
        <img 
          src={images[currentImage]} 
          className={`home-img ${fade ? 'fade-in' : 'fade-out'}`}
          alt="Plant animation" 
        />
        <h2 className="homeMainText">
          Bem vindos ao meu site de controle de plantas caseiro. No futuro esse site se conectará à placas esp8266 que verificarão os status de humidade e irão monitorar as datas das ultimas regras
        </h2>
        <DefaultButton 
          text="Minhas Plantas" 
          onClick={() => navigate("/plants")} 
        />
      </div>
    </div>
  );
}