import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

function Detail() {
    //const x  = useParams(); //result: {id: 32324}
    const {id} = useParams(); //result: 32324
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie); 
        setLoading(false);
    };

    useEffect(getMovie, []);
    return (
        <div>
            {loading? <h2>Loading...</h2> : 
            <div>
                <h2><a href ={`https://www.imdb.com/title/${movie.imdb_code}`}>{movie.title}</a></h2>
                <img src={movie.large_cover_image}/>
                <p>{movie.rating}</p>
            </div>}
        </div>
    );
}

export default Detail;