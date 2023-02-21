import * as Styled from "./styles";

export const FeaturedMovie = ({ item }) => {
    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    return (
        <Styled.FeaturedMovie
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
            }}
        >
            <Styled.FeaturedEffectBottom>
                <Styled.FeaturedEffectLeft>
                    <Styled.FeaturedMovieTitle>
                        {item.original_name}
                    </Styled.FeaturedMovieTitle>
                    <Styled.FeaturedInfo>
                        <Styled.FeaturedPoints>
                            {item.vote_average} pontos
                        </Styled.FeaturedPoints>
                        <Styled.FeaturedYear>
                            {firstDate.getFullYear()}
                        </Styled.FeaturedYear>
                        <Styled.FeaturedSeason>
                            {item.number_of_seasons} temporada
                            {item.number_of_seasons !== 1 ? "s" : ""}
                        </Styled.FeaturedSeason>
                        <Styled.FeaturedDescription>
                            {item.overview}
                        </Styled.FeaturedDescription>
                        <Styled.FeaturedGenres>
                            Gêneros: {genres.join(", ")}
                        </Styled.FeaturedGenres>
                    </Styled.FeaturedInfo>
                </Styled.FeaturedEffectLeft>
            </Styled.FeaturedEffectBottom>
        </Styled.FeaturedMovie>
    );
};
