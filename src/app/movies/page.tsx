"use client"

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {getMovies} from "@/services/api.service";
import {useSearchParams} from "next/navigation";
import {MovieResponseModel} from "@/models/MovieResponseModel";

import '@/app/movies/moviepage.css'
import StarsRating from "@/components/StarsRatingComponent/StarsRating";

const MoviesPage =  () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [movies, setMovies] = useState([]);
    const searchParams = useSearchParams();

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const fetchMovies = async ( page: number) => {
        const response:MovieResponseModel = await getMovies(page);
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
                movies.map(value =>
                    <div key={value.id}  className='moviestyle'>
                        <div className='movie-box'>
                        <Link className='link-box' href={{pathname: `/movies/'+ ${value.id}`, query: {data: JSON.stringify(value)}}}>
                            <div className='image-container'>
                                <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`} alt=""/>
                            </div>
                            <div>
                                <StarsRating rating={value.vote_average} />
                            </div>
                              <div className='cinzel-title-box'>
                                 <h3>{value.title}</h3>
                              </div>
                        </Link>
                        </div>
                </div>)
            }
            </div>
            <div className='buttons-polygon'>
                <div className='button-box'>
                    <button className='button' onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                </div>
                <div className='curr-box'>
                    {currentPage}
                </div>
                <div className='button-box'>
                     <button className='button' onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default MoviesPage;
