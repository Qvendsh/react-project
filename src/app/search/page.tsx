"use client"
import React, {useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {searchService} from "@/services/api.service";
import {SearchResultsModel} from "@/models/SearchResultsModel";
import '@/app/search/search.css'
import Link from "next/link";
import StarsRating from "@/components/StarsRatingComponent/StarsRating";


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
            fetchService(queryParam, currentPage);
        }
    }, [searchParams, currentPage]);

    const fetchService = async (term: string, page: number) => {
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

    return (<div>
        <div className='searchdiv'>
            <label className='textbox'>Search Movies</label>
            <input className='searchbar'
                value={query}
                placeholder={placeholder}
                   onChange={(e) => {
                       handleSearch(e.target.value)
                   }}
            />
            <div className='moviegrid'>
            {
            movies.map(movie =>
                <div key={movie.id} className='moviestyle'>
                    <div className='movie-box'>
                        <Link className='link-box'
                              href={{pathname: `/movies/'+ ${movie.id}`, query: {data: JSON.stringify(movie)}}}>
                            <div className='image-container'>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                            </div>
                            <div>
                                <StarsRating rating={movie.vote_average} />
                            </div>
                            <div className='cinzel-title-box'>
                               <h3> {movie.title}</h3>
                            </div>
                        </Link>
                    </div>
                </div>)
            }
            </div>
        </div>
          {movies.length > 0 && (
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
            )}
        </div>
    );
};

export default Page;