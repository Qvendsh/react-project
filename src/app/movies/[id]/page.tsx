"use client"

import React, {FC, useEffect, useState} from 'react';
import '@/app/movies/[id]/Movie.css'


const MovieInfo = ({searchParams}:any) => {
let movie = JSON.parse(searchParams.data)
const url ='https://image.tmdb.org/t/p/w500/'
    return (
        <div>
            {movie?.title}
            <div className='MiddleMoviePage'>
            <div>{<img src={`${url}${movie?.backdrop_path}`}/>}</div>
            <div className='MovieInfo' ><p>releasedate:{movie?.release_date}  genres: {movie?.genre_ids}</p></div>
            </div>
            {movie?.overview}
        </div>
    );
};

export default MovieInfo;