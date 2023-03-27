
export function getMovies() {
    return fetch("https://resource-ghibli-api.onrender.com/films")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // generate the Ghibli Movie Data here
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export function getPeople() {
    return fetch("https://resource-ghibli-api.onrender.com/people")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Generates the people dem.
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export function getLocations() {
    return fetch("https://resource-ghibli-api.onrender.com/locations")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Display all that location data here!
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
}
