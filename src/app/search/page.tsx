"use client"
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {searchService} from "@/services/api.service";
import {MovieModel} from "@/models/MovieModel";
import {SearchResultsModel} from "@/models/SearchResultsModel";
const Page =  (
    {placeholder}: {placeholder:string}) => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const queryParam = searchParams.get('query');
        if (queryParam) {
            setQuery(queryParam);
            fetchMovies(queryParam, currentPage);
        }
    }, [searchParams, currentPage]);

    const fetchMovies = async (term: string, page: number) => {
        const response:SearchResultsModel = await searchService(page,term);
        setMovies(response.results);
        setTotalPages(response.total_pages);
    };

    const handleSearch=(term:string)=>{
        const params= new URLSearchParams(searchParams)
        if(term){
            params.set('query', term)
        }else{
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
        setQuery(term)
    }


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
            <label>search</label>
            <input
                value={query}
                placeholder={placeholder}
                   onChange={(e) => {
                       handleSearch(e.target.value)
                   }}
            />
            {
            movies.map(movie =><div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    {movie.name} </div>)
            }
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
        </div>
    );
};

export default Page;