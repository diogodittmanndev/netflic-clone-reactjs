import styled from "styled-components";

export const MovieRow = styled.div`
    margin-bottom: 30px;
`;
export const CategoryTitle = styled.h2`
    margin: 0 0 0 30px;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
`;

export const List = styled.div`
    width: 9999999px;
    padding-left: 30px;
`;

export const ListItem = styled.div`
    display: inline-block;
    width: 225px;
    cursor: pointer;
`;

export const MoviePoster = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: 0.3s ease;

    &:hover {
        transform: scale(1);
    }
`;
