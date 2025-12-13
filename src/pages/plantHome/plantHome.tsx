import DefaultButton from "../../components/defaultButton/defaultButton";
import MyHeader from "../../components/header/header";
import "./plantHome.css";
import { useNavigate } from "react-router-dom";

export default function PlantHome() {
const  navigate = useNavigate();


    return (
      <div>
        <MyHeader title="Bem vindo" />
        <div className = "homeTextContainer">
          <h2 className = "homeMainText" >Bem vindos ao meu site de controle de plantas caseiro. No futuro esse site se conctará à placas esp8266 que verificarão os status de humidade e assim como irão monitorar as datas das ultimas regras</h2>
          <DefaultButton text="Minhas Plantas" onClick={() => navigate("/plants")} />
        </div>
      </div>
    );
}