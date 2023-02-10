import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'

import { Card } from '../Card'
import BackCardImg from '../../assets/back-card-img.png'
import { FRONT_IMAGES } from '../../constants'

import './Memo.scss'

function App() {
  const [matches, setMatches] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected

      if (first === second) {
        setMatches(prevState => [...prevState, first])
      }

      setTimeout(() => {
        setSelected([])
      }, 1000)
    }
  }, [selected])

  function throwConfetti() {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    })
  }

  function userWin() {
    throwConfetti()

    setTimeout(() => {
      throwConfetti()
    }, 500)

    setTimeout(() => {
      throwConfetti()
    }, 1000)

    setTimeout(() => {
      throwConfetti()
    }, 1500)

    setTimeout(() => {
      throwConfetti()
    }, 2000)
  }

  useEffect(() => {
    if (matches.length === FRONT_IMAGES.length / 2) {
      userWin()
    }
  }, [matches])

  return (
    <div className="Memo">
      {FRONT_IMAGES?.map((card, index) => {
        return (
          <Card
            key={`card-${index}`}
            back={BackCardImg}
            front={card}
            matches={matches}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </div>
  )
}

export default App
