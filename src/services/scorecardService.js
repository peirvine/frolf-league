import { DataStore } from '@aws-amplify/datastore';
import { Scorecards } from '../models/index';

export async function getScorecards() {
  try {
    const models = await DataStore.query(Scorecards);
    // console.log("Posts retrieved successfully!", JSON.stringify(models, null, 2));
    // return JSON.stringify(models, null, 2)
    return new Promise(resolve => {resolve(models)})
  } catch (error) {
    console.log("Error retrieving posts", error);
    return error
  }
}

export async function addScorecard (card) {
  let valid = false
  console.log(card)
  await DataStore.save(
    new Scorecards({
		"Course": "Lorem ipsum dolor sit amet",
		"Layout": "Lorem ipsum dolor sit amet",
		"Player": [],
		"Date": "1970-01-01Z"
	})
);

  return valid
}