import { getScorecards } from "../../services/scorecardService"


export default function ViewScorecards () {
  const cards = getScorecards().then((value) => {
    console.log(value);
    return value;
  }
  )

  console.warn('cards', cards)

  // cards.map(card => console.warn("card", card))
  
  return (
    <div className="scorecards">
      {/* {cards.map(card => (
        <p>{card.Layout}</p>
      ))} */}

      tests
    </div>
  )
}