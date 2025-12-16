import './pageNotFound.css';
import errorIcon from '../../assets/oldLeaf.png'; // Adjust the path to your image
import MyHeader from '../../components/header/header';

interface PageNotFoundProps {
  text: string;
}

export default function PageNotFound({ 
  text
}: PageNotFoundProps) {
  return (
    <div>
   <MyHeader title="" />
    <div className="error-screen">
        
      <div className="error-content">
        <img 
          src={errorIcon} 
          className="error-image"
        />
        <p className="error-text">{text}</p>
      </div>
    </div>
    </div>
  );
}

