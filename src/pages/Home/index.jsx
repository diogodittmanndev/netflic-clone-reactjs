import { useEffect, useState } from "react";
import TMDBConfig from "../../tmdbApiConfig/TMDBConfig";

export const HomePage = () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const loadFilmLists = async () => {
            // get all lists
            let lists = await TMDBConfig.getHomeList();
            setMovieList(lists);
        };

        loadFilmLists();
    }, []);

    return <h1>HomePage</h1>;
};
