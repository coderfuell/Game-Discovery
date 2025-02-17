import { Button, HStack, Image, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"
import { Switch } from "./ui/switch"


function Navbar(){
    const {toggleColorMode, colorMode} = useColorMode()
    return (
        <HStack justifyContent='space-between' padding="10px">
            <Image 
            src="https://i.pinimg.com/736x/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.jpg"
            boxSize="60px"></Image>
            <Text>Navbar

            </Text>
            <Switch colorPalette="green" checked={colorMode==="dark"} onCheckedChange={toggleColorMode}>
                {colorMode}
                </Switch>
        </HStack>
    )
}

export default Navbar