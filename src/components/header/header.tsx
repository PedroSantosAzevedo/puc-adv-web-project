import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";

interface MyHeaderProps {
  title: string;
}

export default function MyHeader({ title }: MyHeaderProps) {


  const location = useLocation();
  const navigate = useNavigate();
  const handleLogoClick = () => {
    if (location.pathname == "/plantNotFound") {
        navigate("/plants");
        return;
    }
    navigate("/");
  }

    return (
      <header className="MyHeader">
        <div className= "Logo" onClick={handleLogoClick}>
          <img src="../../src/assets/leaf.png" className="logo-img" alt="Leaf logo" />
          <span>
            Plantapp
          </span>
        </div>
        <span className="MainText">{title}</span>
        <button className="HeaderBtn" aria-label="Header action">
          <img src="../../src/assets/user.png" alt="" className="btn-icon" />
        </button>
      </header>);
}