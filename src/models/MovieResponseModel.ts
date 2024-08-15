import {MovieModel} from "@/models/MovieModel";
import {IPagination} from "@/models/IPagination";

export interface MovieResponseModel{
    page: number;
    results: MovieModel[],
    total_pages: number,
    total_items: number,
}