import React, { useState, useEffect } from 'react'

const InputName = ({setIsName}) => {

  const [isNameInInput, setIsNameInInput] = useState('')

  const saveName = (name) => {
    setIsNameInInput(name)
  }

  const start = () => {
    setIsName(isNameInInput)
  }


  return (
    <section class='hero is-fullheight is-default is-bold experiment-step'>
      <div class='container has-text-centered'>
        <div class='columns is-centered'>
          <div class="column">
            <div class="field">
              <div class="control">
                <input onChange={event => saveName(event.target.value)} class="input" type="text" placeholder="Podaj imie"/>
              </div>
            </div>
            <button onClick={() => start()} class="button is-block is-info is-fullwidth">Zacznij badanie <i class="fa fa-sign-in" aria-hidden="true"></i></button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default InputName
