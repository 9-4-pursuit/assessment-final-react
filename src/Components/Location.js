export default function Location({location}) {
    return (
    <div>
        
        <ul key={location.id}>
            <li><span><strong>Name:</strong></span> </li> {location.name}
            <li><span><strong>Climate:</strong></span> </li> {location.climate}
            <li><span><strong>Terrain:</strong></span> </li> {location.terrain}
        </ul>

    </div>

  )
}