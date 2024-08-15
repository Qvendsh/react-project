export interface MovieModel{
    id:number,
    title:string,
    overview:string,
    poster_path:string,
    backdrop_path:string,
    release_date:string,
    vote_average:number,
    genre_ids:number[]
}


export interface searchMovieModel{
    id:number,
    title:string
}