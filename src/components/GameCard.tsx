import { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedUrl from "./services/image-url"

interface Props{
    game: Game
}

function GameCard({game}:Props){
    return (<>
        <Card.Root borderRadius={10} overflow='hidden'>
            <Image src={getCroppedUrl(game.background_image)} objectFit="contain"/>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}>
                </PlatformIconList>
                <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
            </CardBody>
        </Card.Root>
    </>)
}

export default GameCard