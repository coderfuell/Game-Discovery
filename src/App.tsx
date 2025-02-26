import './App.css'
import {Grid, GridItem} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {


  return (
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}>
        <GridItem area='nav'>
          <Navbar></Navbar>
        </GridItem>

        <GridItem area='aside' hideBelow="lg" >
          <GenreList/>
        </GridItem>

        <GridItem area='main' >
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>

  )
}

export default App
