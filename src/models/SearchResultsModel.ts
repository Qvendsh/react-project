import {ISearchResult} from "@/models/ISearchResult";

export interface SearchResultsModel{
    page: number;
    results: ISearchResult[];
    total_pages: number;
    total_results: number;
}