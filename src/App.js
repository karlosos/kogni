import React, { useState } from 'react'
import './App.scss'
import ExperimentStep from './ExperimentStep'
import ImagesFileNames from './ImagesFileNames'
import shuffle from 'shuffle-x'
import ExperimentFinished from './ExperimentFinished'
import InputName from './InputName'

function App () {
  const fileNames = shuffle(ImagesFileNames)
  const [experimentStepData, setExperimentStepData] = useState({
    currentImageIndex: 1,
    imagesCount: fileNames.length,
    imageSource: fileNames[0]
  })
  const [isName, setIsName] = useState('')

  const [isExperimentFinished, setExperimentFinished] = useState(false)

  const saveData = (imageRating, imageSource, timeStart) => {
    console.log(imageSource, imageRating, timeStart)
    const currentImageIndex = experimentStepData.currentImageIndex + 1

    if (currentImageIndex > experimentStepData.imagesCount) {
      setExperimentFinished(true)
      // Tutaj mozemy wrzucic wszystkie dane do spreadsheet
    }

    // lub mozemy wrzucic tutaj pojedynczy wiersz do spredsheet

    setExperimentStepData({
      currentImageIndex: currentImageIndex,
      imagesCount: experimentStepData.imagesCount,
      imageSource: fileNames[currentImageIndex - 1]
    })
  }

  const experimentStep = (
    <ExperimentStep
      imageSource={experimentStepData.imageSource}
      currentImageIndex={experimentStepData.currentImageIndex}
      imagesCount={experimentStepData.imagesCount}
      saveData={saveData}
    />
  )

  const experimentFinished = <ExperimentFinished />
  return (
    <>
      {isName === '' ? <InputName setIsName={setIsName}/> : ''}
      {isExperimentFinished ? experimentFinished : experimentStep}
    </>
  )
}

export default App
