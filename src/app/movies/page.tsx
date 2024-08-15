"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {getMovies, searchService} from "@/services/api.service";
import {useSearchParams} from "next/navigation";
import {MovieResponseModel} from "@/models/MovieResponseModel";
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
            {
                movies.map(value =>
                    <div key={value.id}>
                        <Link href={{pathname: `/movies/'+ ${value.id}`, query: {data: JSON.stringify(value)}}}>
                            <img src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
                                 alt=""/> {value.title}</Link></div>)
            }
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default MoviesPage;
