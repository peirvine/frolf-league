import React, { useState } from 'react';
import { Autocomplete, Button, FormControl, TextField } from '@mui/material'
import { addScorecard } from '../../services/scorecardService';

export default function Add () {
  const [layouts, setLayouts] = useState([])

  const [chosenCourse, setChosenCourse] = useState('')
  const [chosenLayout, setChosenLayout] = useState('')
  const [par, setPar] = useState(0)

  const handleSubmit = () => {
    const scorecard = {
      course: chosenCourse,
      layout: chosenLayout,
      par
    }
    addScorecard(scorecard)
  }

  return (
    <div className="addScorecard">
      <p>Add, Add, Add</p>
      <FormControl>
        <Autocomplete
          disablePortal
          freeSolo
          onChange={(event, newValue) => {
            setLayouts(newValue.layouts)
            setChosenCourse(newValue.label)
          }}
          id="combo-box-demo"
          options={frolfCourses}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Course" />}
        />
        <Autocomplete
          disablePortal
          freeSolo
          onChange={(event, newValue) => {
            setChosenLayout(newValue)
          }}
          id="combo-box-demo"
          options={layouts}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Layout" />}
        />
        <TextField 
          id="outlined-basic"
          label="Par"
          variant="outlined"
          onInput={e => setPar(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleSubmit()}>Add Scorecard</Button>
      </FormControl>
    </div>
  )
}

const frolfCourses = [
  { label: 'Riverfront 13', layouts: ['Red', 'Blue', 'Other']},
  { label: 'Moir Park', layouts: ['Once Around', 'Twice Around'] },
];