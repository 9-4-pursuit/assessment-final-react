
function Location({ locations, sortedBy }) {
  if (sortedBy) {
    locations.sort((a,b) => (a[sortedBy] > b[sortedBy]) ? 1 : ((a[sortedBy] < b[sortedBy]) ? -1 : 0));
  }

  return(
    <ul>
      {
        locations.map((location) => {
          return(
            <ul key={location.id}>
              <li><span>Name:</span> <span>{location.name}</span></li>
              <li><span>Climate:</span> <span>{location.climate}</span></li>
              <li><span>Terrain:</span> <span>{location.terrain}</span></li>
            </ul>
          )
        })
      }
    </ul>
  )
}

export default Location;