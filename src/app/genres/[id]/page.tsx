"use client"
import React, {useEffect, useState} from 'react';
import { getMoviesByGenre} from "@/services/api.service";
import Link from "next/link";
import {MovieResponseModel} from "@/models/MovieResponseModel";

import '@/app/movies/moviepage.css'


const Page  = ({searchParams}:any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movies, setMovies] = useState([]);

    const moviesByGenre = searchParams.data ? JSON.parse(searchParams.data) : null;

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage, moviesByGenre]);

    const fetchMovies = async ( page: number) => {
        const response:MovieResponseModel = await getMoviesByGenre(moviesByGenre.id, page)
        setMovies(response.results);
        setTotalPages(response.total_pages);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };



    return (
        <div>
          <div className='moviegrid'>
             {
              movies.map(movie => (
                 <div  key={movie.id} className='moviestyle'>
                     <div className='movie-box'>
                        <Link className='link-box' href={{pathname: '/movies/' + movie.id, query: {data: JSON.stringify(movie)}}}>
                            <div className='image-container'>
                              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
                            </div>
                            <div className='title-box  cinzel-title-box'>
                               <h3> {movie.title}</h3>
                            </div>
                        </Link>
                     </div>
                 </div>))
             }
          </div>
            <div className='buttons-polygon'>
                <div className='button-box'>
                    <button className='button' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                </div>
                <div className='curr-box'>
                    {currentPage}
                </div>
                <div className='button-box' >
                   <button className='button' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Page;