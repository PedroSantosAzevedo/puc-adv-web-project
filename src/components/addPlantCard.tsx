


export default function AddPlantCard() {
  return (
    <button className="add-plant-card" role="button" tabIndex={0} aria-label="Add plant">
      <svg
        className="add-plant-card-image"
        viewBox="0 0 24 24"
        width="64"
        height="64"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      <h3 className="add-plant-card-title">Add Plant</h3>
    </button>
  );
}