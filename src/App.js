import React from 'react'
import Buttons from './components/Button'
import Container from './components/Container'
import GalleryPlaceholder from './components/GalleryPlaceholder'
import Overview from './components/ratings/Overview'
import Summary from './components/ratings/Summary'
import Title from './components/Title'
import Widgets from './components/Widgets'

function App() {
  return (
    <Container>
      <Title />
      <Widgets>
        <Summary />
        <Overview />

        <Buttons />
      </Widgets>
    </Container>
  )
}

export default App
