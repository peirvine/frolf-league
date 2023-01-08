import * as React from "react";
import { NavLink } from "react-router-dom";
import './nav.scss'

export default function Nav() {

  return (
    <div className="header">
      <div className="headerContent">
        <div className="leagueName">
          Such Frolf
        </div>
        <div className="leagueNavigation">
          <NavLink to ="/">Home</NavLink>
          <NavLink to="add">Add Scorecard</NavLink>
          <NavLink to="rankings">Current Rankings</NavLink>
          <NavLink to="scorecards">Past Results</NavLink>
        </div>
      </div>
    </div>
  )
}