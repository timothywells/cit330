import { getJSON, getLocation } from './utilities.js';

//Quake Module
export default class Quake {
   constructor() {
      this.baseURL = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson'
      this._quakes = [];
   }
   async getEarthQuakesByRadius(position, radius = 100){
      this._quakes = await getJSON(
           `${this.baseURL}&starttime=${getPastDate()}&endtime=${getDate()}&latitude=${
            position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
       );
       console.log(`${this.baseURL}&starttime=${getPastDate()}&endtime=${getDate()}&latitude=${
         position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`);
       return this._quakes;   
   }

   getQuakeById(id) {
      // filter this._quakes for the record identified by id and return it
      return this._quakes.features.filter(item => item.id === id)[0];
    }
}

function getDate(){
   let date = new Date();
   let year = date.getFullYear();
   let month = date.getMonth() + 1;
   let day = date.getDate();
   return `${year}-${month}-${day}`;
}

function getPastDate(){
   let date = new Date(getDate());
   let year = date.getFullYear();
   let month = date.getMonth();
   if(month == 0){
      month = 12;
      year --;
   }
   let day = date.getDate();
   return `${year}-${month}-${day}`;
}