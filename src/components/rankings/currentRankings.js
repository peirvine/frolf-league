import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getRankings } from '../../services/rankingsService'
import './rankings.scss'
// TODO: potentially break out the map to a different component in case we want different instances of rankings

export default function CurrentRankings () {
  const rankings = getRankings()

  return (
    <div className="currentRankings">
      <h1>Current Rankings</h1>
      <TableContainer component={Paper} size="small" className="rankingsTable">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankings.map((player) => (
              <TableRow
                key={player.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {player.name}
                </TableCell>
                <TableCell align="right">{player.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}