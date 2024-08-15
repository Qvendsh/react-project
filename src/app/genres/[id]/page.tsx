"use client"
import React, {useEffect, useState} from 'react';
import {getMovies, getMoviesByGenre} from "@/services/api.service";
import {MovieModel} from "@/models/MovieModel";
import Link from "next/link";
import {MovieResponseModel} from "@/models/MovieResponseModel";
import {useSearchParams} from "next/navigation";

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
            {
                movies.map(movie => (<div key={movie.id}><Link
                    href={{pathname: '/movies/' + movie.id, query: {data: JSON.stringify(movie)}}}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                         alt=""/> {movie.title}</Link></div>))
            }
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Page;