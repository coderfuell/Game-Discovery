import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

function useGenres(){
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController()

        setLoading(true);
        apiClient
            .get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then((res)=>{setGenres(res.data.results)
                setLoading(false)
            })
            .catch(err=>{
                if (err instanceof CanceledError) return ;
                setError(err.message)
            setLoading(false)})
        
        return () => controller.abort();
    }, [])
    return {genres, error, isLoading};

}

export default useGenres