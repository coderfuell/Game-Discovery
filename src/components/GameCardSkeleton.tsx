import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import {
    Skeleton,
    SkeletonText,
  } from "./ui/skeleton"

function GameCardSkeleton(){
    return (
        <>
        <Card.Root borderRadius={10} overflow='hidden'>
            
            <Image src = {"https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg"}
             objectFit="contain"/>

            <CardBody>
                <SkeletonText fontSize={"2xl"}></SkeletonText>
            </CardBody>
        </Card.Root>
        </>
    )
}

export default GameCardSkeleton