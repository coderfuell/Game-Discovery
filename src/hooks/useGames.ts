import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../components/services/api-client";
import { useEffect, useState } from "react";
import { Genre } from "./useGenre";

export interface Platform{
    id:number,
    name:string,
    slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic: number;
}

export interface FetchGamesResponse {
    count:number;
    results: Game[] 
}


function useGames(selectedGenre: Genre|null){
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    let requestConfig: AxiosRequestConfig = {params: {genres: selectedGenre?.id}}

    useEffect(()=>{
        const controller = new AbortController()

        setLoading(true);
        apiClient
            .get<FetchGamesResponse>('/games', {signal: controller.signal, ...requestConfig})
            .then((res)=>{setGames(res.data.results)
                setLoading(false)
            })
            .catch(err=>{
                if (err instanceof CanceledError) return ;
                setError(err.message)
            setLoading(false)})
        
        return () => controller.abort();
    }, [selectedGenre])
    return {games, error, isLoading};
}
export default useGames