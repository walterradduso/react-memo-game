import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { string } from 'prop-types'
import './Card.scss'

const Card = ({ label }) => {
  const [cardClicked, setCardClicked] = useState(false)

  const handleCardClick = () => {
    setCardClicked(true)
  }

  const cardContainerClassName = clsx('card-container', {
    'card-flippler': cardClicked,
  })

  useEffect(() => {
    if (cardClicked) {
      setTimeout(() => {
        setCardClicked(false)
      }, 5000)
    }
  }, [cardClicked])

  return (
    <div className="card" onClick={handleCardClick}>
      <div className={cardContainerClassName}>
        <div className="card-front">
          <p>{label}</p>
        </div>

        <div className="card-back">
          <p>BACK</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  label: string,
}

Card.defaultProps = {
  label: null,
}

export default Card
