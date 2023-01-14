import { useEffect, useState } from "react";
import TMDBConfig from "../../tmdbApiConfig/TMDBConfig";
import { MovieRow } from "../../components/MovieRow";

//Import Style
import * as Styled from "./styles";

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

    return (
        <div className="wrapped__container">
            <Styled.SectionMovieList className="movieLists">
                {movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                ))}
            </Styled.SectionMovieList>
        </div>
    );
};
