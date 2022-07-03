import { Button, Typography } from '@mui/material'
import React from 'react'

function StartGame(props) {
  return (
    <div class='start-game-container'>
        <Typography variant='h3' className='start-game-text'>Start a new game</Typography>
        <Button onClick={props.selectComputer} size='large' variant='contained'>vs Computer</Button>
        <Button onClick={props.selectHuman} size='large' variant='contained'>2 Player</Button>
    </div>
  )
}

export default StartGame