import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { arrayOf, func, shape, string } from 'prop-types'
import './Card.scss'

const Card = ({ back, front, matches, selected, setSelected }) => {
  const [cardClicked, setCardClicked] = useState(false)
  const [cardMatched, setCardMatched] = useState(false)

  const handleCardClick = () => {
    if (selected.length < 2) {
      setCardClicked(true)
      setSelected(prevState => [...prevState, front?.id])
    }
  }

  const cardContainerClassName = clsx('card-container', {
    'card-flippler': cardClicked,
    'card-matched': cardMatched,
  })

  useEffect(() => {
    if (!selected.length && !matches.includes(front?.id)) {
      setCardClicked(false)
    }
  }, [selected, matches])

  useEffect(() => {
    if (matches.includes(front?.id)) {
      setTimeout(() => {
        setCardMatched(true)
      }, 500)
    }
  }, [matches])

  return (
    <div className="card" onClick={handleCardClick}>
      <div className={cardContainerClassName}>
        <div className="card-back">
          <img alt="Back card image" draggable={false} src={back} />
        </div>

        <div className="card-front">
          <img alt="Front card image" draggable={false} src={front?.img} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  back: string,
  front: shape({
    id: string,
    name: string,
    img: string,
  }),
  matches: arrayOf(string),
  setSelected: func,
  selected: arrayOf(string),
}

Card.defaultProps = {
  back: null,
  front: null,
}

export default Card
