import './nav.scss'

export default function Nav() {

  return (
    <div className="header">
      <div className="headerContent">
        <div className="leagueName">
          Such Frolf
        </div>
        <div className="leagueNavigation">
          <a href="/">Add Scorecard</a>
          <a href="/">Past Results</a>
        </div>
      </div>
    </div>
  )
}