import * as Styled from "./styles";

export const MovieRow = ({ title, items }) => {
    return (
        <Styled.MovieRow>
            <Styled.CategoryTitle>{title}</Styled.CategoryTitle>
            <Styled.ListArea>
                <Styled.List>
                    {items.results.length > 0 &&
                        items.results.map((item, key) => (
                            <Styled.ListItem key={key}>
                                <Styled.MoviePoster
                                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                    alt={item.original_title}
                                />
                            </Styled.ListItem>
                        ))}
                </Styled.List>
            </Styled.ListArea>
        </Styled.MovieRow>
    );
};
