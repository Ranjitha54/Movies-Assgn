import MovieCard from "./MovieCard"

function MovieList({movies}) {

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                // we are rendering the movie card for each item
                <MovieCard key = {movie.imdbID} movie = {movie} />
            ))}
        </div>
    )

}

export default MovieList