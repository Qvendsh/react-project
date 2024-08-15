import {MovieModel} from "@/models/MovieModel";
import {accesToken, baseURL} from "@/constants/constants";
import {GenreModel} from "@/models/GenreModel";
import {MovieResponseModel} from "@/models/MovieResponseModel";
import {SearchResultsModel} from "@/models/SearchResultsModel";

export const getGenres = async (): Promise<GenreModel[]>=>{
   const response = await fetch(baseURL+'/genre/movie/list',{
        method:'GET',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accesToken}`
        }
    })
   const data = await response.json()
    return data.genres
}


 export  const getMovies = async (page:number): Promise<MovieResponseModel> => {
    const response = await fetch(baseURL+`/discover/movie?page=${page}`,{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accesToken}`
        }
    })
    const data:MovieResponseModel = await response.json()
     return data
}
///discover/movie?with_genres=${num-genre}
//?page=${page}
//page:number = 1
export const getMoviesByGenre = async (id:number, page:number):Promise<MovieResponseModel> =>{
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accesToken}`
        }
    })
    const data = await response.json()
    return data
}


 export const searchService = async (page:number,query:string):Promise<SearchResultsModel> =>{
    const response = await fetch(`https://api.themoviedb.org/3/search/keyword?query=${query}&page=${page}`,{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accesToken}`
        }
    })
    const data:SearchResultsModel = await response.json()
    return data
}






//https://api.themoviedb.org/3/discover/movie&with_genres=$%7Bid%7D