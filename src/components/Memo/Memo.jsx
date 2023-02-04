import { useState } from 'react'

import { Card } from '../Card'

import './Memo.scss'

function App() {
  const [cards, setCards] = useState(() => Array(12).fill('card'))

  return (
    <div className="Memo">
      {cards?.map((card, index) => {
        return <Card key={`card-${index}`} label={card} />
      })}
    </div>
  )
}

export default App
