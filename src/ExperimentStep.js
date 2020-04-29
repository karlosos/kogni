import React, { useState, useEffect } from 'react'
import Image from './Image'

const ExperimentStep = ({ imageSource, currentImageIndex, imagesCount, saveData }) => {
  const [isShowingImage, setIsShowingImage] = useState(true)
  const [timeStart, setTimeStart] = useState(new Date().getTime())

  useEffect(() => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles'
    }
    const date = new Date()
    const dateFmt = new Intl.DateTimeFormat('pl-PL', options).format(date)
    setTimeStart(dateFmt)

    const interval = setInterval(() => {
      setIsShowingImage(false)
    }, 3000)
    return () => clearInterval(interval)
  }, [imageSource])

  const submitData = (imageRating) => {
    setIsShowingImage(true)
    saveData(imageRating, imageSource, timeStart)
  }

  return (
    <section class='hero is-fullheight is-default is-bold experiment-step'>
      <div class='container has-text-centered'>
        <div class='columns is-centered'>
          <div class='column is-half'>
            {currentImageIndex}/{imagesCount}
          </div>
        </div>
        <div class='columns is-centered'>
          <div class='column'>
              Oceń w jaki sposób obrazek przyciągnął Twoją uwagę
          </div>
        </div>
        {isShowingImage &&
          <div class='columns is-vcentered imageSection'>
            <Image source={'./images/' + imageSource} />
          </div>}

        {!isShowingImage &&
          <div class='columns is-vcentered answer-section'>
            <button class='button' onClick={() => submitData('bardzo drazniacy')}>Bardzo drażniący</button>
            <button class='button' onClick={() => submitData('drazniacy')}>Drażniący</button>
            <button class='button' onClick={() => submitData('taki sobie')}>Taki sobie</button>
            <button class='button' onClick={() => submitData('przyjazny')}>Przyjazny</button>
            <button class='button' onClick={() => submitData('bardzo przyjazny')}>Bardzo przyjazny</button>
          </div>}
      </div>
    </section>
  )
}

export default ExperimentStep
