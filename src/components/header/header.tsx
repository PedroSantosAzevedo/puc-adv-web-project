import "./header.css";

interface MyHeaderProps {
  title: string;
}

export default function MyHeader({ title }: MyHeaderProps) {
    return (
      <header className="MyHeader">
        <div className= "Logo">
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