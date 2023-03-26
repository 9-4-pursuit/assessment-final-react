
export default function Location({location}) {
  return (<ul className="details"> 
    <li><span>Name: </span><span>{location.name}</span></li>
    <li><span>Climate: </span><span>{location.climate}</span></li>
    <li><span>Terrain: </span><span>{location.terrain}</span></li>


  </ul>);
};