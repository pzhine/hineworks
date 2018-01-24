import React from 'react'

const playPause = videoElem => {
  if (videoElem.paused) {
    videoElem.play()
  } else {
    videoElem.pause()
  }
}

const Video = ({ src, onReadyStateChange }) =>
  <video
    src={src}
    autoPlay
    muted
    loop
    playsInline
    onProgress={e => onReadyStateChange(e.target)}
    onClick={e => playPause(e.target)}
  />

export default Video
