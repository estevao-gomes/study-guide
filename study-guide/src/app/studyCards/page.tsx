import data from '@/data/data.json'

function getRandomCard(){
    const cardsLength = data.cards.length

    const randomCard = Math.floor(Math.random()*cardsLength)

    return data.cards[randomCard]
}
export default function Home() {
  return (
    <div className="w-full rounded-md border border-green-400 p-4">
      <h1>StudyCards</h1>
      <h2>{getRandomCard().title}</h2>
    </div>
  );
}
