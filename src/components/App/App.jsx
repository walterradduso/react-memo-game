import { useEffect, useState } from 'react'
import { Select } from '@chakra-ui/select'

import { Memo } from '../Memo'

import './App.scss'
import { LEVEL_ONE, LEVEL_TWO, LEVEL_THREE } from '../../constants'

export default function App() {
  const [selectLevel, setSelectLevel] = useState('1')
  const [levelSelected, setLevelSelected] = useState(LEVEL_ONE)

  const returnLevelCards = () => {
    if (selectLevel === '1') {
      return LEVEL_ONE
    }

    if (selectLevel === '2') {
      return LEVEL_TWO
    }

    return LEVEL_THREE
  }

  useEffect(() => {
    const newLevelSelected = returnLevelCards()

    setLevelSelected(newLevelSelected)
  }, [selectLevel])

  
  return (
    <div className="App">
      <Select
        maxWidth={500}
        placeholder="Seleccionar Nivel"
        onChange={({ target }) => {
          setSelectLevel(target.value)
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>

      <Memo gameLevel={levelSelected} />
    </div>
  )
}
