function MovieCard({ selectedMovie }) {
  return (
    <div>
      {console.log(selectedMovie)}
      <h1>Title:{selectedMovie.title}</h1>
      <h3>Release Date:{selectedMovie.release_date}</h3>
      <h3>Description:{selectedMovie.description}</h3>
    </div>
  );
}

export default MovieCard;
