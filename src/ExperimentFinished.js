import React from 'react'
import { CSVLink, CSVDownload } from 'react-csv'

const ExperimentFinished = ({ experimentData }) => {
  return (
    <section class='hero is-fullheight is-default is-bold experiment-step'>
      <div class="hero-body">
      <div class='container has-text-centered'>
        <div class='columns is-vcentered is-centered'>
          <div class='column is-half'>
              Eksperyment się zakończył
            <div>
            <CSVLink
              filename='technika_pojedynczego_bodzca.csv'
              className='button'
              data={experimentData.slice(4, experimentData.length)}
              // enclosingCharacter=''
            >
               Pobierz CSV
            </CSVLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ExperimentFinished
