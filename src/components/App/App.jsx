import { useEffect, useState } from 'react'
import { Select } from '@chakra-ui/select'

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

        <Select
          defaultValue={selectedLevel}
          maxWidth={500}
          onChange={({ target }) => {
            setSelectedLevel(target.value)
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
      </div>

      <Memo cardsList={cardsList} gameLevel={selectedLevel} />
    </div>
  )
}
