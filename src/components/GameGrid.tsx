import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenre";

interface Props{
    selectedGenre : Genre|null;
}

function GameGrid({selectedGenre}: Props) {
    const {games, error, isLoading} = useGames(selectedGenre)

    const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    return (
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid 
        columns={{sm:1, md:2, lg:3, xl:5}}
        gap={10}
        padding={10}>
        {games.map((game)=><GameCard key={game.id} game={game}></GameCard>)}
        {isLoading && skeletons.map(el=>(<GameCardSkeleton></GameCardSkeleton>))}
        
        </SimpleGrid>
        </>
    )
}

export default GameGrid