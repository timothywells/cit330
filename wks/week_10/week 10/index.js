import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./QuakesController.js";

function getQuakeList() {
  const quakes = new QuakesController("#quakeList");
  quakes.init();
}

document.getElementById("radius").addEventListener("change", getQuakeList);

document.getElementById("back").addEventListener("click", () => {
   getQuakeList();
   document.getElementById("back").classList.add("hidden");

});


//const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02&latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100';

//https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-10-18&endtime=2020-11-19&latitude=40.560230399999995&longitude=-111.84046079999999&maxradiuskm=100
