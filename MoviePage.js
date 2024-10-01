import { useParams } from "react-router-dom";


import MovieDetail from "../components/MovieDetail";

function MoviePage() {
    const {id} = useParams();

    return (
        <div className="movie-page">
            <MovieDetail id = {id} />
        </div>
    )

}

export default MoviePage