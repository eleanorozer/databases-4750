import axios from 'axios';

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