import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { clsx } from 'clsx'
import { arrayOf, shape, string } from 'prop-types'

import { Card } from '../Card'
import BackCardImg from '../../assets/back-card-img.png'

import './Memo.scss'

function Memo({ gameLevel }) {
  const [matches, setMatches] = useState([])
  const [userWin, setUseWin] = useState(false)
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

  function restart() {
    window.location.reload()
  }

  function winner() {
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
    if (matches.length === gameLevel.length / 2) {
      winner()
      setUseWin(true)
    }
  }, [matches])

  const modalWinnerStyles = clsx('modal-winner', {
    'show-modal': userWin,
  })

  return (
    <div className="Memo">
      {gameLevel?.map((card, index) => {
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

      <div className={modalWinnerStyles}>
        <button className="modal-winner-close">X</button>

        <h6 className="modal-winner-title">
          <span>Felicitaciones!</span>
          <span>Ganaste!</span>
        </h6>

        <button className="modal-winner-btn" onClick={restart}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}

Memo.propTypes = {
  gameLevel: arrayOf(
    shape({
      id: string,
      name: string,
      img: string,
    }),
  ),
}

export default Memo
