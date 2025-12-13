import "./defaultButton.css";

interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
}

export default function DefaultButton({ text, onClick }: DefaultButtonProps) {
  return (
    <button className="defaultButton" onClick={onClick}>
      <span className="defaultButtonText">{text}</span>
    </button>
  );
}