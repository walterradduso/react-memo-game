import { useEffect, useState } from 'react'

import { Footer } from '../Footer'
import { Memo } from '../Memo'
import { LEVEL_ONE, LEVEL_TWO, LEVEL_THREE } from '../../constants'

import './App.scss'

export default function App() {
  const [selectedLevel, setSelectedLevel] = useState('1')
  const [cardsList, setCardsList] = useState(LEVEL_ONE)

  useEffect(() => {
    const returnLevelCards = () => {
      if (selectedLevel === '1') {
        return LEVEL_ONE
      }

      if (selectedLevel === '2') {
        return LEVEL_TWO
      }

      return LEVEL_THREE
    }

    setCardsList(returnLevelCards())
  }, [selectedLevel])

  return (
    <div className="App">
      <h1 className="title">Memory Game</h1>

      <div className="level-selection">
        <h4>Seleccione el nivel</h4>

        <select
          className="dropdown"
          defaultValue={selectedLevel}
          onChange={({ target }) => {
            setSelectedLevel(target.value)
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <Memo cardsList={cardsList} gameLevel={selectedLevel} />

      <Footer />
    </div>
  )
}
