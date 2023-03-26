import "./LocationCard.css"

function LocationCard({ locationData }) {
  return (
    <ul className="location-card-style">
      <li><span>Name:</span> {locationData.name}</li>
      <li><span>Climate:</span> {locationData.climate}</li>
      <li><span>Terrain:</span> {locationData.terrain}</li>
    </ul>
  )
}

export default LocationCard;
