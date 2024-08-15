import React from 'react';
import {GenreModel} from "@/models/GenreModel";
import Link from "next/link";
import {getGenres} from "@/services/api.service";

const Page = async ():Promise<any> => {

    const genres: GenreModel[] = await getGenres()

    return (
            <ul>
             {
                genres.map(value =>(<li key={value.id}> <Link href={{pathname:`/genres/${value.id}`,  query: {data: JSON.stringify(value)}}}>{value.name}</Link></li>))
             }
            </ul>
    );
};

export default Page;