import { Badge } from "@chakra-ui/react";

interface Props{
    score: number;
}

function CriticScore({score}:Props){
    let color = score>75? 'green': score>60? 'yellow': 'red'

    return (
        <>
        <Badge fontSize={'14px'} paddingX={2}
        colorPalette={color}
        >{score}</Badge>
        </>
    )
}
export default CriticScore