import React, { useState } from 'react'
import './App.scss'

import FRUITS from '../../data/fruits'

const App = () => {
  const [fruitId, setFruitId] = useState(1)

  const fruitName = FRUITS.find((fruit) => fruit.id === +fruitId).name

  const handleValueChange = (event) => {
    setFruitId(event.target.value)
  }

  return (
    <form className="app">
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
