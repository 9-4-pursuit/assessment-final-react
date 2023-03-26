import { useEffect, useState } from 'react'

export default function Locations() {
  const [show, setShow] = useState(false)
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getLocations()
  }, [])

  const getLocations = async () => {
    const res = await fetch(
      'https://resource-ghibli-api.onrender.com/locations'
    )
    const data = await res.json()
    setLocations(data)
  }
  const handleShow = () => {
    setShow(!show)
  }
  const sort = type => {
    const newOrder = [...locations].sort(function (a, b) {
      if (a[type] < b[type]) {
        return -1
      }
      if (a[type] > b[type]) {
        return 1
      }
      return 0
    })
    setLocations(newOrder)
  }
  return (
    <div className='locations'>
      <h2>List of Locations</h2>
      <button onClick={handleShow}>
        {show ? 'Hide Locations' : 'Show Locations'}
      </button>
      {show ? (
        <>
          <button onClick={() => sort('name')}>Sort by Name</button>
          <button onClick={() => sort('climate')}>Sort by Climate</button>
          <button onClick={() => sort('terrain')}>Sort by Terrain</button>
        </>
      ) : null}
      {show ? (
        <ul>
          {locations.map(local => (
            <ul>
              <li key={local.id}>
                <ul>
                  <li>Climate: <span>{local.climate}</span> </li>
                  <li>Name: <span>{local.name}</span></li>
                  <li>Terrain: <span>{local.terrain}</span></li>
                </ul>
              </li>
            </ul>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
