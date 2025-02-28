import React from 'react'

import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()( theme => ( { 
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    scrollSnapAlign: 'start'
  },
  player: {
    objectFit: 'fill',
    width: '100%',
    height: '100%'
  }
} ) )

const Video = () => {

  const { classes } = useStyles()

  return (
    <div className={classes.container}>
      <video
        className={classes.player}
        src="https://videos.pexels.com/video-files/4434242/4434242-uhd_1440_2560_24fps.mp4"
        autoPlay
        loop	
      />
    </div>
  )
}

export default Video