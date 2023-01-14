const API_KEY = "c7e75e5d1d0aee8626562c0561179df4";
const API_BASE = "https://api.themoviedb.org/3";

//Fetch that returns json
const urlsFetch = async (url) => {
    const req = await fetch(`${API_BASE}${url}`);
    const json = await req.json();
    return json;
};

// Netflix requests
export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Originais Netflix",
                items: await urlsFetch(
                    `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await urlsFetch(
                    `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await urlsFetch(
                    `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "horror",
                title: "Terror",
                items: await urlsFetch(
                    `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "action",
                title: "Ação",
                items: await urlsFetch(
                    `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await urlsFetch(
                    `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "documentaty",
                title: "Documentário",
                items: await urlsFetch(
                    `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
                ),
            },
            {
                slug: "romance",
                title: "Romance",
                items: await urlsFetch(
                    `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
                ),
            },
        ];
    },
};
