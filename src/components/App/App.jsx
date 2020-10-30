import React, { useState } from 'react'
import classNames from 'classnames'
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

      setIsMessageShown(inputNumb > FRUITS.length || inputNumb === DEFAULT_ID)
      setFruitId(inputNumb)
    } else {
      setIsMessageShown(true)
      setFruitId(DEFAULT_ID)
    }
  }

  const titleClasses = classNames('app__title', {
    'app__title--capitalize': !isMessageShown,
  })

  return (
    <form className="app" onSubmit={(e) => e.preventDefault()}>
      <p className={titleClasses}>{fruitName}</p>
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
