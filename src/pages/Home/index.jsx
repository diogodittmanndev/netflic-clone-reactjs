import { useEffect, useState } from "react";
import TMDBConfig from "../../tmdbApiConfig/TMDBConfig";
import { MovieRow } from "../../components/MovieRow";
import { FeaturedMovie } from "../../components/FeaturedMovie";

//Import Style
import * as Styled from "./styles";

export const HomePage = () => {
    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeatureMovie] = useState(null);

    useEffect(() => {
        const loadMovieLists = async () => {
            // Get all lists
            let lists = await TMDBConfig.getHomeList();
            setMovieList(lists);

            //Get Featured Movie
            let originalsNetflix = lists.filter((i) => i.slug === "originals");
            let randomMovie = Math.floor(
                Math.random() * (originalsNetflix[0].items.results.length - 1)
            );
            let chosenMovie = originalsNetflix[0].items.results[randomMovie];
            let ChosenMovieInfo = await TMDBConfig.getMovieInfo(
                chosenMovie.id,
                "tv"
            );
            setFeatureMovie(ChosenMovieInfo);
        };
        loadMovieLists();
    }, []);

    return (
        <>
            {featuredData && <FeaturedMovie item={featuredData} />}

            <div className="wrapped__container">
                <Styled.SectionMovieList className="movieLists">
                    {movieList.map((item, key) => (
                        <MovieRow
                            key={key}
                            title={item.title}
                            items={item.items}
                        />
                    ))}
                </Styled.SectionMovieList>
            </div>
        </>
    );
};
