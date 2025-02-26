import './App.css'
import {Grid, GridItem, Text} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre|null>(null);


  return (
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <Navbar></Navbar>
        </GridItem>

        <GridItem area='aside' hideBelow="lg" >
          <GenreList onSelectGenre={setSelectedGenre}/>
        </GridItem>

        <GridItem area='main' >
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>

  )
}

export default App
