import axios from 'axios';

/**
 * 
 * Backend calls reside here. Call these functions to
 * retrieve 
 */

export function handler(err) {
  let error = err;
  if (err.response && err.response.data.hasOwnProperty("message"))
      error = err.response.data;
  else if (!err.hasOwnProperty("message")) error = err.toJSON();

  return new Error(error.message);
}

// grab the list of animals from the database
// TODO: add filter option
export async function getAnimals() {
  try {
      console.log("API: grabbing list of animals");
      let res = await axios.get("http://localhost:5000/animals", {params: {all: 1}});
      return res.data;
  } catch (e) {
      throw handler(e);
  }
}