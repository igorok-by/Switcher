import React, { useState } from 'react'
import './App.scss'

import { FRUITS, DEFAULT_ID, DEFAULT_MESSAGE } from '../../data'

const App = () => {
  const [fruitId, setFruitId] = useState(DEFAULT_ID)

  const fruitName =
    fruitId === DEFAULT_ID
      ? DEFAULT_MESSAGE
      : FRUITS.find((fruit) => fruit.id === fruitId).name

  const handleValueChange = ({ target: { value } }) => {
    // console.log(value)

    if (value) {
      const inputNumb = +value.trim()

      if (!Number.isNaN(inputNumb)) {
        const newValue =
          Math.abs(inputNumb) > 10
            ? Math.abs(inputNumb) % 10
            : Math.abs(inputNumb)

        setFruitId(newValue)
      }
    } else {
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
