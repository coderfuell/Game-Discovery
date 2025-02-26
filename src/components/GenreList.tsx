import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre"
import getCroppedUrl from "./services/image-url";

function GenreList(){
    const {genres} = useGenres();
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

                <Text>{genre.name}</Text>
            </HStack>
            </List.Item>)}
        
        </List.Root>
        </>
    )
}

export default GenreList