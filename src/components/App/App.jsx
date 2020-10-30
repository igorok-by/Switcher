import React, { useState } from 'react'
import './App.scss'

import { FRUITS, DEFAULT_ID, DEFAULT_MESSAGE } from '../../data'

const App = () => {
  const [fruitId, setFruitId] = useState(DEFAULT_ID)
  const [isMessageShown, setIsMessageShown] = useState(true)

  const fruitName = isMessageShown
    ? DEFAULT_MESSAGE
    : FRUITS.find((fruit) => fruit.id === fruitId).name

  const handleValueChange = ({ target: { value } }) => {
    if (value && !Number.isNaN(+value.trim())) {
      const inputNumb = Math.abs(+value.trim())
      const fruitsQuantity = FRUITS.length

      if (inputNumb > fruitsQuantity || inputNumb === DEFAULT_ID) {
        setIsMessageShown(true)
      } else {
        setIsMessageShown(false)
        setFruitId(inputNumb)
      }
    } else {
      setIsMessageShown(true)
      setFruitId(DEFAULT_ID)
    }
  }

  return (
    <form className="app" onSubmit={(e) => e.preventDefault()}>
      <p className="app__title">{fruitName}</p>
      <input
        type="text"
        className="app__input"
        value={fruitId}
        onChange={handleValueChange}
      />
    </form>
  )
}

export default App
