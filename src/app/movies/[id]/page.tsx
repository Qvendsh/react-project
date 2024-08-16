"use client"

import React from 'react';
import '@/app/movies/[id]/Movie.css'


const MovieInfo = ({searchParams}:any) => {
let movie = JSON.parse(searchParams.data)
const url ='https://image.tmdb.org/t/p/w500/'
    return (
        <div>
            <div className='title'><h1>{movie?.title}</h1></div>
            <div className='moviefullinfo'>
                    <div className='movieposter'>{<img src={`${url}${movie?.backdrop_path}`}/>}</div>
                    <div className='movieinfo'>
                        <div>release date:{movie?.release_date}</div>
                        <div> genres: {movie?.genre_ids}</div>
                    </div>
            </div>

            <div className='overview'>
                <h2>Overview</h2>
                <div className='text'>
                {movie?.overview}
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;