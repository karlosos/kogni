import React, { useState, useEffect } from 'react'
import './App.scss'
import ExperimentStep from './ExperimentStep'
import ImagesFileNames from './ImagesFileNames'
import shuffle from 'shuffle-x'
import ExperimentFinished from './ExperimentFinished'
import InputName from './InputName'

function App () {
  const [isName, setIsName] = useState('')
  const [fileNames, setFileNames] = useState([])
  const [experimentStepData, setExperimentStepData] = useState('')
  const [isExperimentFinished, setExperimentFinished] = useState(false)
  const [experimentData, setExperimentData] = useState([['user', 'obraz', 'ocena', 'system_czas']])

  console.log(fileNames)

  useEffect(() => {
    const preExperimentStabilization = shuffle(ImagesFileNames).slice(0, 3)
    const fileNames = [...preExperimentStabilization, ...shuffle(ImagesFileNames)]
    setFileNames(fileNames)

    setExperimentStepData({
      currentImageIndex: 1,
      imagesCount: fileNames.length,
      imageSource: fileNames[0]
    })
  }, [])

  const saveData = (imageRating, imageSource, timeStart) => {
    console.log(fileNames)
    console.log(imageSource, imageRating, timeStart)
    const currentImageIndex = experimentStepData.currentImageIndex + 1

    if (currentImageIndex > experimentStepData.imagesCount) {
      setExperimentFinished(true)
    }

    const currentDataRow = [isName, imageSource, imageRating, timeStart]
    setExperimentData([...experimentData, currentDataRow])

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

  const experimentFinished = <ExperimentFinished experimentData={experimentData} />

  return (
    <>
      {isName === '' ? <InputName setIsName={setIsName} /> : ''}
      {isName !== '' && !isExperimentFinished ? experimentStep : ''}
      {isExperimentFinished ? experimentFinished : ''}

    </>
  )
}

export default App
