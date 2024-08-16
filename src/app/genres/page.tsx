import React from 'react';
import {GenreModel} from "@/models/GenreModel";
import Link from "next/link";
import {getGenres} from "@/services/api.service";

import '@/app/genres/genres.css'

const Page = async ():Promise<any> => {

    const genres: GenreModel[] = await getGenres()

    return (
            <div className='genre-box'>
             {
                genres.map(value =>
                    (<div className='genre' key={value.id}>
                        <Link className='link' href={{pathname:`/genres/${value.id}`,  query: {data: JSON.stringify(value)}}}>
                            {value.name}
                        </Link>
                    </div>))
             }
            </div>
    );
};

export default Page;