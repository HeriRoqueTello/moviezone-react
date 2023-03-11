const key = import.meta.env.VITE_MOVIE_KEY;
const url = 'https://api.themoviedb.org/3';
export async function getMoviePopular() {
	const res = await fetch(`${url}/movie/popular?api_key=${key}&language=en-US&limit=10`);
	const data = await res.json();
	return data;
}
export async function getTopRatedMovie() {
	const res = await fetch(`${url}/movie/top_rated?api_key=${key}&language=en-US`);
	const data = await res.json();
	return data;
}
export async function getGenres() {
	const res = await fetch(`${url}/genre/movie/list?api_key=${key}&language=en-US`);
	const data = await res.json();
	return data;
}
