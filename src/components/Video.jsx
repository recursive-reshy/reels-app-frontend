import React, { useRef, useState } from 'react'

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

  const [ playing, setPlaying ] = useState(false)

  const videoRef = useRef(null)

  return (
    <div className={classes.container}>
      <video
        className={classes.player}
        ref={videoRef}
        src="https://videos.pexels.com/video-files/4434242/4434242-uhd_1440_2560_24fps.mp4"
        onClick={ () => {
          if(playing) {
            videoRef.current.pause()
            setPlaying(false)
          } else {
            videoRef.current.play()
            setPlaying(true)
          }
        } }
        autoPlay
        loop	
      />
    </div>
  )
}

export default Video