import { Button, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre"
import getCroppedUrl from "./services/image-url";

interface Props{
    onSelectGenre: (genre: Genre) => void;
}

function GenreList({onSelectGenre}:Props){
    const {genres, isLoading, error} = useGenres();
    if (isLoading) return <Spinner></Spinner>
    if (error) return null
    return (
        
        <>
        <List.Root padding={'5px'}>
        {genres.map(genre => <List.Item key={genre.id}>
            <HStack>
                <Image 
                boxSize='32px' 
                borderRadius={8} 
                src={getCroppedUrl(genre.image_background)} 
                overflow={"hidden"}/>

                <Button fontSize='lg' variant='plain' onClick={()=>onSelectGenre(genre)}>
                    {genre.name}
                </Button>
            </HStack>
            </List.Item>)}
        
        </List.Root>
        </>
    )
}

export default GenreList