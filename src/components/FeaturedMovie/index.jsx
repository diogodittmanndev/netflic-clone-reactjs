import * as Styled from "./styles";

export const FeaturedMovie = ({ item }) => {
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
                </Styled.FeaturedEffectLeft>
            </Styled.FeaturedEffectBottom>
        </Styled.FeaturedMovie>
    );
};
